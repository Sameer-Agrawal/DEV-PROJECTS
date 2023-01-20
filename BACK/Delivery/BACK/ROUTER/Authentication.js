const express = require('Express');
const server = require('../Server.js').server;  // Represent, server instance

// Mounting --> Gradually increasing
const authentication = express.Router();  // Provide, object instance

authentication.route( '/login' ).post( ( request , response ) => {
    console.log('Represent login!');
} )

authentication.route( '/registration' ).post( async ( request , response ) => {
    const customer = require('../Schema/Customer.js').customer;  // Represent, customer collection

    const datum = request.body;  // Represent, specified datum
    const database_response = await customer.create( datum );  // Fabrication, single/multiple document in collection
    
    response.json( { metadata : 'Document fabrication, successful' , response : database_response } );
} )

module.exports = { authentication };
