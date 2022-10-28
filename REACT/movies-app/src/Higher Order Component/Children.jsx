// Class component
import { Component } from 'react';
import React from 'react';
import HOC from "./HOC.jsx"

class Children extends Component {
    constructor() {
        super();
    }
    render() {
        return(  // JSX, expected
            <React.Fragment>
                <h1 style={ this.props.style } >Hey there!</h1>
                {/* this.props --> Represent an object, holding up props, provided as an argument, to a component */}
            </React.Fragment>
        )
    }
}

export default HOC(Children);