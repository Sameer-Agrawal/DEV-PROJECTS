const customer = require('../Model/Customer.js').customer;
const JWT = require('jsonwebtoken');
const mystery = require('../Confidential/JWT.js').mystery;  // Confidential key
const server = require('../Server.js').server;  // Represent, server instance

const login = async ( request , response ) => {  // Faith --> Login controller
    try {
        const metadata = request.body;  // Represent, provided datum
        if( metadata.identifier ){
            const database_metadata = await customer.findOne( { identifier : metadata.identifier } );
            if( database_metadata ){
                if( database_metadata.credential == metadata.credential ){  // Represent, valid credential
                    const payload = database_metadata['_id'];  // Represent unique identifier, corresponding document
                    const token = JWT.sign( { payload : payload } , mystery );  // Data type, translation

                    if( token ){
                        response.cookie( 'Authentication' , token , { httpOnly : true } );
                        response.status( 200 );
                        response.json( { essence : 'Authentic credential' } );
                    }else{
                        response.status( 500 );  // Server blunder
                        response.json( { essence : 'Server blunder' } );
                    }

                }else{
                    response.status( 401 );  // Represent, corrupt credential
                    response.json( { essence : 'Corrupt credential' } );
                }
            }else{
                response.status( 401 );  // Represent, corrupt credential
                response.json( { essence : 'Corrupt credential' } );
            }
        }else{
            response.status( 401 );  // Represent, corrupt credential
            response.json( { essence : 'Corrupt credential' } );
        }
    } catch( blunder ) {
        response.status( 503 );  // Represent, server inaccessible  
        response.json( { essence : blunder.message } );
    }
}

const registration = async ( request , response ) => {
    try{
        const customer = require('../Model/Customer.js').customer;  // Represent, customer collection
    
        const datum = request.body;  // Represent, specified datum
        const database_response = await customer.create( datum );  // Fabrication, single/multiple document in collection
        
        response.json( { metadata : 'Document fabrication, successful' , response : database_response } );
    }catch( blunder ){
        response.status( 401 );  // Represent, invalid credential
        response.json( { metadata : blunder.message } );
    }
}

module.exports = { 'login' : login , 'registration' : registration };