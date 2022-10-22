// Class component
import { Component } from 'react';
import React from 'react';
import '../UI/NavBar.css';

class NavBar extends Component {
    constructor() {
        super();
    }
    render() {
        return(  // JSX, expected
            <React.Fragment>
                <div className="navbarElement">
                    <h1 className="exploreElement">Explore</h1>
                    <h1 className="preferElement">Preference</h1>
                </div>
            </React.Fragment>
        )
    }
}

export default NavBar;