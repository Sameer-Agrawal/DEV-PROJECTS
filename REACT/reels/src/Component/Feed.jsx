import React , { useState , useContext } from 'react';
import Process from './Process.jsx';
import { context } from '../App.js'
import Navigation from './Navigation.jsx';
import { doc , onSnapshot } from "firebase/firestore";
import { database } from '../firebase.js';
import '../UI/Feed.css'

function Feed() {

    const object = useContext(context);  // Read, global store

    const [ datum , mutateDatum ] = useState(null);  // Datum, state definition
    const [ blunder , mutateBlunder ] = useState(null); 

    useState( () => {  // Callback invocation, provided component mount together with, object state mutation
        if( object != null ){
            const reference = doc( database , 'customer' , object.uid );  // Represent reference, document 
            // We can listen to a document with the onSnapshot / Event observer, method. An initial call using the callback provided as an argument, capture a document snapshot immediately with the current / active contents of a single document, provided document identifier. Then, each time there is document content mutation, callback is invoked provided active snapshot of a document
            const eradication = onSnapshot( reference , ( snapshot ) => {
                if ( snapshot.exists() ) {
                    const object = snapshot.data();  // Datum retrieval, firestore
                    mutateDatum(object);  
                } else {
                    // doc.data() will be undefined in this case
                    mutateBlunder('blunder, provided datum retrieval');
                    setTimeout( () => { mutateBlunder(null) } , 10000 );  // Blunder, maintainance
                }
            } )

            const sterile = () => { eradication() }  // Callback invocation, provided component removal

            return sterile;
        }
    } , [ object ] )

    return (
        <React.Fragment>
            { 
                datum == null ? <Process/> :
                <div className="feedOutmostContainer">
                    <div className="navigationComponent"><Navigation customer={ datum }/></div>
                    <div className="feedContainer"></div>
                </div>
            }
        </React.Fragment>
    )
}

export default Feed;