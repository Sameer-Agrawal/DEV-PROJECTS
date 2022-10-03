// This keyword represent an object/instance of a class

// console.log(this); 
// In browser, this keyword represent window object
// In node, this keyword represent empty object


// Browser --> Inside regular function, this refer's window object

function thisRegularFunction(){
    console.log(this);
}

// thisRegularFunction();
// Node --> Inside regular function, this refer's global object --> node

let thisArrowFunction = () => {
    console.log(this);
}

// thisArrowFunction();
// In global scope, this keyword inside global scope, refer window object


const thisObject = { name : "this" , thisObjective : 'Shed light on this keyword inside object' , thisRegularFunction : function(){console.log(this);} , thisArrowFunction : () => {console.log(this);}}

// thisObject.thisRegularFunction();
// Within an object, this represent, parent object
// Within an single floor object, this represent, parent object
// thisObject.thisArrowFunction();

const thisMultiFloorObject = {
    firstFloor : {
        secondFloor : {
            thisRegularFunction : function(){console.log(this);},
            thisArrowFunction : () => {console.log(this);}
        }
    }
}

// console.log(thisArrowFunctionInvocation.thisArrowFunction);

// thisMultiFloorObject.firstFloor.secondFloor.thisRegularFunction();
// Multi floor object regular function --> this keyword refer, immediate parent object

// Multi floor object arrow function --> this keyword refer, window object
// thisMultiFloorObject.firstFloor.secondFloor.thisArrowFunction();


// In regular functions the this keyword represented the object that called the function
// this' in the arrow function represents from wherever it is called
// console.log(thisMultiFloorObject.firstFloor.arrowMethodInvocations)
