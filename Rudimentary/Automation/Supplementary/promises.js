let returnedPromise = new CustomPromise(executor);
// Jo bhi executor hota hai uska promise return karta hai custom promise 

returnedPromise.then((value) => {
    console.log("then log", value);
})
returnedPromise.catch((value) => {
    console.log("catch log", value);
})
function executor(myResolve, myReject){
    if(2==2){
        setTimeout(() => {
            myResolve("Your promise has been resolved");
        }, 5000);
    }else{
        setTimeout(() => {
            myReject("Your promise has been rejected");
        }, 5000);
    }
}


function CustomPromise(executor) {
    let state = "pending";
    let value = null;
    let handlers = [];
    let catchers = [];

    function resolve(result) {
        if(state != "pending") return;
        state = "fulfill";
        value = result;
        handlers.forEach(handler => handler(value))
    }

    function reject(result) {
        if(state != "pending") return;
        state = "reject";
        value = result;
        catchers.forEach(catcher => catcher(value))
    }

    this.then = function(callback){
        if(state == "fulfill"){
            callback(value);
        }else{
            handlers.push(callback);
        }
    }

    this.catch = function(callback){
        if(state == "reject"){
            callback(value);
        }else{
            catchers.push(callback);
        }
    }
    executor(resolve, reject);
}

// This is exactly how promises work internally

