const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_BODY_BYTES = 12 * 1024;
const requestsByIp = new Map();
let requestsSinceCleanup = 0;

const respond = (response, status, body, headers = {}) => {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    ...headers
  });
  response.end(JSON.stringify(body));
};

const getClientIp = (request) => {
  if (process.env.VERCEL === '1') {
    const forwarded = request.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') {
      const addresses = forwarded.split(',').map((address) => address.trim()).filter(Boolean);
      if (addresses.length) return addresses[addresses.length - 1];
    }
  }
  return request.socket && request.socket.remoteAddress
    ? request.socket.remoteAddress
    : 'unknown';
};

const isRateLimited = (ip, now = Date.now()) => {
  requestsSinceCleanup += 1;
  if (requestsSinceCleanup >= 100) {
    for (const [key, entry] of requestsByIp) {
      if (entry.expiresAt <= now) requestsByIp.delete(key);
    }
    requestsSinceCleanup = 0;
  }

  const entry = requestsByIp.get(ip);
  if (!entry || entry.expiresAt <= now) {
    requestsByIp.set(ip, { count: 1, expiresAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) return true;
  entry.count += 1;
  return false;
};

const readBody = async (request) => {
  if (Number(request.headers['content-length']) > MAX_BODY_BYTES) {
    const error = new Error('Request body too large');
    error.statusCode = 413;
    throw error;
  }

  if (request.body !== undefined) {
    if (typeof request.body === 'string') return JSON.parse(request.body);
    if (Buffer.isBuffer(request.body)) return JSON.parse(request.body.toString('utf8'));
    return request.body;
  }

  const chunks = [];
  let size = 0;
  for await (const chunk of request) {
    size += chunk.length;
    if (size > MAX_BODY_BYTES) {
      const error = new Error('Request body too large');
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
};

const cleanString = (value) => typeof value === 'string' ? value.trim() : '';

const handleContact = async (request, response) => {
  if (request.method !== 'POST') {
    return respond(response, 405, { error: 'method_not_allowed' }, { Allow: 'POST' });
  }

  const contentType = request.headers['content-type'] || '';
  if (!contentType.toLowerCase().startsWith('application/json')) {
    return respond(response, 415, { error: 'unsupported_media_type' });
  }

  const origin = request.headers.origin;
  const host = request.headers.host;
  if (origin && host) {
    let originHost;
    try {
      originHost = new URL(origin).host;
    } catch {
      return respond(response, 403, { error: 'invalid_origin' });
    }
    if (originHost !== host) return respond(response, 403, { error: 'invalid_origin' });
  }
  if (request.headers['sec-fetch-site'] === 'cross-site') {
    return respond(response, 403, { error: 'invalid_origin' });
  }

  if (isRateLimited(getClientIp(request))) {
    return respond(response, 429, { error: 'rate_limited' }, { 'Retry-After': '900' });
  }

  let body;
  try {
    body = await readBody(request);
  } catch (error) {
    const status = error.statusCode || 400;
    return respond(response, status, { error: status === 413 ? 'payload_too_large' : 'invalid_json' });
  }
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return respond(response, 400, { error: 'invalid_input' });
  }

  const name = cleanString(body.name);
  const email = cleanString(body.email);
  const subject = cleanString(body.subject);
  const message = cleanString(body.message);
  const honeypot = cleanString(body.website);
  const site = body.site === 'wolf' ? 'WOLF' : body.site === 'personal' ? 'Personal portfolio' : '';
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (honeypot || !name || name.length > 100 || !validEmail || email.length > 254 ||
      subject.length > 160 || !message || message.length > 5000 || !site) {
    return respond(response, 400, { error: 'invalid_input' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return respond(response, 503, { error: 'email_not_configured' });
  }

  const emailSubject = subject
    ? `[${site}] ${subject.replace(/[\r\n\x00-\x1f\x7f]/g, ' ')}`
    : `[${site}] New message from ${name.replace(/[\r\n\x00-\x1f\x7f]/g, ' ')}`;
  const text = [
    `Website: ${site}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject || '(none)'}`,
    '',
    message
  ].join('\n');

  let providerResponse;
  try {
    providerResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: emailSubject,
        text
      }),
      signal: AbortSignal.timeout(10000)
    });
  } catch (error) {
    console.error('Contact email provider request failed:', error.message);
    return respond(response, 502, { error: 'email_delivery_failed' });
  }

  if (!providerResponse.ok) {
    console.error('Contact email provider rejected request:', providerResponse.status);
    return respond(response, 502, { error: 'email_delivery_failed' });
  }

  return respond(response, 200, { ok: true });
};

module.exports = { handleContact };
