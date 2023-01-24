const express = require('Express');

// Mounting --> Gradually increasing
const customer = express.Router();  // Provide, object instance

const { login , registration , replace , alter , exit } = require('../Controller/Authentication.js')
const { validation , extraction , mutation , eradication , retrieval } = require('../Controller/Customer.js');

customer.route( '/authentication' ).post( login );
customer.route( '/registration' ).post( registration );
customer.route( '/exit' ).get( exit );
customer.route( '/:identifier' ).get( validation , extraction ).patch( validation , mutation ).delete( validation , eradication ); 
customer.route( '/replace' ).post( replace ); 
customer.route( '/replace/:token' ).post( alter );
customer.route( '/' ).get( validation , retrieval );

module.exports = { customer };