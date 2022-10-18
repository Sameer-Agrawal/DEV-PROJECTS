let array = [1 , 2 , 3 , 4 , 5];  // Represent, an array

// const first = array[0];
// const second = array[2];
// const third = array[4];

// console.log(first, second, third);  // Basic

// let destructuredArray = [array[0] , array[1] , array[2] , array[3]];  // Static, array creation


// console.log(destructuredArray);
// The destructuring, assignment syntax is a JavaScript expression / entity, that makes it possible to unpack, and reassign values from arrays, or properties from objects, into distinct variables

const [first , second , third , fourth , fifth ] = array;
// console.log(first, second, third, fourth, fifth);  --> Array destructuring, syntax

// Object destructuring
let object = {
    name : "Sameer" ,
    address : {
        country : "India" ,
        state : {
            stateName : "Maharashtra",
            pincode : 444303
        }
    }
}

// const { address } = object;  // Destructuring
// const { address : { state : cd } } = object;  // Destructuring, nested object, short-hand

let {address : { state : { stateName : STATENAME } } } = object;  // Removal, country property, address object
console.log(STATENAME);

// stateName : STATENAME  --> Alias, syntax
