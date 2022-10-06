// The setInterval() method, offered on the Window, repeatedly calls a function/callback, with a fixed time delay between each call. This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval()


// function recursiveCall(callbackFunction, interval) {  // Invoke a callback function, provided delay in each function invocation 
//     const intervalIdentifier = setInterval(callbackFunction, interval);  // setInterval, expect two arguments, a callback function and a delay between each function invocation
//     return intervalIdentifier;  // intervalIdentifier assist, in concluding interval callback invocation 
// }



// function concludeInvocation(intervalIdentifier, intervalTimeout){  // Faith --> conclude, interval callback invocation
//     setTimeout(function(){
//         clearInterval(intervalIdentifier);  
//     }, intervalTimeout)
// }


// function closureCreator(){
//     let invocationCount = 1;
//     function callbackFunction(){  // Closure formation with, invocationCount 
//         console.log(`Function invocation : ${invocationCount}`);
//         invocationCount = invocationCount + 1;  // Maintainance of invocation count
//     }
//     return callbackFunction;
// }


// const callbackFunction = closureCreator();  // Return, a closure 

// const intervalIdentifier = recursiveCall(callbackFunction, 1000);  // Invoke, provided callback, with a delay of 1 sec!

// concludeInvocation(intervalIdentifier, 10000);  // After, 10sec conclude, interval callback invocation


// Task --> Implement, setInterval using setTimeout

// Continuous, callback registry!
function polyfillSetInterval(callbackFunction, interval){ // Faith --> Implement, setInterval using setTimeout
    setTimeout(callbackFunction, interval); // Represent, registry of callback, provided interval
}

function closureCreator(interval, concludeTimeout){
    let invocationCount = 1;
    function callbackFunction(){  // Closure formation with, invocationCount 
        polyfillSetInterval(callbackFunction, interval);  // Represent, recursive registry of callback
        console.log(`Function invocation : ${invocationCount}`);
        invocationCount = invocationCount + 1;  // Maintainance of invocation count
    }
    return callbackFunction;
}

function concludeInterval(concludeTimeout){  // Conclude, interval callback invocation
    let concludeFlag = false;
    setTimeout(function(){  // CLosure formation, with conclude flag variable declaration
        concludeFlag = true;
    },concludeTimeout)
}


const callbackFunction = closureCreator(5000);  // Return, a closure

polyfillSetInterval(callbackFunction, 5000);  // Continuous, invocation of callback function, provided delay of 1sec
concludeInvocation(concludeTimeout);  // Faith --> Conclude, interval callback invocation

 
