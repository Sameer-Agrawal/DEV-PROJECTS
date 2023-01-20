const express = require('Express');
const server = express();  // Server instantiation

server.use( express.json() );  // express.json() parse provided request, with JSON payload

const authentication = require('./ROUTER/Authentication.js');

server.use( '/authentication' , authentication.authentication );  // Global middleware, conditioned

server.listen( 3001 , () => { console.log( 'Server streaming at, 3001' ) } );  // Communication provided specific port

module.exports = { server }
