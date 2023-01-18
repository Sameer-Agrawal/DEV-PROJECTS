const http = require('http');  // Import HTTP module 
const fs = require('fs');  // JavaScript file-system module help store, access, and manage data on operating system.

// Callback invocation provided request
const server = http.createServer( ( request , response ) => { 

    // Content-Type --> 'text/plain'
    // response.setHeader( 'Content-Type', 'text/plain' );
    // response.write( ` Response corresponding request, client URL --> ${ request.url }` );

    // Content-Type --> 'text/html'
    response.setHeader( 'Content-Type', 'text/html' );

    if( request.url == '/' ){  // Represent, HOME snippet request
        fs.readFile( './View/home.html' , ( blunder , datum ) => {
            if( blunder ){ console.log( 'Blunder' ) }
            else{ response.end( datum ) }
        } );  // Read document provided non-blocking call stack, asynchronous manner
    }else if( request.url == '/about' ){  // Represent ABOUT snippet request
        fs.readFile( './View/about.html' , ( blunder , datum ) => {
            if( blunder ){ console.log( 'Blunder' ) }
            else{ response.end( datum ) }
        } );
    }else{  // Client undesirable route specification
        response.statusCode = 404;  // 404 status code represent, desired route doesn't exist
        response.end('<h1>Undesirable route specification</h1>')
    }

} );  // createServer() method turn system into an HTTP server

server.listen( 3000 , 'localhost' , () => { console.log('Server streaming, port 3000') } )