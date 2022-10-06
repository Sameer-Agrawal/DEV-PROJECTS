// Q find the output of the following code 

let a = ["a", "b"]
a[2] = a  // 2nd Index of an array hold's reference to array itself
// a = ["a", "b", ["a", "b"]]  

function f(a) {  // Reference to a is provided as an argument, maintained by 'a' variable
    // Identifier a, differ's from 'a' in global scope. Here, a is a local identifier
    a = a[2]  // A is assigned, with a reference to a
    console.log(a);  // a = ["a", "b", ["a", "b"]] 
    let n = Array("a", "b")  // Method, provided with, elements of an array, which inturn will be returned
    // n = ["a", "b"]
    console.log(a[2] = n);  // Here, 2nd index of an array "a", holds up a reference to array "n".  console --> ["a", "b"]
    // Implicit --> Mutation in array 'n', inturn result in mutation in array 'a'
    console.log(a);   // ["a", "b", ["a", "b"]]
    console.log(n);  // ["a", "b"]
    a = n;  // Array "a" holds up a reference to n
    console.log(a);  // ["a", "b"]
}

// Circular reference --> A circular reference occurs, if an object holds up an reference to itself

console.log(a);  // ["a", "b", ["a", "b"]]  
f(a)
console.log(a); // a, of global scope

// Options:

// 1)
// ["a", "b", ["a", "b"]]
// ["a", "b"]
// ["a", "b", ["a", "b"]]
// ["a", "b", ["a", "b"]]
// ["a", "b"]
// ["a", "b"]
// ["a", "b", ["a", "b"]]



// 2)
// [ 'a', 'b', [Circular] ]  // Holding up reference, to itself
// [ 'a', 'b', [Circular] ]
// [ 'a', 'b' ]  // Followed by mutation in an array "a", console 2nd index of an array "a"
// [ 'a', 'b', [ 'a', 'b' ] ]
// [ 'a', 'b' ]
// [ 'a', 'b' ]
// [ 'a', 'b', [ 'a', 'b' ] ]


// ANS --> Option 2