const express = require('Express');

// Mounting --> Gradually increasing
const bundle = express.Router();  // Provide, object instance

const { retrieval , fabrication } = require('../Controller/Bundle.js'); 
const { validation } = require('../Controller/Customer.js');

bundle.route( '/' ).get( retrieval );  // Faith --> Return, collection
bundle.route( '/fabrication' ).post( validation , fabrication );  // Faith --> Bundle document, fabrication
// bundle.route( '/:identifier' ).get( extraction ).patch( mutation ).delete( eradication );

module.exports = { bundle }