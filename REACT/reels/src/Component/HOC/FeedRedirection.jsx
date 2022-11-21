import React , { useContext , useEffect , useState } from 'react'
import { context } from '../../App.js'  // Represent, global store
import { Navigate } from 'react-router-dom'

function FeedRedirection(props) {
    const object = useContext(context);  // Read, global store
    const Component = props.component;

    return (
        <React.Fragment>
            { object != null ? <Navigate to='/feed'/> : <Component/> }
        </React.Fragment>
    )
}

export default FeedRedirection;