const express = require('Express');

// Mounting --> Gradually increasing
const customer = express.Router();  // Provide, object instance

const { extraction , mutation , eradication } = require('../Controller/Customer.js');

customer.route( '/:identifier' ).get( extraction ).patch( mutation ).delete( eradication );  

module.exports = { customer };