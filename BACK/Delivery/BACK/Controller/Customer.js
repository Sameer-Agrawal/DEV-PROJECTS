const customer = require('../Model/Customer.js').customer;

const extraction = async ( request , response ) => {  // Faith --> Datum extraction provided, customer unique identifier
    try{
        const identifier = request.params.identifier;
        const database_response = await customer.findById( identifier );  // Return document provided, particular unique identifier

        if( database_response != null ){  // Authentic, customer identifier
            response.json( { metadata : database_response } )
        }else{
            response.status( 401 );  // Represent, corrupt credential
            response.json( { essence : 'Corrupt credential' } );
        }
    }
    catch( blunder ){
        response.status( 502 );  // Bad gate-way
        response.json( { essence : blunder.message } );
    }
}

const mutation = async ( request , response ) => {  // Faith --> Mutate datum
    try{
        const identifier = request.params.identifier;  // Represent, customer identifier
        const database_response = await customer.findById( identifier );  // Return document provided, particular unique identifier

        if( database_response != null ){  // Authentic, customer identifier
            const datum = request.body;
            for ( const key in datum ) {  // Looping through, specified datum
                database_response[ key ] = datum[ key ];  // Mutation
            }

            const translation = await database_response.save();  // 'Save', translated document

            if( translation != undefined ){
                response.json( { essence : 'Successful, mutation' , metadata : translation } )
            }else{
                response.status( 502 );  // Bad gate-way
                response.json( { essence : 'Blunder, bad gate-way' } );
            }

        }else{
            response.status( 401 );  // Represent, corrupt credential
            response.json( { essence : 'Corrupt credential' } );
        }
    }
    catch( blunder ){
        response.status( 500 );  // Server blunder
        response.json( { essence : blunder.message } )
    }
}

const eradication = ( request , response ) => {  // Faith --> Resource eradication

}

module.exports = { extraction , mutation , eradication };