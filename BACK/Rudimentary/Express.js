const express = require('express');
const server = express();

server.listen( 3000 );  // Server instantiation

const fs = require('fs');  // JavaScript file-system module help store, access, and manage data on operating system
const database = { 'sameerag0812@outlook.com' : 'beingsam_08' };  // Database instantiation

server.use( express.json() );  // Abstract --> Datum translation

server.get( '/' , ( request , response ) => {
    response.sendFile( './View/home.html' , { root : __dirname } )
} )

server.post( '/' , ( request , response ) => {
    if( database[ request.body.identifier ] == request.body.credential ){  // Authentic credential
        response.send('Authentic credential')
    }else{  // Implausible credential
        response.status(401).send('Implausible credential');  // The HyperText Transfer Protocol 401 status represent client request abortive, as it lack valid authentication credential
    }
} )

server.get( '/:identifier' , ( request , response ) => {
    response.send(`<h2>Authentic credential, ${ request.params.identifier }</h2>`)
} )
