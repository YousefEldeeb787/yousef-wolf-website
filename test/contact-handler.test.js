const { test } = require('node:test');
const assert = require('node:assert/strict');
const { handleContact } = require('../contact-handler');

const validPayload = (overrides = {}) => ({
  name: 'Test Sender',
  email: 'sender@example.com',
  subject: 'A project enquiry',
  message: 'Please get in touch.',
  site: 'personal',
  website: '',
  ...overrides
});

const invoke = async (payload, options = {}) => {
  const response = {
    writeHead(status, headers) {
      this.status = status;
      this.headers = headers;
      return this;
    },
    end(body) {
      this.body = JSON.parse(body);
    }
  };
  await handleContact({
    method: options.method || 'POST',
    headers: {
      'content-type': options.contentType || 'application/json',
      host: 'localhost',
      origin: 'http://localhost'
    },
    socket: { remoteAddress: options.ip || `test-${Math.random()}` },
    body: payload
  }, response);
  return response;
};

const withEnvironment = async (values, callback) => {
  const previous = {};
  for (const [key, value] of Object.entries(values)) {
    previous[key] = process.env[key];
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }
  try {
    await callback();
  } finally {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
};

test('reports success only after the email provider accepts delivery', async () => {
  await withEnvironment({
    CONTACT_TO_EMAIL: 'destination@example.com',
    CONTACT_FROM_EMAIL: 'verified@example.com',
    RESEND_API_KEY: 'test-key'
  }, async () => {
    const originalFetch = global.fetch;
    let providerPayload;
    global.fetch = async (url, options) => {
      assert.equal(url, 'https://api.resend.com/emails');
      providerPayload = JSON.parse(options.body);
      return { ok: true, status: 200 };
    };
    try {
      const response = await invoke(validPayload());
      assert.equal(response.status, 200);
      assert.deepEqual(response.body, { ok: true });
      assert.deepEqual(providerPayload.to, ['destination@example.com']);
      assert.equal(providerPayload.reply_to, 'sender@example.com');
      assert.match(providerPayload.text, /Please get in touch\./);
    } finally {
      global.fetch = originalFetch;
    }
  });
});

test('returns a configuration error and never reports delivery when credentials are missing', async () => {
  await withEnvironment({
    CONTACT_TO_EMAIL: undefined,
    CONTACT_FROM_EMAIL: undefined,
    RESEND_API_KEY: undefined
  }, async () => {
    const response = await invoke(validPayload());
    assert.equal(response.status, 503);
    assert.equal(response.body.error, 'email_not_configured');
  });
});

test('returns a delivery error when the provider rejects the message', async () => {
  await withEnvironment({
    CONTACT_TO_EMAIL: 'destination@example.com',
    CONTACT_FROM_EMAIL: 'verified@example.com',
    RESEND_API_KEY: 'test-key'
  }, async () => {
    const originalFetch = global.fetch;
    global.fetch = async () => ({ ok: false, status: 500 });
    try {
      const response = await invoke(validPayload());
      assert.equal(response.status, 502);
      assert.equal(response.body.error, 'email_delivery_failed');
    } finally {
      global.fetch = originalFetch;
    }
  });
});

test('rejects invalid input and rate-limits repeated submissions', async () => {
  const invalid = await invoke(validPayload({ email: 'not-an-email' }));
  assert.equal(invalid.status, 400);

  const ip = `rate-limit-${Math.random()}`;
  let response;
  for (let attempt = 0; attempt < 6; attempt += 1) {
    response = await invoke(validPayload(), { ip });
  }
  assert.equal(response.status, 429);
  assert.equal(response.headers['Retry-After'], '900');
});
