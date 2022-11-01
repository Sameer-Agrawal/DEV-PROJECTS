// find output:

let a = {
}

a[ Symbol() ] = 2
a[ Symbol() ] = 3;

console.log(a[ Symbol() ]);

// options:
// A) Error
// B) 3
// C) 2
// D) undefined --> ANS

// Symbols are new primitive data-type introduced in ES6. Symbols are completely unique identifiers. Just like their primitive neighbour (Number, String, Boolean), they can be created using the factory function Symbol() which returns a Symbol 

// console.log(Symbol());  // Unique identity, provided identical description