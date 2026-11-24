const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { URL } = require('node:url');
const { handleContact } = require('./contact-handler');

const root = path.resolve(__dirname);
const port = Number(process.env.PORT) || 3000;
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8'
};

const sendFile = (response, filePath, method) => {
  const contentType = mimeTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream';
  response.writeHead(200, { 'Content-Type': contentType, 'Cache-Control': 'no-cache' });
  if (method === 'HEAD') {
    response.end();
    return;
  }
  fs.createReadStream(filePath).pipe(response);
};

const server = http.createServer((request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, `http://${request.headers.host}`).pathname);
  } catch {
    response.writeHead(400);
    response.end('Invalid URL');
    return;
  }

  if (pathname === '/api/contact') {
    handleContact(request, response);
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }

  if (pathname === '/') {
    response.writeHead(302, { Location: '/en/' });
    response.end();
    return;
  }

  if (['/en', '/ar', '/wolf/en', '/wolf/ar'].includes(pathname)) {
    response.writeHead(301, { Location: `${pathname}/` });
    response.end();
    return;
  }

  const staticPathname = pathname.startsWith('/images/') ? `/public${pathname}` : pathname;
  const requestedPath = path.resolve(root, `.${staticPathname}`);
  if (requestedPath !== root && !requestedPath.startsWith(`${root}${path.sep}`)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.stat(requestedPath, (error, stats) => {
    if (!error && stats.isFile()) {
      sendFile(response, requestedPath, request.method);
      return;
    }

    const indexPath = path.join(root, 'index.html');
    fs.stat(indexPath, (indexError, indexStats) => {
      if (indexError || !indexStats.isFile()) {
        response.writeHead(404);
        response.end('Not found');
        return;
      }
      sendFile(response, indexPath, request.method);
    });
  });
});

server.listen(port, () => {
  console.log(`Yousef Eldeeb and WOLF running at http://localhost:${port}`);
});
