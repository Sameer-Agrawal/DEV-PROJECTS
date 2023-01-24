// MongoDB rely on flexible schema model which inturn represent, document corresponding collection need not have same field / data-type by default

const mongoose = require('../Connection.js').mongoose;
const { Schema } = mongoose;
const bcrypt = require('bcrypt');  // Faith --> Credential hashing
const validator = require('email-validator');  // Faith --> Validate identifier

const schema = { denomination : { type : String , required : [ true , 'Provide denomination' ] } , identifier : { type : String , required : [ true , 'Provide identifier' ] , unique : [ true , 'Identical identifier exist, provide distinct' ] , validate : function(){ return validator.validate( this.identifier ) } } , credential : { type : String , required : [ true , 'Provide credential' ] , minLength : [ 10 , 'Atleast, 10 character' ] } , verification : { type : String , required : [ true , 'Provide verification' ] , minLength : 10 , validate : function(){ return this.verification == this.credential } } , responsibility : { type : String , enum : [ 'Administrator' , 'Rudimentary' , 'Possessor' , 'Conveyor' ] , default : 'Rudimentary' } , token : String };  // Schema definition

const instance = new Schema( schema );  // Schema Instantiation

// Definition, custom middleware method corresponding schema level, using mongoose hook
instance.pre( 'save' , function(){ this.verification = undefined } )  // Eradication, verification attribute

// instance.pre( 'save' , async function(){  // Credential hashing
//     const salt = await bcrypt.genSalt();  // Salt fabrication, corresponding credential
//     const encryption = await bcrypt.hash( this.credential , salt );
//     this.credential = encryption;  // Credential mutation
// } )  

// Schema method
instance.methods.fabrication = function( token ){  // Faith --> Database datum, mutation
    this.token = token;
    return this.token;
}

instance.methods.replace = function( credential , verification ){
    this.credential = credential;
    this.verification = verification;

    this.token = undefined;  // Customer token, maintainance
}

const customer = mongoose.model( 'Customer' , instance );  // Collection fabrication provided, schema definition

module.exports = { customer };