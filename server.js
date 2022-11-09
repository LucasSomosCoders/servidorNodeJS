const http = require('http');
const url = require('url')

const hostname = '127.0.0.1';
const port = 3000;

function connection(route, handle) {
  const server = http.createServer((req, res) => {
    
    const pathname = url.parse(req.url).pathname;
    console.log("Petición para " + pathname + " recibida.");

    route(handle, pathname);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>hola server</h1>');
    res.end('<h2>Hello, World!</h2>');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}

exports.connection = connection;