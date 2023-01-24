const mongoose = require('../Connection.js').mongoose;
const { Schema } = mongoose;

const schema = { 'identifier' : { type : String , unique : [ true , 'Identical identifier exist, provide distinct' ] , required : [ true , 'Provide identifier' ] , maxLength : [ 20 , 'Atmost, 20 character' ] } , 'spell' : { type : Number , required : [ true , 'Provide spell' ] } , 'worth' : { type : Number , required : [ true , 'Provide worth' ] } , 'status' : { type : Number , required : [ true , 'Provide status' ] , min : [ 0 , 'Status amid 0 - 5' ] , max : [ 5 , 'Status amid 0 - 5'] } , 'allowance' : { type : Number , validate : [ function(){ return this.allowance < 100 } , 'Allowance, surmounting worth' ] } , 'customer_identifier' : { type : String , required : [ true , 'Provide, customer identifier' ] , unique : [ true , 'Identical customer identifier exist, provide unique' ] } }

const instance = new Schema( schema );

const bundle = mongoose.model( 'Bundle' , instance );  // Collection fabrication provided, schema definition

module.exports = { bundle };