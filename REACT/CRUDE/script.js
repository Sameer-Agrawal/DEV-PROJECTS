// DOM manipulation

const rootElement = document.querySelector("#root");  // Represent, div element, provided identifier root

// const childElement = document.createElement("h1");  // Dynamic construction, HTML element
// childElement.innerText = "Hey there, Nice to meet you"


// rootElement.appendChild(childElement);

// How Virtual DOM actually make things faster --> 

// When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element / component in the application is a node in this tree. So, whenever there is a change in the state of any element / component, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, react algorithm find the best possible ways to make these changes to the real DOM, to optimize efficiency. Now only the updated elements / components will get rendered on the page again.


// Vanilla react

// console.log(React);  // Represent an object
// React.createElement(type,{props},children) --> Dynamic construction, HTML element
// Where,
        // type --> HTML element identifier expected
        // props --> Attributes of an object / react element
        // children --> To be, displayed on UI

// const headingElement = React.createElement("h1", { children : "Hey there, Nice to meet you" });  // An object is provided as an argument, to exclusively specify a parameter and value
// console.log(headingElement);  // Represent an object
// rootElement.appendChild(headingElement);  // Represent, append provided node element as an argument to root element
//  Not compatible, as heading element, represent an object

// The ReactDOM.render() method expect two argument, react component(children) and react component(parent). 
// render() method represent, append children to parent, which inturn lead to component regeneration(UI)

// ReactDOM.render(headingElement, rootElement);


// JSX --> Javascript XML
// JSX is faster compare to JavaScript, as it performs optimizations while translating / decrypting to regular JavaScript
// JSX convert, HTML element to react component


// Browsers don't understand JSX, so Babel or TypeScript are used to transform JSX code into regular JavaScript.


// Important JSX Rules --> 

// 1. You can only return one top-level element / single fragment from a given component. This is usually known as a parent element and is used to group the content / component. Remember, JavaScript is the backbone of React, and in JavaScript a function can only return one value.

// 2. Some elements in HTML do not have a closing tag. In React JSX, every tag, including those with no closing tags, must be closed. If you have an element that doesn’t have a closing tag, you have to add a slash at the end (e.g., <hr/>).

// 3. A React component must be capitalized. Component names that do not begin with a capital letter are treated like built-in components, and represent a string (“div”, “span”…). When the component name is capitalized, it is treated as an identifier instead of a string.

// 4. To include JavaScript expressions in JSX, you need to wrap them in curly braces. Content between the opening and closing curly braces will be evaluated as JavaScript.

// 5. The term “class” is a reserved keyword in JavaScript. In React, we must substitute className for class.

// 6. Variable, function declaration's, loops, if-else conditioning are prohibited 

// 7. JSX, is expected, inside return block


// Functional component
function HeadingElement(){  // Represent, heading component
    return(  // Expected, syntax
        // A common pattern in React is for a component to return multiple component. Fragments let you group a list of children without adding extra nodes to the DOM
        <h1>Hey there, Nice to meet you</h1>
    )
}

// <component/> --> Represent, component invocation


// Components represent, independent / pure and reusable block of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
// Components come in two types, Class components and Function components

// React component reinforce reusability, provided props
// Props are arguments passed into React component, which inturn represent component properties


function ParentComponent(){  // Represent, parent react component
    return(
        <React.Fragment>
            {/* Children, react component */}
            <HeadingElement/>
            <HeadingElement/>
            <HeadingElement/>
        </React.Fragment>
    );
}


ReactDOM.render(<ParentComponent/>, rootElement);  // render() method represent, append children to parent, which inturn lead to component regeneration(UI)




