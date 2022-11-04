import React , { useState } from 'react';
import { Link } from "react-router-dom";
// import '../UI/Login.css';

function Signup() {
    const [ email , mutateEmail ] = useState(null);  // State definition
    const [ denomination , mutateDenomination ] = useState(null);  // State definition
    const [ identifier , mutateIdentifier ] = useState(null);  // State definition
    const [ credential , mutateCredential ] = useState(null); 
  
    const mutationHandler = ( event ) => {  // State maintainance
        // console.log( event.currentTarget.value );  // Represent, active value
        if( event.currentTarget.getAttribute("placeholder") == "Email" ) {  // Represent mutation, email 
            // console.log("I'm here!");
            mutateEmail( event.currentTarget.value );
        }else if( event.currentTarget.getAttribute("placeholder") == "Denomination" ) {  // Represent mutation, denomination 
            mutateDenomination( event.currentTarget.value );
        }else if( event.currentTarget.getAttribute("placeholder") == "Identifier" ) {  // Represent mutation, identifier 
            mutateIdentifier( event.currentTarget.value );
        }else{  // Represent mutation, credential
            mutateCredential( event.currentTarget.value );
        }
    }

    return (
        <React.Fragment>
            <div className="parentContainer">
                <div className="loginContainer" style={ { height : '30rem' } }>
                    <div className="brandingContainer"> <h1 className="branding" >Instagram reel's</h1> </div>
                    <div className="credentialContainer">
                        <div className="emailIdentifier"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Email"/> </div>
                        <div className="denomination"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Denomination"/> </div>
                        <div className="identifier"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="text" placeholder="Identifier"/> </div>
                        <div className="credential"> <input className="identical" onChange = { ( event ) => { mutationHandler( event ) } } type="password" placeholder="Credential"/> </div>
                    </div>
                    <div className="surrenderContainer"> <button className="surrenderElement" >SIGN UP</button> </div>
                </div>
                <div className="signupContainer"> <h1 className="quotationElement">established, account</h1> <Link to="/login"><button className="transferElement">LOG IN</button></Link> </div>
            </div>
        </React.Fragment>
    )
}

export default Signup;