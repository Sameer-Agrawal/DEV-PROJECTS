import React , { useContext , useEffect , useState } from 'react';
import Process from '../Process.jsx'
import { context } from '../../App.js';  // Represent, global store
import { Navigate , Outlet } from 'react-router-dom';

function Inspection() {
    const [ status , mutateStatus ] = useState(null);
    const object = useContext(context);  // Read, global store

    useEffect( () => {
        // console.log('Represent, object status --> ' , object)
        if( object != null ){ object == 'dormant' ? mutateStatus('dormant') : mutateStatus('active') }  // Status, maintainance
    } , [ object ] )  // Callback invocation, provided component mount together with object, state mutation

    return (
        <React.Fragment>
            {/* Outlet represent children component, provided active route */}
            { status == null ? <Process/> : status == 'active' ? <Outlet/> : <Navigate to='/redirection/login'/> }
        </React.Fragment>
    )
}

export default Inspection;