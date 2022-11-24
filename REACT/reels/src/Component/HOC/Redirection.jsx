import React , { useContext , useEffect , useState } from 'react'
import Process from '../Process.jsx'
import { context } from '../../App.js'  // Represent, global store
import { Navigate , Outlet } from 'react-router-dom'

function Redirection(props) {
    const [ status , mutateStatus ] = useState(null);
    const object = useContext(context);  // Read, global store

    useEffect( () => {
        // console.log('Represent, object status --> ' , object)
        if( object != null ){ object == 'dormant' ? mutateStatus('dormant') : mutateStatus('active') }  // Status, maintainance
    } , [ object ] )  // Callback invocation, provided component mount together with object, state mutation

    return (
        <React.Fragment>
            { status == null ? <Process/> : status == 'active' ? <Navigate to='/inspection/feed'/> : <Outlet/> }
        </React.Fragment>
    )
}

export default Redirection;