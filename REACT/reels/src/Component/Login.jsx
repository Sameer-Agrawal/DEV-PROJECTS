import React , { useState } from 'react'
import "../UI/Login.css"
import { Link } from "react-router-dom";

function Login() {
  const [ identifier , mutateIdentifier ] = useState(null);  // State definition
  const [ credential , mutateCredential ] = useState(null); 

  const mutationHandler = ( event ) => {  // State maintainance
    // console.log( event.currentTarget.value );  // Represent, active value
    if( event.currentTarget.getAttribute("placeholder") == "Identifier" ) {  // Represent mutation, identifier 
        // console.log("I'm here!");
        mutateIdentifier( event.currentTarget.value );
    }else{  // Represent mutation, credential
        mutateCredential( event.currentTarget.value );
    }
  }

  return (
    <React.Fragment>
        <div className="parentContainer">
            <div className="loginContainer">
                <div className="brandingContainer"> <h1 className="branding" >Instagram reel's</h1> </div>
                <div className="credentialContainer">
                    <div className="identifier"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Identifier"/> </div>
                    <div className="credential"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="password" placeholder="Credential"/> </div>
                </div>
                <div className="surrenderContainer"> <button className="surrenderElement" >LOG IN</button> </div>
            </div>
            <div className="signupContainer"> <h1 className="quotationElement">rudimentary,</h1> <Link to="/signup"><button className="transferElement">SIGN UP</button></Link> </div>
        </div>
    </React.Fragment>
  )
}

export default Login;