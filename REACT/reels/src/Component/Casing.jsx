import React , { useState , useEffect } from 'react';
import Process from './Process.jsx';
import { onSnapshot , orderBy , query , collection } from "firebase/firestore";
import { database } from '../firebase.js';
import Media from './Media.jsx';
import Metadata from './Metadata.jsx';
import '../UI/Casing.css';

function Casing( props ) {

    const [ media , mutateMedia ] = useState(null);
    const [ active , mutateActive ] = useState(null);

    useEffect( () => {  // Callback invocation, provided component mount together with, customer state mutation
        if( props.customer != null ){

            const customer = props.customer;  // Represent, customer datum
            const authentication = props.authentication;  // Represent, active customer authentication datum

            // Cloud Firestore provides query, for specifying which documents you want to retrieve from a collection. These queries can be used with either get() or addSnapshotListener()
            // By default, a query retrieve all documents that satisfy the query in ascending order by document identifier
            const reference = query( collection( database , 'media' ) , orderBy( 'stamp' , 'desc' ) );  // Condition specification

            // We can listen to a document with the onSnapshot / Event observer, method. An initial call using the callback provided as an argument, capture a document snapshot immediately with the current / active contents of a single document, provided document identifier. Then, each time there is document content mutation, callback is invoked provided active snapshot of a document
            const eradication = onSnapshot( reference , ( snapshot ) => {
                const datum = [];
                snapshot.forEach( ( document ) => { datum.push( document.data() ) } );  // Media datum retrieval, firestore
                mutateMedia(datum);
            } )

            return eradication;  // Method invocation, provided component removal
        }
    } , [ props.customer ] )

    

    return (
        <React.Fragment>
            {
                media == null ? <Process/> : 

                <div className="casingOutmostContainer">
                    <div className="mediaContainer">
                        {
                            media.map( ( datum ) => {
                                return <Media media={ datum } transmute={ mutateActive }/>
                            } ) 
                        }
                    </div>
                    <div className="metadataContainer">
                        <Metadata media={ media } customer={ props.customer } active={ active }/>
                    </div>
                </div>
            }
        </React.Fragment>
    )
}

export default Casing;