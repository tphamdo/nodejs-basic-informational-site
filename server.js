const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8080;
const hostname = 'localhost';

const server = http.createServer((req, res) => {
  let filename;
  switch (req.url) {
    case '/':
      filename = path.join(__dirname, 'index.html');
      res.statusCode = 200;
      break;
    case '/about':
      filename = path.join(__dirname, 'about.html');
      res.statusCode = 200;
      break;
    case '/contact':
      filename = path.join(__dirname, 'contact.html');
      res.statusCode = 200;
      break;
    default:
      filename = './404.html';
      res.statusCode = 404;
      break;
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      console.error(`Reading file ${filename} gave ${err}`);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log('Server is running at: ' + hostname + ':' + port);
});
