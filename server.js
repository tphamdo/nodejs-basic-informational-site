const http = require('http');
const path = require('path');
const express = require('express');

const app = express();
const port = 8080;
const hostname = 'localhost';

app.get('/', (req, res) => {
  sendFile(res, path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  sendFile(res, path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  sendFile(res, path.join(__dirname, 'contact.html'));
});

app.use((req, res, next) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, hostname, () => {
  console.log('Server is running at: ' + hostname + ':' + port);
});

function sendFile(res, filename) {
  res.status(200).sendFile(filename, (err) => {
    if (err) {
      console.error('Internal Server Error:', err);
      res.status(err.status).send(`${err.status} error`);
    } else {
      console.log(`File ${filename} sent successfully`);
    }
  });
}
