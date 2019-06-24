const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.write('It actually works');
    res.end();
  }
  if (req.url == '/api'){
    res.write(JSON.stringify([1,2,2]))
    res.end();
  }
});

server.listen(3000);

console.log('Listening on port 3000');