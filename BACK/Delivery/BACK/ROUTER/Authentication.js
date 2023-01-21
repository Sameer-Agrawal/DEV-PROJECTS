const express = require('Express');
const customer = require('../Model/Customer.js').customer;
const server = require('../Server.js').server;  // Represent, server instance

// Mounting --> Gradually increasing
const authentication = express.Router();  // Provide, object instance

authentication.route( '/login' ).post( async ( request , response ) => {
    try {
        const metadata = request.body;  // Represent, provided datum
        if( metadata.identifier ){
            const database_metadata = await customer.findOne( { identifier : metadata.identifier } );
            if( database_metadata ){
                if( database_metadata.credential == metadata.credential ){  // Represent, valid credential
                    response.status( 200 );
                    response.json( { essence : 'Authentic credential' , metadata : database_metadata } );
                }else{
                    response.status( 401 );  // Represent, invalid credential
                    response.json( { essence : 'Corrupt credential' } );
                }
            }else{
                response.status( 401 );  // Represent, invalid credential
                response.json( { essence : 'Corrupt credential' } );
            }
        }else{
            response.status( 401 );  // Represent, invalid credential
            response.json( { essence : 'Corrupt credential' } );
        }
    } catch( blunder ) {
        response.status( 503 );  // Represent, server inaccessible  
        response.json( { essence : blunder.message } );
    }
} )

authentication.route( '/registration' ).post( async ( request , response ) => {
    try{
        const customer = require('../Model/Customer.js').customer;  // Represent, customer collection
    
        const datum = request.body;  // Represent, specified datum
        const database_response = await customer.create( datum );  // Fabrication, single/multiple document in collection
        
        response.json( { metadata : 'Document fabrication, successful' , response : database_response } );
    }catch( blunder ){
        response.status( 401 );  // Represent, invalid credential
        response.json( { metadata : blunder.message } );
    }
} )

module.exports = { authentication };
