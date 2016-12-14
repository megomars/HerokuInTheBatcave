const http = require('http');

const port = process.env.PORT;

http.createServer((req, res) =>{
  res.writeHead(200, {'Content-Type': 'text/plain' });
  res.end('This is our Heroku Test \n');
})
.listen (port, () =>{
  console.log('Webserver is running');
});
