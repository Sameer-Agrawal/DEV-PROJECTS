const customer = require('../Model/Customer.js').customer;

const JWT = require('jsonwebtoken');
const mystery = require('../Confidential/JWT.js').mystery;  // Confidential key

const retrieval = async ( request , response ) => {  // Faith --> Absolute database datum, retrieval
    try{
        if( request.responsibility == 'Administrator' ){
            const database_response = await customer.find();  // Faith --> Absolute database datum, retrieval
            if( database_response != null ){  // Authentic, customer identifier
                response.json( { essence : 'Successful, datum retrieval' , metadata : database_response } )
            }else{
                response.status( 502 );  // Bad gate-way
                response.json( { essence : 'Blunder, bad gate-way' } );
            }
        }else{
            response.status( 401 );  // Represent, corrupt credential
            response.json( { essence : 'Access prohibited' } );
        }
    }catch( blunder ){
        response.status( 500 );  // Server blunder
        response.json( { essence : blunder.message } )
    }
}

const extraction = async ( request , response ) => {  // Faith --> Datum extraction provided, customer unique identifier
    try{
        response.json( { metadata : request.metadata } )
    }
    catch( blunder ){
        response.status( 500 );  // Server blunder
        response.json( { essence : blunder.message } )
    }
}

const mutation = async ( request , response ) => {  // Faith --> Mutate datum
    try{
        const datum = request.body;
        for ( const key in datum ) {  // Looping through, specified datum
            request.metadata[ key ] = datum[ key ];  // Mutation
        }

        const translation = await request.metadata.save();  // 'Save', translated document

        if( translation ){
            response.json( { essence : 'Successful, mutation' , metadata : translation } )
        }else{
            response.status( 502 );  // Bad gate-way
            response.json( { essence : 'Blunder, bad gate-way' } );
        }
    }
    catch( blunder ){
        response.status( 500 );  // Server blunder
        response.json( { essence : blunder.message } )
    }
}

const eradication = async ( request , response ) => {  // Faith --> Resource eradication
    try{
        if( request.params.identifier ){
            const identifier = request.params.identifier;
            if( identifier == request.identifier ){
                const database_response = await customer.findByIdAndDelete( identifier );  // Document eradication

                if( database_response != null ){  // Authentic, customer identifier
                    response.json( { essence : 'Successful, document eradication' , metadata : database_response } )
                }else{
                    response.status( 401 );  // Represent, corrupt credential
                    response.json( { essence : 'Corrupt credential' } );
                }
            }else{
                response.status( 401 );  // Represent, corrupt credential
                response.json( { essence : 'Authenticate' } );
            }
        }else{
            response.status( 401 );  // Represent, corrupt credential
            response.json( { essence : 'Authenticate' } );
        }
    }
    catch( blunder ){
        response.status( 500 );  // Server blunder
        response.json( { essence : blunder.message } )
    }
}

const validation = async ( request , response , future ) => {  // Validation, provided cookie
    try {
        const cookie = request.cookies;  // Represent cookie, holding up JWT
    
        if( cookie.Authentication ){  // Represent existence, Authentication cookie
            const payload = JWT.verify( cookie.Authentication , mystery );  // Represent, customer identifier
            
            if( payload ){
                const database_metadata = await customer.findById( payload.payload );

                if( database_metadata ){  // Represent, authentic customer
                    request.identifier = payload.payload
                    request.metadata = database_metadata;  // Maintainance
                    request.responsibility = database_metadata.responsibility; 
                    future();
                }else{
                    response.status( 401 );  // Represent, corrupt credential
                    response.json( { essence : 'Authenticate' } );
                }
            }else{
                response.status( 500 );  // Server blunder
                response.json( { essence : 'Server blunder' } )
            }
        }else{
            response.status( 401 );  // Represent, corrupt credential
            response.json( { essence : 'Authenticate' } );
        }
    } catch ( blunder ) {
        response.status( 500 );  // Server blunder
        response.json( { essence : blunder.message } )
    }
}

module.exports = { retrieval , extraction , mutation , eradication , validation };