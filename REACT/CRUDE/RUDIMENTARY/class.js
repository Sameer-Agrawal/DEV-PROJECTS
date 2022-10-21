
// Extends keyword represent, inheritance. Inheritance is useful for code reusability, reuse properties and methods of an existing class when you create a new class

// Class component
class Counter extends React.Component{  // React.Component, represent a function component
    constructor(){
        super();  // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods
        this.state = {  // Represent state object, counter component
            count : 0
        }
    }

    // The state is an instance (subject to mutation's) of React class component, which inturn, can be defined as an object of a set of observable properties that influence the behavior of the component. In other words, the state of a component is an object that holds some information that may change over the lifetime of the component.

    incrementHandler = () => {  // Represent, increment handler
        // To change a value in the state object, use the this.setState() method.
        // When a value in the state object changes, the component will re-render, meaning that the UI output will change according to the new value.
        this.setState({ count : this.state.count + 1 });  // Expect, an object as an argument
    }

    decrementHandler = () => {
        this.setState({ count : this.state.count - 1 });
    }

    render(){  // The render() method is invoked, with a mutation in react component. Component state mutation bring about, component UI, regeneration
        return(  // Expected, syntax
            // A common pattern in React is for a component to return multiple component. Fragments let you group a list of children without adding extra nodes to the DOM
            <React.Fragment>
                <button onClick={this.incrementHandler}>Increment</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrementHandler}>Decrement</button>
            </React.Fragment>
        );
    }
}


const rootElement = document.querySelector("#root");  // Represent, div element, provided identifier root


ReactDOM.render(<Counter/>, rootElement);  // render() method represent, append children to parent, which inturn lead to component regeneration(UI)


// If you’re learning React or creating a new single-page app, use Create React App


// A single-page application is a web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages