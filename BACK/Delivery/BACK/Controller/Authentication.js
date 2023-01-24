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
        const datum = request.body;  // Represent, specified datum
        const database_response = await customer.create( datum );  // Fabrication, single/multiple document in collection
        
        response.json( { metadata : 'Document fabrication, successful' , response : database_response } );
    }catch( blunder ){
        response.status( 401 );  // Represent, invalid credential
        response.json( { metadata : blunder.message } );
    }
}

const replace = async ( request , response ) => {  // Faith --> Replace credential
    try{
        if( request.body.identifier ){  // Represent, specified identifier

            const identifier = request.body.identifier; 
            const database_response = await customer.findOne( { 'identifier' : identifier } );  // Faith --> Return datum, corresponding customer identifier
            
            if( database_response == null ){  // Represent, corrupt identifier
                response.status( 400 );  // Bad request, client blunder
                response.json( { 'essence' : 'Bad request, registration inevitable' } );
            }else{  // Authentic identifier
                const token = JWT.sign( { payload : identifier } , mystery );  // Data type, translation
                if( token ){
                    const yield = database_response.fabrication( token );  // Faith --> Database datum, mutation
                    if( yield != undefined ){  // Represent, successful database mutation
                        const URL = `${request.protocol}://${request.get('host')}/replace/${token}`;  // Replace URL

                        response.json( { URL : URL } );
                        // nodemailer : Faith --> Dispatch mail holding up, replace URL
                    }else{
                        response.status( 500 );
                        response.json( { 'essence' : 'Server blunder' } )
                    }
                }else{
                    response.status( 500 );  // Server blunder
                    response.json( { essence : 'Server blunder' } )
                }
            }

        }else{
            response.status( 400 );  // Bad request, client blunder
            response.json( { 'essence' : 'Bad request, client blunder' } );
        }
    }catch( blunder ){
        response.status( 500 );  // Bad gate-way
        response.json( { essence : blunder.message } );
    }
}

const alter = async ( request , response ) => {  // Mutate credential, provided token
    try{
        if( request.params.token ){
            const token = request.params.token;  // Represent, unique token

            if( request.body.credential && request.body.verification ){

                const { credential , verification } = request.body;  
                const database_response = await customer.findOne( { 'token' : token } );  // Faith --> Return datum, corresponding customer unique token

                if( database_response == null ){  // Represent, corrupt token
                    response.status( 400 );  // Bad request, client blunder
                    response.json( { 'essence' : 'Bad request, client blunder' } );
                }else{  // Authentic token
                    database_response.replace( credential , verification );  // Faith --> Credential mutation corresponding token, which inturn represent customer
                    response.json( { 'essence' : 'Successful mutation, database datum' } );
                }

            }else{
                response.status( 400 );  // Bad request, client blunder
                response.json( { 'essence' : 'Bad request, client blunder' } );
            }
        }else{
            response.status( 400 );  // Bad request, client blunder
            response.json( { 'essence' : 'Bad request, client blunder' } );
        }
    }catch( blunder ){
        response.status( 500 );  // Bad gate-way
        response.json( { 'essence' : blunder.message } );
    }
}

const exit = ( request , response ) => {  // Faith --> Exit authentication
    response.cookie( 'Authentication' , ' ' , { maxAge : 1 } );
    response.json( { 'essence' : 'Successful, authentication exit' } )
}

module.exports = { 'replace' : replace , 'login' : login , 'registration' : registration , 'alter' : alter , 'exit' : exit };