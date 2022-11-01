// Q- using generators write a function that in theory can run an infinite for loop

// A generator-function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return. The yield statement suspends function’s execution and sends a value back to caller / invoker, but retains enough state to enable function to resume where it is left off. When resumed, the function continues execution immediately after the last yield run


function* generator(){
    console.log("HEY 1")
    console.log("HEY 1")
    yield 
    console.log("HEY 1")
    console.log("HEY 1")
    console.log("HEY 1")
    yield
}


// const object = generator();

// console.log(object);  // Represent, generator object

// console.log(object.next());  // Represent, function execution up until yield keyword
// console.log(object.next());  // Represent, function execution up until yield keyword
// yield --> yield keyword represent an object, which inturn specify, yield value provided in addition to status, function execution




function* reachInfinity(){  // * represent, generator function

    let count = 0;

    while( true ){
        yield count;
        count = count + 1;
    }

}


const object = reachInfinity();
console.log(object.next());
console.log(object.next());
console.log(object.next());
console.log(object.next());


// GENERATOR ADVANTAGE --> No blockage in main thread of execution