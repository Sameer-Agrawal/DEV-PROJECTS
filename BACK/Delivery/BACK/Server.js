const express = require('Express');
const server = express();  // Server instantiation

const parser = require('cookie-parser');  // Faith --> Parse cookie

server.use( express.json() );  // express.json() parse provided request, with JSON payload
server.use( parser() );  // parser() parse, provided cookie

const authentication = require('./ROUTER/Authentication.js');
const customer = require('./ROUTER/Customer.js').customer;

server.use( '/authentication' , authentication.authentication );  // Global middleware, conditioned
server.use( '/customer' , customer );  // Global middleware, conditioned

server.listen( 3001 , () => { console.log( 'Server streaming at, 3001' ) } );  // Communication provided specific port

module.exports = { server }

