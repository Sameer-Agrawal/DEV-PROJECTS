import React from 'react'
import { useState } from 'react'

function Counter() {
    
    const [ count , setCount ] = useState(0);  // State definition, functional component

    return (
        <React.Fragment>
            <h1>Present, count : { count } </h1>
            <button onClick={ () => { setCount( count + 1 ) } } >Increment count</button>
        </React.Fragment>
    )
}

export default Counter;