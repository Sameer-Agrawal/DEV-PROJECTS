// The fetch() method starts the process of fetching a resource from a server
// The fetch() method returns a Promise that resolves to / return a Response object

const promise = new Promise( ( resolve , reject ) => {  // A function is expected, as an argument
    if(true) resolve();  // Represent, callback invocation, provided condition satisfaction
} )

// console.log(promise);  // Promise, represent an object

// Faith --> Suppose, promise is satisfied, invoke specified callback
promise.then( () => {  // Callback invoked, provided promise is satisfied
    // Callback represent, resolve method, which inturn is provided as an argument
    console.log("Promise satisfied");
} )


