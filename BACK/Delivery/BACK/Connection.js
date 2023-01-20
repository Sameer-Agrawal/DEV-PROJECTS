const mongoose = require('mongoose');  // Import mongoose

// MongoDB is document database, where one collection hold's up distinct document
const connection = 'mongodb+srv://beingsam_08:Sam!0981@delivery.a3z0zmu.mongodb.net/?retryWrites=true&w=majority';  // Represent, endpoint

const promise = mongoose.connect( connection );  // Faith --> Database connection

promise.then( () => { console.log('Successful, database connection') } ).catch( ( blunder ) => { console.log(blunder) } )

module.exports = { mongoose }