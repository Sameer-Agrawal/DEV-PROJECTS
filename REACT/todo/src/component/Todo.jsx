import { Component } from "react";  // Represent, parent functional component
import React from "react"


class TodoElement extends Component{
    constructor(){
        super();  // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
        this.state = { chore : [ 'Chore' , 'Chore again' ] };  // Represent, component state
    }
    render(){  // The render() method is invoked, with a mutation in react component. Component state mutation bring about, component UI, regeneration
        return(  // Expected, syntax
            // A common pattern in React is for a component to return multiple component. Fragments let you group a list of children without adding extra nodes to the DOM
            <React.Fragment>
                <input type="text"/>
                <button>Append chore</button>
                {/* Map is a high order function, which inturn return's a new array, and is used for transformation of provided array. Callback provided as an argument, into a map function, represent the transformation, to be applied, to provided array elements */}
                <ul>
                    { 
                        // Return, a react component array, provided transformation represented through callback
                        this.state.chore.map((chore) => {  // Looping through chore, attribute
                            return <li>{ chore }</li>
                        })
                    }
                </ul>
            </React.Fragment>
        );
    }
}


export default TodoElement;

// A module in JavaScript is just a file, containing related code
// The export statement is used when creating JavaScript modules to export objects, functions, variables from the module so they can be used by other programs with the help of the import statements.
// Every module can have two different types of export, named export and default export. You can have multiple named exports per module but only one default export.