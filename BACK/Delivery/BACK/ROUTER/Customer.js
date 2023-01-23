const express = require('Express');

// Mounting --> Gradually increasing
const customer = express.Router();  // Provide, object instance

const { extraction , mutation , eradication , validation } = require('../Controller/Customer.js');

customer.route( '/:identifier' ).get( validation , extraction ).patch( validation , mutation ).delete( validation , eradication );  

module.exports = { customer };