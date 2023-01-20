import React , { useState } from 'react';
import axios from 'axios';

import '../UI/Login.css'

function Login() {

    const surrenderMetadata = ( event ) => {  // Faith --> Surrender metadata, directed toward server
        const identifierElement = document.querySelector('.identifierElement');  // Represent, identifier element
        const credentialElement = document.querySelector('.credentialElement');  // Represent, credential element

        const response = axios.post( '/authentication/login' , { identifier : identifierElement.value , credential : credentialElement.value } );  // Communication with server
    }

    return (
        <React.Fragment>
            <div className="loginOutmostContainer">
                <div className="loginChildrenContainer">
                    <div className="headlineContainer"><div className="headlineElement">LOGIN</div></div>
                    <div className="metadataContainer">
                        <div className="identifierContainer metadataChildrenContainer"><h1 className='metadataIdentifierElement'>Identifier</h1><input type="email" className="identifierElement metadataElement" placeholder="Provide identifer"/></div>
                        <div className="credentialContainer metadataChildrenContainer"><h1 className='metadataIdentifierElement'>Credential</h1><input type="password" className="credentialElement metadataElement" placeholder="Provide credential"/></div>
                    </div>
                    <div className="surrenderContainer" onClick = { ( event ) => { surrenderMetadata( event ) } }><button className='surrenderElement'>Surrender</button></div>
                    <div className="redirectionContainer">
                        <div className="redirectionChildrenContainer registrationContainer"><button className='registrationElement redirectionElement'>Registration</button></div>
                        <div className="redirectionChildrenContainer replaceContainer"><button className='replaceElement redirectionElement'>Replace credential</button></div>
                    </div>

                    {/* 
                        The onmouseenter event invoke a callback provided, mouse pointer enter an element.
                        The onmouseenter event often used together with, onmouseleave event, which inturn invoke a callback occurs provided mouse pointer exit an element.
                        The onmouseenter event is identical to onmouseover event. Major difference is onmouseenter event doesn't propagate up the document hierarchy. 
                    */}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login;