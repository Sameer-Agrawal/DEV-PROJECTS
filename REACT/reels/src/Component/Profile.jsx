import React from 'react';
import Process from './Process'
import Navigation from './Navigation.jsx'
import { context } from '../App';
import { useContext , useState , useEffect } from 'react';
import { database } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import '../UI/Profile.css'

function Profile() {

    const object = useContext(context);  // Read, global state 
    // console.log(object)
    const [ datum , mutateDatum ] = useState(null);  // Definition, datum state
    const [ blunder , mutateBlunder ] = useState(null);  // Definition, blunder state

    useEffect( () => {  // Callback invocation, provided component mount together with mutation, active customer datum state
        (async function() {  // Immediately invoked, functional expression
            // console.log("Here, inside asynchronous callback")
            
            if( object ){
                const document = doc( database , 'customer' , object.uid );  // Represent particular document, provided unique identifier
                const datum = await getDoc(document);

                if( datum.exists() ) {  // datum.exists() return, false --> doc.data() return, undefined
                    // Blunder, handling
                    // console.log('Document datum, ' , datum.data());  // Represent, document object                        
                    const object = datum.data()
                    console.log(object)
                    await mutateDatum(object);  // Datum state, maintainance
                }
            }

        })();
    } , [ object ] )


    return (
        <React.Fragment>
                { datum == null ? <Process/> : 
                    <div className="profileOutmostContainer">
                        <div className="profileNavigationContainer"><Navigation/></div>
                        <div className="metadataContainer">
                            <div className="portraitContainer">
                                <img src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg" alt="Visual representation" />
                            </div>
                            <div className="rightMetadataContainer">
                                <div className="topRowMetadata">
                                    <div className="profileIdentifierElement"> <h1>{ datum.alphabetic_identifier }</h1> </div>
                                    <div className="mutateMetadata"> <button>mutate</button> </div>
                                </div>
                                <div className="numericMetadata">
                                    <div className="assetContainer childrenElement"> <h1>15 asset</h1> </div>
                                    <div className="admirerContainer childrenElement"> <h1>465 admirer</h1> </div>
                                    <div className="iconContainer childrenElement"> <h1>518 idol</h1> </div>
                                </div>
                                <div className="baseRowMetadata">
                                    <div className="denominationElement childrenElement"> <h1>{ datum.denomination }</h1> </div>
                                    <div className="biographyElement childrenElement"> <h1>I SEE EVERYTHING</h1> </div>
                                    {/* <div className="accessoryElement"></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                }
        </React.Fragment>
    );
}

export default Profile;