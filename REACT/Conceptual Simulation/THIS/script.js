// Short-hand!
// this keyword value, depend on parent function, holding up 'this' keyword invocation
// Method invocation --> 'this' keyword refer, preceding object, method is invoked on
// Function invocation --> 'this' keyword refer, window object

// Even before, single line of JS code is executed, JS engine provide an access to a global object, window. 

// console.log(this);
// this --> this keyword, represent, global object, in global scope

// Before, JS program execution, a global execution context, window object, this keyword's instance is created 

// this keyword is created, provided creation for an execution context


// function statement(){  // Function statement
//     // console.log(`Function statement, ${this}`);
//     console.log(this);
// }

// statement();  // Function invocation!

// CLAIM --> Method invocation is identified when a function is preceded by object, where object is the name of some object. JavaScript will set the "this" parameter to the object instance, where the method was invoked on



// const object = {  // Represent, object
//     name : "Sameer",
//     age : 21,
//     functionStatement : function(){
//                             console.log(this);
//                             // function nestedStatement(){
//                             //     console.log(this);
//                             // }
//                             // nestedStatement();  // Function invocation
//                         }
// }


// // object.functionStatement();  // Method invocation
// const functionStatement = object.functionStatement;  // Represent, function statement
// functionStatement();  // Function invocation

// Function declaration / statement --> this keyword refer, preceding object instance, where the method was invoked on!

// object.functionStatement();

// Local execution context creation, this keyword default refer, global object 


// Expectation --> Write a function to add two number's and print their sum!

// function statement(number1, number2){  // Represent, function statement
//     console.log(number1 + number2);
// }

// const expression = (number1, number2) => {  // Represent, function expression
//     console.log(number1 + number2);
// }

// Major differentiating factor, provided function statement, expression --> Hoisting

// statement(2, 5);  // Function statement, invocation
// expression(2, 5);  // Function expression, invocation


const object = {
    name : "Sameer",
    age : 21,
    showDetailsDeclaration : function(){
        console.log(this);
        // console.log(this.name+" "+this.age);
    },
    showDetailsArrow : () => {
        console.log(this);
        // console.log(this.name+" "+this.age);
    }
}


// // object.showDetailsDeclaration();
// object.showDetailsArrow(); 

const statement = object.showDetailsDeclaration;
statement();  // Function invocation