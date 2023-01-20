// MongoDB rely on flexible schema model which inturn represent, document corresponding collection need not have same field / data-type by default

const mongoose = require('../Connection.js').mongoose;
const { Schema } = mongoose;

const schema = { denomination : { type : String , required : true } , identifier : { type : String , required : true , unique : true } , credential : { type : String , required : true , minLength : 10 } };  // Schema definition

const instance = new Schema( schema );  // Schema Instantiation
const customer = mongoose.model( 'Customer' , instance );  // Collection fabrication provided, schema definition

module.exports = { customer };