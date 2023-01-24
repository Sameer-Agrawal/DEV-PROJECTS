const bundle = require('../Model/Bundle.js').bundle;  // Represent, bundle collection

const retrieval = async ( request , response ) => {  // Faith --> Collection datum, retrieval
    try{
        const database_response = await bundle.find();  // Faith --> Absolute database datum, retrieval

        if( database_response ){  
            response.json( { 'essence' : 'Successful, datum retrieval' , 'metadata' : database_response } );
        }else{
            response.status( 502 );  // Bad gate-way
            response.json( { essence : 'Blunder, bad gate-way' } );
        }
    }catch( blunder ){
        response.status( 500 );  // Server blunder
        response.json( { 'essence' : 'Server blunder' } );
    }
}

const fabrication = async ( request , response ) => {  // Faith --> Bundle fabrication
    try{
        const responsibility = request.metadata.responsibility;  // Represent, customer authority

        if( responsibility == 'Administrator' || responsibility == 'Possessor' ){  // Access maintenance
            const datum = request.body;  // Represent, specified datum
            const database_response = await bundle.create( datum );  // Fabrication single document, collection

            if( database_response ){
                response.json( { metadata : 'Document fabrication, successful' , response : database_response } );
            }
        }else{
            response.status( 401 );  // Represent, corrupt credential
            response.json( { 'essence' : 'Access prohibited' } );
        }
    }catch( blunder ){
        response.status( 502 );  // Bad gate-way
        response.json( { 'essence' : blunder.message } );
    }
}

const extraction = async ( request, response ) => {  // Faith --> Datum retrieval, provided bundle identifier
    try{
        const identifier = request.params.identifier;  // Represent, bundle identifier
        const database_response = await bundle.findById( identifier );  // Datum retrieval, provided bundle identifier

        if( database_response ){  // Authenticate, bundle identifier
            response.json( { 'essence' : 'Successful datum retrieval, provided bundle identifier' , 'metadata' : database_response } )
        }
    }catch( blunder ){
        response.status( 500 ); 
        response.json( { essence : 'Blunder, bad gate-way' } );
    }
}

const mutation = async ( request , response ) => {  // Faith --> Datum mutation, provided bundle identifier
    try{
        const responsibility = request.metadata.responsibility;  // Represent, customer authority

        if( responsibility == 'Administrator' || responsibility == 'Possessor' ){  // Access maintenance
            const bundle_identifier = request.params.identifier;  // Represent bundle, unique identifier
            const database_response = await bundle.findById( bundle_identifier );  // Datum retrieval, provided bundle identifier

            if( database_response ){  // Authentic, bundle identifier
                if( database_response.customer_identifier == request.identifier || responsibility == 'Administrator' ){  // Authentic customer holding up 'access' --> Mutate, bundle metadata
                    const datum = request.body;  // Represent, datum

                    if( Object.keys( datum ).length > 0 ){  // Represent, datum specified
                        for ( const key in datum ) {  // Looping through, specified datum
                            database_response[ key ] = datum[ key ];  // Mutation
                        }
    
                        const translation = await database_response.save();  // 'Save', translated document
    
                        if( translation ){
                            response.json( { essence : 'Successful, mutation' , metadata : translation } )
                        }
                    }else{
                        response.status( 400 );  // Bad request, client blunder
                        response.json( { 'essence' : 'Bad request, client blunder' } );
                    }
                }else{  // Corrupt customer
                    response.status( 401 );  // Represent, corrupt credential
                    response.json( { 'essence' : 'Access prohibited' } );
                }
            }

        }else{
            response.status( 401 );  // Represent, corrupt credential
            response.json( { 'essence' : 'Access prohibited' } );
        }
    }catch( blunder ){
        response.status( 502 );  // Bad gate-way
        response.json( { 'essence' : blunder.message } );
    }
}

module.exports = { retrieval , fabrication , extraction , mutation }