// MongoDB rely on flexible schema model which inturn represent, document corresponding collection need not have same field / data-type by default

const mongoose = require('../Connection.js').mongoose;
const { Schema } = mongoose;
const validator = require('email-validator');  // Faith --> Validate identifier

const schema = { denomination : { type : String , required : true } , identifier : { type : String , required : true , unique : true , validate : function(){ return validator.validate( this.identifier ) } } , credential : { type : String , required : true , minLength : 10 } , verification : { type : String , required : true , minLength : 10 , validate : function(){ return this.verification == this.credential } } };  // Schema definition

const instance = new Schema( schema );  // Schema Instantiation
const customer = mongoose.model( 'Customer' , instance );  // Collection fabrication provided, schema definition

// Definition, custom middleware method corresponding schema level, using mongoose hook
instance.pre( 'save' , function(){  } )  // Eradication, verification attribute

module.exports = { customer };