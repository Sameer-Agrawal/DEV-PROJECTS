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
        response.status( 400 );  // Bad request, client blunder
        response.json( { 'essence' : blunder.message } );
    }
}

module.exports = { retrieval , fabrication }