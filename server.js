const { createServer } = require('node:http');//node.js

// const hostname = '127.0.0.1'; //localhost
const hostname = 'localhost';
const port = 3000; //choose a number between 0 and 65535 avoid 21 (FTP), Telnet (23),...

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n with An and Node.js');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
