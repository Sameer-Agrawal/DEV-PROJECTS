import React , { useState , useEffect } from 'react'
import "../UI/Login.css"
import { Link } from "react-router-dom";
import { getAuth , signInWithEmailAndPassword } from "firebase/auth";
import { application } from '../firebase'

function Login() {
    const [ identifier , mutateIdentifier ] = useState(null);  // State definition
    const [ credential , mutateCredential ] = useState(null); 
    const [ datum , mutateDatum ] = useState(null);
    const [ blunder , mutateBlunder ] = useState(null);
    const [ flag , mutateFlag ] = useState(false);  // Flag, state definition
    // let flag = false;

    useEffect( () => {  // Alike, componentDidMount and componentDidUpdate
        // console.log(datum);
        // console.log(blunder);  // Represent, error message 
    } );  

    // useEffect() method is invoked, provided UI mutation's as a result of state mutation

    const mutationHandler = ( event ) => {  // State maintainance
        // console.log( event.currentTarget.value );  // Represent, active value
        if( event.currentTarget.getAttribute("placeholder") == "Identifier" ) {  // Represent mutation, identifier 
            // console.log("I'm here!");
            mutateIdentifier( event.currentTarget.value );
        }else{  // Represent mutation, credential
            mutateCredential( event.currentTarget.value );
        }
    }

    const authentication = getAuth( application );
    const surrenderHandler = async () => {
        // console.log(`Before flag, true ${ flag }`);
        await mutateFlag( true );  // Flag maintainance
        // Immediate future, UI mutation
        // console.log(`After flag, true ${ flag }`);
        try {
            // console.log(application);  // Represent application, which inturn hold's up firebase instance, configuration
            // console.log(authentication);  // Represent, an object
            const object = await signInWithEmailAndPassword( authentication , identifier , credential );  
            await mutateDatum(object);
        } catch (error) {
            // console.log(`catch, ${ error }`);
            await mutateBlunder(error);
        }
        mutateFlag( false );  // Flag maintainance
    }

    return (  // Re-generation, provided state mutation
        <React.Fragment>
            { console.log("I'm here") }
            { flag != false ? <h1>In process,</h1> : blunder != null ? <h1> blunder, { blunder.message } </h1> : datum != null ? <h1>datum, { datum.user.uid } </h1> :  
                <div className="parentContainer">
                    <div className="loginContainer">
                        <div className="brandingContainer"> <h1 className="branding" >Instagram reel's</h1> </div>
                        <div className="credentialContainer">
                            <div className="identifier"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Identifier"/> </div>
                            <div className="credential"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="password" placeholder="Credential"/> </div>
                        </div>
                        <div className="surrenderContainer"> <button className="surrenderElement" onClick = { surrenderHandler }>LOG IN</button> </div>
                    </div>
                    <div className="signupContainer"> <h1 className="quotationElement">rudimentary,</h1> <Link to="/signup"><button className="transferElement">SIGN UP</button></Link> </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Login;