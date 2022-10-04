// Q-  List the side effect and convert the function to a pure function which does the same thing
// How the function is affecting parent environment

let arr = [1, 2, 3, 4];

function f(arr) {
    for (x in arr) {
        arr[x] = 0
    }
    return arr;
}

console.log(arr); // [1, 2, 3, 4]

console.log(f(arr));  // [0, 0, 0, 0]

console.log(arr);  // [0, 0, 0, 0]

// In javascript arguments are always pass by value, but in case of non-primitive elements, variable declaration's holds up the address of an object. So,even though it is pass by value, mutation's happen at original object location

// Solution: 

function g(array){
    let newArray = [];
    for(x in array){  // x, represent index
        newArray[x] = 0;
    }
    return newArray;
}

// For the same input, function give same output. Also, function is not mutating anything outside of function scope
