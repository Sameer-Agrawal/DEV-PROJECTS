import React from 'react'
import Button from '@mui/material/Button';
import AddToPhotosSharpIcon from '@mui/icons-material/AddToPhotosSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Face2SharpIcon from '@mui/icons-material/Face2Sharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import '../UI/Feed.css'
import { signOut } from 'firebase/auth';
import { authentication } from "../firebase.js"

function Navigation() {

    const uploadHandler = ( event ) => {
        console.log(event.target.files[0]);  // Single file upload sanctioned
    }

    const redirectHandler = ( path ) => {  // Callback invocation, provided click
        console.log("Redirect, feed provided click");
    }

    const signoutHandler = async () => {  // Callback invocation provided click, signout element

        try {
            await signOut( authentication );
        } catch (error) {
            console.log(error.message);  // UI --> Alert
            // await mutateBlunder(error);
            // setTimeout( () => { mutateBlunder(null) } , 2500 )
        }

    }

    return (
        <React.Fragment>
            <div className="feedContainer">
                <div className="navigationContainer">
                    <div className="brandingContainer"> <h1>Instagram reel's</h1> </div>

                    {/* 
                        Material UI --> React component library 
                        Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app
                    */}

                    <div className="navigationElement">

                        <Button variant="text" component='label' onClick={ redirectHandler } className="buttonElement"> 
                            <div className="iconContainer"><HomeSharpIcon className="iconElement"/></div>
                            <div className="labelElement">Home</div>
                        </Button>

                        <Button variant="text" component='label' className="buttonElement" onChange={ ( event ) => { uploadHandler(event) } }> 
                            {/* label --> A piece of paper, that is fixed to something and which gives information about it */}
                            <div className="iconContainer"><AddToPhotosSharpIcon className="iconElement" /></div>
                            <div className="labelElement">Create</div>
                            <input hidden accept="video/*" type="file" />
                        </Button>

                        <Button variant="text" component='label' onClick={ redirectHandler } className="buttonElement">
                            <div className="iconContainer"><Face2SharpIcon className="iconElement"/></div>
                            <div className="labelElement">Profile</div>
                        </Button>

                        <Button variant="text" component='label' onClick={ signoutHandler } className="buttonElement">
                            <div className="iconContainer"><LogoutSharpIcon className="iconElement"/></div>
                            <div className="labelElement">Logoff</div>
                        </Button>

                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Navigation;