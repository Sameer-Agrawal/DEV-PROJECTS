import React , { useContext , useEffect , useState } from 'react';
import { context } from '../App.js';  // Represent, global store
import { Route , Navigate } from 'react-router-dom';

function HOC(props) {
    const object = useContext(context);  // Read, global store
    const [ datum , mutateDatum ] = useState(null);
    const Component = props.component;  // Represent, functional component
    const path = props.path;

    useEffect( () => { 
        (async function(){  // Immediately invoked, functional expression
            if(object != null)  await mutateDatum(object);  // Maintainance, datum state
        })();  
    } , [] )  // Callback invocation, provided component mount

    return (
        <React.Fragment>
           { datum != null ? <Component/> : <Navigate to={ path }/> }
        </React.Fragment>
    )
}

export default HOC;