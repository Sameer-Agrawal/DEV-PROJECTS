// Aim --> this keyword, arrow function

// The handling of 'this' is also different in arrow functions compared to regular functions
// In short, with arrow functions there are no binding of 

// Claim --> With arrow functions, this keyword always represents the object in which, the arrow function is defined

// With an arrow function this represents the owner of the function


// this keyword, is resolve lexically, as function declaration, can hold up varied this keyword value's

// const object = {
//     name : "Sameer",
//     age : 21,
//     showDetailsDeclaration : function(){
//         console.log(this);  // Method invocation --> parent object
//         function introduce(){
//             console.log(this);  // Function invocation --> global object
//             console.log("Hey, I'm", this.name)
//         }
//         introduce();  // Function invocation
//     },
// }

// object.showDetailsDeclaration();  // Method invocation


// Difficulty, accessing name attribute

// Arrow function

// With arrow function, this keyword represent, an object in which, the arrow function is defined

const outer = {
    method : function(){  // Function statement 
                // console.log(this);  // this keyword refer, outer object
                const object = {
                    name : "Sameer",
                    age : 21,
                    showDetailsDeclaration : () => {
                        // console.log(this);  // Parent object
                        const introduce = () => {
                            console.log(this);  // this resolve lexically --> parent object
                            console.log("Hey, I'm", this.name)
                        }
                        introduce();  // Function invocation
                    },
                }

                object.showDetailsDeclaration();
            }
}


outer.method();  // Method invocation

// Method declaration, invocation provided arrow function, this keyword refer to an object, in which arrow function is defined



