// const fs = require("fs");

// console.log("Before");
// let f1KaPromise = fs.promises.readFile("test.txt"); // Yaha par humko abhi ke liye just ek object milgaya jiski state pending hai
// console.log(f1KaPromise)

// f1KaPromise.then(function(data){
//     console.log(data+"");
// })

// f1KaPromise.catch(function(error){
//     console.log(error);
// })

// console.log("After"); 

// Reading serially(one after another with promises)
// const fs = require("fs");

// console.log("Before");
// let f1KaPromise = fs.promises.readFile("test.txt"); // Yaha par humko abhi ke liye just ek object milgaya jiski state pending hai
// console.log(f1KaPromise)

// let test2KaPromise = f1KaPromise.then(function(data){
//     console.log(data+"");
//     let test2KaPromise = fs.promises.readFile("test2.txt");
//     return test2KaPromise;
// })

// test2KaPromise.then(function(data){
//     console.log(data+"");
// })

// f1KaPromise.catch(function(error){
//     console.log(error);
// })

// console.log("After"); 


// Upar Wali process ko bolte hai promise chaining

// Reading serially(one after another with promises)
const fs = require("fs");
const filePath = ['./test.txt','./test2.txt','./test3.txt']
// console.log("Before");
let readPromise = fs.promises.readFile(filePath[0]);

// Goal is to make the above code scalable
for(let i=1; i<filePath.length; i++){
    readPromise = readPromise.then(function(data){
        console.log(data+"");
        nextPromise = fs.promises.readFile(filePath[i]);
        return nextPromise;
    })
}

readPromise.then(function(data){
    console.log(data+"");
})