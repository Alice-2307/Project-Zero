const val = require("http");

const routes = require('./routing')

console.log(routes.text);
const server = val.createServer(routes.handler);

server.listen(4000);