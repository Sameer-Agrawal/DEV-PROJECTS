// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/NavBar.css';
import { Link } from "react-router-dom";

class NavBar extends Component {
    constructor() {
        super();
    }
    render() {
        return(  // JSX, expected
            <React.Fragment>
                <div className="navbarElement">
                    {/* Link --> Redirect, to specified path, provided click event */}
                    <Link to="/" style={ { textDecoration : "none" } }><h1 className="exploreElement">Explore</h1></Link> 
                    <Link to="/preference" style={ { textDecoration : "none" } }><h1 className="preferElement">Preference</h1></Link>
                </div>
            </React.Fragment>
        )
    }
}

export default NavBar;