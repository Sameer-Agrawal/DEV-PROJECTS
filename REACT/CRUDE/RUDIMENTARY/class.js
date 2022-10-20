
// Extends keyword represent, inheritance. Inheritance is useful for code reusability, reuse properties and methods of an existing class when you create a new class

// Class component
class Counter extends React.Component{  // React.Component, represent a function component
    constructor(){
        super();  // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
    }
    render(){  // The render() method is invoked, with a mutation in react component. Component state mutation bring about, component UI, regeneration
        return(  // Expected, syntax
            // A common pattern in React is for a component to return multiple component. Fragments let you group a list of children without adding extra nodes to the DOM
            <h1>Hey there, nice to meet you</h1>
        );
    }
}


const rootElement = document.querySelector("#root");  // Represent, div element, provided identifier root


ReactDOM.render(<Counter/>, rootElement);  // render() method represent, append children to parent, which inturn lead to component regeneration(UI)