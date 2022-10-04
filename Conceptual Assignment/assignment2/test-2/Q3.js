// Q - Write a function f that returns product of x and y with both of the following function calls

// f(x, y)
// f(x)(y)

// Task --> Function, returning product, of provided argument's, with variety of function invocation 
function f(x, y){
    if(y == undefined){  // Function invocation, single variable is provided as an argument
        // Return a function, inturn invoked with second argument
        function internal(y){  // Internal function, maintain lexical scope, that is reference to x 
            return x*y;
        }
    }
    return x*y;
}

console.log(f(5)(4)); // Function returned, with an invocation is further invoked with 4
// Returned, function form an closure with lexical scope, and maintain reference to x
// Function invocation, which inturn return a function, maintain it's lexical scope
console.log(f(5,4));


