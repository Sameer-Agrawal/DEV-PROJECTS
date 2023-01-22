const express = require('Express');

// Mounting --> Gradually increasing
const authentication = express.Router();  // Provide, object instance

const { login , registration } = require('../Controller/Authentication.js')

authentication.route( '/login' ).post( login )

authentication.route( '/registration' ).post( registration )

module.exports = { authentication };
