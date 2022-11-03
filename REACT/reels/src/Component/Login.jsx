import React from 'react'
import "../UI/Login.css"

function Login() {
  return (
    <React.Fragment>
        <div className="parentContainer">
            <div className="loginContainer">
                <div className="brandingContainer"> <h1 className="branding" >Instagram reel's</h1> </div>
                <div className="credentialContainer">
                    <div className="identifier"> <input className="identical" type="text" placeholder="Identifier"/> </div>
                    <div className="credential"> <input className="identical" type="password" placeholder="Credential"/> </div>
                </div>
                <div className="surrenderContainer"> <button className="surrenderElement btn btn-info" >LOG IN</button> </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Login;