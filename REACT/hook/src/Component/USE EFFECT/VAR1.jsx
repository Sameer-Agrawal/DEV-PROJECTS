import React from 'react'
import { useState , useEffect } from 'react'

function VAR1() {
    
    const [ count , setCount ] = useState(0);  // State definition, functional component

    useEffect( () => {  // Alike, componentDidMount and componentDidUpdate
        document.title = `Present, count : ${ count }`; 
        console.log("USE-EFFECT BLOCK"); 
    } );  

    // useEffect() method is invoked, provided UI mutation's as a result of state mutation

    return (
        <React.Fragment>
            { console.log("UI mutation, provided component state mutation") }
            <h1>Present, count : { count } </h1>
            <button onClick={ () => { setCount( count + 1 ) } } >Increment count</button>
        </React.Fragment>
    )
}

export default VAR1;