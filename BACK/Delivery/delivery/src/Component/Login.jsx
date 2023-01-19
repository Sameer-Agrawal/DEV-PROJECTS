import React , { useState } from 'react';

import '../UI/Login.css'

function Login() {

    const [ identifier , mutateIdentifier ] = useState('');  // State definition
    const [ credential , mutateCredential ] = useState('');

    const stateMaintainance = ( event ) => {  // Faith --> State maintainance
        const metadataIdentifierElement = event.target.getAttribute('type');  // Return value corresponding, specific element attribute
        
        if( metadataIdentifierElement == 'email' ){ mutateIdentifier( event.target.value ) }
        else{ mutateCredential( event.target.value ) }
    }

    return (
        <React.Fragment>
            <div className="loginOutmostContainer">
                <div className="loginChildrenContainer">
                    <div className="headlineContainer"><div className="headlineElement">LOGIN</div></div>
                    <div className="metadataContainer" onChange = { ( event ) => { stateMaintainance( event ) } }>
                        <div className="identifierContainer metadataChildrenContainer"><h1 className='metadataIdentifierElement'>Identifier</h1><input type="email" className="identifierElement metadataElement" placeholder="Provide identifer"/></div>
                        <div className="credentialContainer metadataChildrenContainer"><h1 className='metadataIdentifierElement'>Credential</h1><input type="password" className="credentialElement metadataElement" placeholder="Provide credential"/></div>
                    </div>
                    <div className="surrenderContainer"><button className='surrenderElement'>Surrender</button></div>
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