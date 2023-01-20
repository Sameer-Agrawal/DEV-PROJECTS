import React from 'react';
import { Link } from "react-router-dom";
import HouseboatSharpIcon from '@mui/icons-material/HouseboatSharp';

import '../UI/Navigation.css'

function Navigation() {
    return (
        <React.Fragment>
            <div className="navigationOutmostContainer">
                <div className="navigationLeftmostContainer childrenContainer"><Link to='/'><HouseboatSharpIcon className="baseRedirectionElement"/></Link></div>
                <div className="navigationRightmostContainer childrenContainer">
                    <div className="planRedirectionElement">PLAN</div>
                    {/* A Link component allow customer to navigate to specific URL */}
                    <div className="loginRedirectionContainer"><Link className="loginRedirectionElement" to="/authentication/login">LOGIN</Link></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Navigation;
