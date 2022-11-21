import React , { useContext , useEffect , useState } from 'react';
import { context } from '../../App.js';  // Represent, global store
import { Navigate } from 'react-router-dom';

function HOC(props) {
    const object = useContext(context);  // Read, global store
    const Component = props.component;  // Represent, functional component

    return (
        <React.Fragment>
            {/* { console.log(object) } */}
            { object != null ? <Component/> : <Navigate to='/login'/> }
        </React.Fragment>
    )
}

export default HOC;