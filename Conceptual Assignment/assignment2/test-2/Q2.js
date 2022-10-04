// Q - Convert the following function "f" to a pure function and create an impure function g which is a higher order function which take result of f and print it like f does it here.

let obj = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  length: 5,
};

// Task --> Convert 'f', into a pure function
function f() {
  let newObject = {};
  // This loop will not mutate length key in 'obj'
  for (let i = 1 ; i < obj.length ; i++) {  // Looping through object 'obj'. 
    // Loop, iterate 4 time's
    newObject[i] = obj[i] + 1;  // Mutation, in external scope
  }
  newObject['5'] = 4;
  return newObject;
  // The special JavaScript keyword delete is used to remove object keys (also called object properties)
  // delete obj.length; // As newObject, doesn't contain length key, no need to delete it
  // for (let x in newObject) {  // x, represent key name
  //   console.log(`at index ${x} we have value ${newObject[x]}`);
  // }
  // Since, console API call, will mutate external environment, by log into console, it should be prohibited
}

// Task --> create an impure function g which is a higher order function which take result of f and print it like f does it here

function g(f){  // console, API call, will be the reason for impurity
  // Function g, is a higher order function, as it accept, function f as an callback
  const resultingObject = f(); // Faith --> function call, will inturn return an object
  for(let key in resultingObject){  // Looping through key of resulting object
    console.log(`at index ${key} we have value ${resultingObject[key]}`)
  }
}

g(f);

// If we use '.' operator, to access the value, of object key, whatever, we provide with '.' operator, JS engine, will try to find that exact key, in an object

// If we use '[]', to access the value, of an object, we can provide variable's, which inturn get converted into value, and JS engine, will try to find the value in an object

