// async function inc(x) {  // Represent, asynchronous function
//     x = x + await 1
//     console.log(x);
// }

// async function inc(x) {  // Represent, promisified function
//     x = x + await 1
//     return x;  // Represent, callback argument, then method
// }

const promise = async function demonstration(){ console.log("Promise"); return 3; };
const returned = promise();
console.log(returned);


// console.log("Before invocation");
// // Method invocation, return promise status
// // inc(5).then( ( returned ) => { console.log( returned ) } );

// console.log("After invocation");



// async function inc(x) {
//     x = x + await 1 
//     return x;  // Represent successful satisfaction, promisified function
//     // Return represent, callback invocation provided 'x' as an argument
// }

// async function increment(x){  // Behave synchronously, provided absence await keyword
//     x = x + 1;
//     return x
// }

// inc(1).then(function(x){  // Callback invoked, provided satisfaction promisified function
//     console.log(increment(x))
// })

// console.log(increment(2));