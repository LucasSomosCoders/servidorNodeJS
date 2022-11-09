const {connection} = require('./server');
const routes = require('./route');
const requestHandlers = require("./requestHandlers");

const handle = {}
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;
// Salvando el error de la ruta extraña
handle["/favicon.ico"] = requestHandlers.subir;
console.log(handle);

connection(routes.route, handle);

