//Q create a polyfill of reduce

// We can consider polyfill as an algorithm, of an functionality not supported by older browser.
// Task --> Emphasize on functional programming

// Task --> Find the sum, of an elements in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8]

// function findSum(array){  // Pure function
//     let sum = 0;
//     for(let idx = 0 ; idx < array.length ; idx++){  // Looping through array
//         sum = sum + array[idx];
//     }
//     return sum;
// }
// const sum = findSum(array);  // Function invocation


// Callback function is invoked, for each element in an array
// function findSum(array){
//     const sum = array.reduce(function(accumalator, current){  // Callback function, of reduce method, expect's two parameter namely, accumalator and current
//         return accumalator = accumalator + current;  // Accumalation logic
//     },0)  // reduce method, expect initial value of an accumalator
//     return sum;
// }
// const sum = findSum(array); // function invocation
// console.log(sum);

// Polyfill reduce!

const arrayOfObject = [
    {name : "Sameer" , surname : "Agrawal" , age : 21},
    {name : "Shashwat" , surname : "Agrawal" , age : 16},
    {name : "Shweta" , surname : "Agrawal" , age : 46},
    {name : "Atul" , surname : "Agrawal" , age : 56},
]

function reduce(array, callbackFunction, accumalatorInitializer){ 
    let accumalator = accumalatorInitializer;  // Initialization of accumalator with accumalatorInitializer, provided as an argument
    for(let idx = 0; idx < array.length; idx++){  // Looping through provided array
        const arrayElement = array[idx];  // Represent, array element
        accumalator = callbackFunction(accumalator, arrayElement);  // Generally, callback provided to reduce method, expect two parameter namely, accumalator and current
    }
    return accumalator;
}

// Task --> Return, an array of first name, provided age is greater than 40

// function callbackFunction(accumalator, current){  // Callback function is invoked, for every element in an arrayOfObject
//     if(current.age > 40){  // Condition over age
//         accumalator.push(current.name);  // Append name, provided age is greater than 40 
//     }
//     return accumalator;
// }

// const arrayOfName = reduce(arrayOfObject, callbackFunction, []);  // Function invocation
// console.log(arrayOfName);

// // Callback function is invoked, for every element of an array!
// const callbackFunction = function(accumalator, current){  // Accumalation logic
//     return accumalator = accumalator + current;
// }

// const sum = reduce(array, callbackFunction, 0);  // Reduce function invocation
// console.log(sum);