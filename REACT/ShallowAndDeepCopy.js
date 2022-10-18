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

// let copy = object;  // Call by value --> Object value, refer, object memory location
// Object memory location, is assign to copy, that is, copy and object refer's same memory location 
// Destructuring --> Shallow copy

// let copy = {...object};  // Object behave's, pass by value
// ... -> Spread operator

// Shallow copy --> Top level object copy, nested object, refer to same memory location


// Deep copy --> Deep copy, inclusive nested object

let copy = JSON.parse(JSON.stringify(object))

copy.name = "Sameer Agrawal";
copy.address.state.stateName = "NO CHANGE!";

// Deep copy limitation's --> method, dateTime object, are not copied!

// To overcome limitation, lodash module or custom method

console.log(object);
console.log(copy);




