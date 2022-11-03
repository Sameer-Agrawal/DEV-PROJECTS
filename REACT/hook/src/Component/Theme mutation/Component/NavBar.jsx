// Class component
import { useContext } from 'react';
import React from 'react';
import '../UI/NavBar.css';
import { context } from '../../../App'

function NavBar() {

  const view = useContext(context);  // Read, global state

  return (
    <React.Fragment>
            <div className={`navbarElement ${ view }`}>
                {/* Link --> Redirect, to specified path, provided click event */}
                <h1 className="exploreElement">Explore</h1>
                <h1 className="preferElement">Preference</h1>
            </div>
    </React.Fragment>
  )
}

export default NavBar;