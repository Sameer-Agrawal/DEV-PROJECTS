import React , { useState , useContext } from 'react';
import Button from '@mui/material/Button';
import AddToPhotosSharpIcon from '@mui/icons-material/AddToPhotosSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import Face2SharpIcon from '@mui/icons-material/Face2Sharp';
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import '../UI/Feed.css';
import { signOut } from 'firebase/auth';
import { authentication } from "../firebase.js";
import { useLocation , useNavigate } from 'react-router-dom';
import { ref , uploadBytesResumable , getDownloadURL } from "firebase/storage";
import { doc, updateDoc , getDoc } from "firebase/firestore";
import { repository } from '../firebase.js'
import { database } from '../firebase.js'
import { context } from '../App.js'
import ReportIcon from '@mui/icons-material/Report';
import CancelIcon from '@mui/icons-material/Cancel';

function Navigation() {

    const location = useLocation();
    const navigate = useNavigate();
    const object = useContext(context);  // Read, global store
    const [ blunder , mutateBlunder ] = useState(null);

    const uploadHandler = async ( video ) => {
        // console.log(event.target.files[0]);  // Single file upload sanctioned

        const dimension = video.size / (1024 * 1024);  // Represent, media dimension

        if(video == null){  // Blunder, maintainance
            await mutateBlunder("Provide, appropriate document")
            setTimeout( () => { mutateBlunder(null) } , 10000 )
            return;
        }else if(dimension > 100){
            // console.log("Media dimension, megabyte --> " + (video.size / (1024 * 1024)))
            await mutateBlunder("Expected media, provided dimension below 100 megabyte");
            setTimeout( () => { mutateBlunder(null) } , 10000 )
            return;
        }else{
            const identifier = object.uid;  // Represent active customer, unique identifier
            const metadata = { content : 'video/*' };              
            const reference = ref( repository , `Media/${identifier}/${video.name}`);

            // Upload data, specified location. The upload can be paused and resumed, and exposes progress updates
            const task = uploadBytesResumable( reference , video , metadata );

            const activeHandler = (snapshot) => {
                // Get active task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload --> ' + progress + '% successful');

                switch(snapshot.state) {
                  case 'paused':
                    console.log('Upload, motionless');
                    break;
                  case 'running':
                    console.log('Upload, flowing');
                    break;
                }
            }

            const blunderHandler = async (error) => {
                await mutateBlunder('blunder --> ' + error.code);
                console.log(error.message);
                setTimeout( () => { mutateBlunder(null) } , 10000 )
            }

            const victoryHandler = () => {
                    // Upload completed successfully, now we can get the download URL
                    // Return URL, provided media upload
                    getDownloadURL( task.snapshot.ref ).then( async (URL) => { 
                        console.log("Media URL --> " + URL);
                        // Mutate, customer database
                        const reference = doc( database , 'customer' , object.uid );  // Represent reference, document 
                        const snapshot = await getDoc(reference);
                        let datum;

                        if ( snapshot.exists() ) {
                            datum = snapshot.data();  // Datum retrieval, firestore
                        } else {
                            // doc.data() will be undefined in this case
                            mutateBlunder('blunder, provided datum retrieval');
                            setTimeout( () => { mutateBlunder(null) } , 10000 );  // Blunder, maintainance
                        }

                        const array = datum.media;
                        // const modified = array.push(URL)  // The push() method append new items to the end, of an array
                        await updateDoc( reference , { media : [ ...array , URL ] } );
                    });

            }              
            
            // Listen for state changes, errors, and completion of the upload
            task.on( 'state_changed' , activeHandler , blunderHandler , victoryHandler );

        }

    }

    const redirectHandler = ( path ) => {  // Callback invocation, provided click
        // console.log("Redirect, feed provided click");
        // console.log(location.pathname);  // Represent active, url

        if( location.pathname == path ) return;
        navigate(path);  // Navigate, specified path
    }

    const signoutHandler = async () => {  // Callback invocation provided click, signout element

        try {
            await signOut( authentication );
            console.log("Successful, signout")
        } catch (error) {
            await mutateBlunder('blunder --> ' + error.message);  // Blunder maintainance, provided signout element
            setTimeout( () => { mutateBlunder(null) } , 10000 )
        }

    }

    return (
        <React.Fragment>
            <div className="parentContainer">
                <div className="navigationContainer">
                    <div className="brandingContainer"> <h1>Instagram reel's</h1> </div>

                    {/* 
                        Material UI --> React component library 
                        Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app
                    */}

                    <div className="navigationElement">

                        <Button variant="text" component='label' onClick={ () => redirectHandler('/inspection/feed') } className="buttonElement"> 
                            <div className="iconContainer"><HomeSharpIcon className="iconElement"/></div>
                            <div className="labelElement">Home</div>
                        </Button>

                        <Button variant="text" component='label' className="buttonElement" onChange={ ( event ) => { uploadHandler(event.target.files[0]) } }> 
                            {/* label --> A piece of paper, that is fixed to something and which gives information about it */}
                            <div className="iconContainer"><AddToPhotosSharpIcon className="iconElement" /></div>
                            <div className="labelElement">Create</div>
                            <input hidden accept="video/*" type="file" />
                        </Button>

                        <Button variant="text" component='label' onClick={ () => redirectHandler('/inspection/profile') } className="buttonElement">
                            <div className="iconContainer"><Face2SharpIcon className="iconElement"/></div>
                            <div className="labelElement">Profile</div>
                        </Button>

                        <Button variant="text" component='label' onClick={ signoutHandler } className="buttonElement">
                            <div className="iconContainer"><LogoutSharpIcon className="iconElement"/></div>
                            <div className="labelElement">Logoff</div>
                        </Button>

                    </div>
                </div>
                {
                    blunder != null && <div className="alertContainer">
                                            <ReportIcon className="warningIconElement iconElement"/>
                                            <h1 className="blunderShowcaseElement">{ blunder }</h1>
                                            <CancelIcon className="alertEradicationElement iconElement" onClick={ () => { mutateBlunder(null) } }/>
                                        </div>   
                }
            </div>
        </React.Fragment>
    )
}

export default Navigation;