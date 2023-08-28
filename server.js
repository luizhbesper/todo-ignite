import http from 'node:http';

const server = http.createServer((req, res) => {

});

server.listen(3333, () => {
  console.log('Server is listening on port 3000');
});