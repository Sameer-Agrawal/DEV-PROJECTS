const express = require('Express');
const fileSystem = require("fs");

// Mounting --> Gradually increasing
const core = express.Router();  // Provide, object instance

core.route( '/' ).get( ( request , response ) => {
    response.sendFile( 'C:\Users\CONFI\Desktop\Final\BACK\Delivery\delivery\public\index.html' )
} )

module.exports = { core };



