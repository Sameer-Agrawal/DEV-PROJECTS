console.log(variable);
console.log(demonstration);

// Memory allocates first, execution happens later.

var variable = 8122000;

function demonstration(){
    console.log("I am enough");
}

// Scope --> Global --> During memory allocation phase, variable and functions get attached to global object
// In memory allocation phase, in global object, variable and function are stored as key
// Variable's holds up special value, undefined, whereas function has there entire body as a value in front of name key