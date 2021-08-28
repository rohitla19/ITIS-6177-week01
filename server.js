const http = require('http');
const localHost = '127.0.0.1';
const port = 8080;
const server = http.createServer((req, res) => {
  res.end('Hello World');
});
server.listen(port, localHost, () => {
  console.log(`Running in ${localHost}:${port}/`);
});