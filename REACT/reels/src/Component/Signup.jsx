import React , { useState , useEffect , useContext } from 'react';
import { Link } from "react-router-dom";
// import '../UI/Login.css';
import { context } from "../App.js"
import { authentication , database } from "../firebase.js";
import { createUserWithEmailAndPassword , signOut } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Process from "./Process"; 

function Signup() {

    const object = useContext(context);  // Read, global state

    const [ email , mutateEmail ] = useState(null);  // State definition
    const [ denomination , mutateDenomination ] = useState(null);  // State definition
    const [ identifier , mutateIdentifier ] = useState(null);  // State definition
    const [ credential , mutateCredential ] = useState(null); 
    const [ datum , mutateDatum ] = useState(null);
    const [ blunder , mutateBlunder ] = useState(null);
    const [ flag , mutateFlag ] = useState(false);  // Flag, state definition

    useEffect( () => {
        // console.log("Before mutation --> " + datum )
        mutateDatum(object)
        // console.log("After mutation --> " + datum)
    } )  // Invocation, with component mount

    const mutationHandler = async ( event ) => {  // State maintainance
        // console.log( event.currentTarget.value );  // Represent, active value
        if( event.currentTarget.getAttribute("placeholder") == "Email" ) {  // Represent mutation, email 
            // console.log("I'm here!");
            mutateEmail( event.currentTarget.value );
        }else if( event.currentTarget.getAttribute("placeholder") == "Denomination" ) {  // Represent mutation, denomination 
            mutateDenomination( event.currentTarget.value );
        }else if( event.currentTarget.getAttribute("placeholder") == "Identifier" ) {  // Represent mutation, identifier 
            mutateIdentifier( event.currentTarget.value );
        }else{  // Represent mutation, credential
            await mutateCredential( event.currentTarget.value );
        }
    }

    const surrenderHandler = async () => {
        // When a new user signs up, using your app's sign-up form, complete any new account validation steps that your app requires, such as verifying that the new account's password was correctly typed and meets your complexity requirements.
        // Create a new account by passing the new user's email address and password to createUserWithEmailAndPassword.
        // If the new account was created, the user is signed in automatically.

        await mutateFlag( true );  // Flag maintainance

        try {
            const object = await createUserWithEmailAndPassword( authentication , email , credential );

            // Sometimes there isn't a meaningful identifier for the document, and it's more convenient to let Cloud Firestore auto-generate an document identifier for you. You can do this by invocation, add() methods:
            
            // Add a new document with an auto-generated, document identifier
            const document = await addDoc( collection( database , 'customer' ) , { email : email , denomination : denomination , identifier : identifier , visualRepresentation : '' , numericalIdentifier : object.user.uid } );

            await mutateDatum(object);  // State maintainance
        } catch (error) {
            await mutateBlunder(error);
            setTimeout( () => { mutateBlunder(null) } , 2500 )
        }
        mutateFlag( false );  // Flag maintainance
    }

    const signoutHandler = async () => {
        await mutateFlag( true );  // Flag maintainance

        try {
            await signOut( authentication );
            await mutateDatum(null);
        } catch (error) {
            await mutateBlunder(error);
            setTimeout( () => { mutateBlunder(null) } , 2500 )
        }

        mutateFlag( false );  // Flag maintainance
    }

    return (
        <React.Fragment>
            { console.log("I'm here, now") }
            { flag != false ? <Process/> : blunder != null ? <h1> blunder, { blunder.message } </h1> : datum != null ? <button onClick = { signoutHandler }>SIGN OUT, now</button> :
                <div className="parentContainer">
                    <div className="loginContainer" style={ { height : '30rem' } }>
                        <div className="brandingContainer"> <h1 className="branding" >Instagram reel's</h1> </div>
                        <div className="credentialContainer">
                            <div className="emailIdentifier"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Email"/> </div>
                            <div className="denomination"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Denomination"/> </div>
                            <div className="identifier"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Identifier"/> </div>
                            <div className="credential"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="password" placeholder="Credential"/> </div>
                        </div>
                        <div className="surrenderContainer"> <button className="surrenderElement" onClick = { surrenderHandler }>SIGN UP</button> </div>
                    </div>
                    <div className="signupContainer"> <h1 className="quotationElement">established, account</h1> <Link to="/login"><button className="transferElement">LOG IN</button></Link> </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Signup;


// sameerag0812@outlook.com , Sameer Agrawal , beingsam_08 , sameer!0981