import React from 'react';  // Component definition
import ReactDOM from 'react-dom/client';  // Translation --> Component set to HTML

const element = document.querySelector('#root');  // Represent root HTML element

const root = ReactDOM.createRoot(element); 

const App = () => {  // Component definition
  return (
    <React.Fragment>
      <h3>Hey there!</h3>
      <input placeholder="hi there" />
    </React.Fragment>
  );
}

root.render( <App/> );


