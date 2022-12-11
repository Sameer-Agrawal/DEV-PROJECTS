import React , { useState , useEffect , useContext } from 'react'
import "../UI/Login.css"
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword , signOut , onAuthStateChanged  } from "firebase/auth";
import Process from "./Process";
import Profile from './Profile';
import { authentication } from "../firebase.js";
import { context } from "../App.js"

function Login() {
    const [ identifier , mutateIdentifier ] = useState(null);  // State definition
    const [ credential , mutateCredential ] = useState(null); 
    const [ datum , mutateDatum ] = useState(null);
    const [ blunder , mutateBlunder ] = useState(null);
    const [ flag , mutateFlag ] = useState(false);  // Flag, state definition

    const object = useContext(context);  // Read, global state

    useEffect( () => {
        // Event observer, callback invocation with mutation, authentication state
        onAuthStateChanged( authentication , (object) => {
            mutateDatum(object)
        } ) 
    } , [] )  // Invocation, with component mount

    const mutationHandler = ( event ) => {  // State maintainance
        // console.log( event.currentTarget.value );  // Represent, active value
        if( event.currentTarget.getAttribute("placeholder") == "Identifier" ) {  // Represent mutation, identifier 
            // console.log("I'm here!");
            mutateIdentifier( event.currentTarget.value );
        }else{  // Represent mutation, credential
            mutateCredential( event.currentTarget.value );
        }
    }

    const surrenderHandler = async () => {
        // console.log(`Before flag, true ${ flag }`);
        await mutateFlag( true );  // Flag maintainance
        // Immediate future, UI mutation
        // console.log(`After flag, true ${ flag }`);
        try {
            // console.log(application);  // Represent application, which inturn hold's up firebase instance, configuration
            // console.log(authentication);  // Represent, an object
            const object = await signInWithEmailAndPassword( authentication , identifier , credential );  
        } catch (error) {
            // console.log(`catch, ${ error }`);
            await mutateBlunder(error);
            setTimeout( () => { mutateBlunder(null) } , 5000 )
        }
        mutateFlag( false );  // Flag maintainance
    }

    return (  // Re-generation, provided state mutation
        <React.Fragment>
            { flag != false ? <Process/> :  
                <div className="parentContainer">
                    {/* Blunder showcase, provided blunder */}
                    <div className="blunderShowcaseContainer"> { blunder != null ? <h1>{`${blunder}`}</h1> : <h1>`blundersome, more blundersome, most blundersome`</h1> } </div>
                    <div className="loginContainer">
                        <div className="brandingContainer"> <h1 className="branding" >Instagram reel's</h1> </div>
                        <div className="credentialContainer">
                            <div className="identifier"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Identifier"/> </div>
                            <div className="credential"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="password" placeholder="Credential"/> </div>
                        </div>
                        <div className="surrenderContainer"> <button className="surrenderElement" onClick = { surrenderHandler }>LOG IN</button> </div>
                    </div>
                    <div className="signupContainer"> <h1 className="quotationElement">rudimentary,</h1> <Link to="/redirection/signup"><button className="transferElement">SIGN UP</button></Link> </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Login;