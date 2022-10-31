import React from 'react'
import { useState , useEffect } from 'react'

function VAR3() {
    
    const [ count , setCount ] = useState(0);  // State definition, functional component
    const [ identifier , mutateIdentifier ] = useState("Sameer Agrawal");

    useEffect( () => {  // Alike, componentDidMount and componentDidUpdate( Mutation, specified state )
        document.title = `Present, count : ${ count }`; 
        console.log("USE-EFFECT BLOCK"); 
    } , [ count ] );  

    // useEffect() method is invoked, provided UI mutation's as a result of state mutation

    return (
        <React.Fragment>
            { console.log("UI mutation, provided component state mutation") }
            <h1>Hey there, { identifier }</h1>
            <button onClick={ () => { mutateIdentifier( `Sameer Atul Agrawal` ) } } >Mutate identifier</button>

            <h1>Present, count : { count } </h1>
            <button onClick={ () => { setCount( count + 1 ) } } >Increment count</button>
        </React.Fragment>
    )
}

export default VAR3;