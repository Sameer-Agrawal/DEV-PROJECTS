import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Represent, functional component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App/> );

// ReactDOM.createRoot() --> Construction, react root provided HTML element as an argument. 
// root.render() --> Render, provided react element (children).
