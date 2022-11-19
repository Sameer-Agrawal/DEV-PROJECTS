import React from 'react';
import { context } from '../App';
import { useContext } from 'react';
import '../UI/Profile.css'

function Profile() {

    const object = useContext(context);  // Read, global state 

    return (
        <React.Fragment>
            { object == null ? <h1>Need, login</h1> : 
                <div className="outmostContainer">
                    <div className="metadataContainer">
                        <div className="portraitContainer">
                            <img src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg" alt="Visual representation" />
                        </div>
                        <div className="rightMetadataContainer">
                            <div className="topRowMetadata">
                                <div className="identifierElement"> <h1>beingsam_08</h1> </div>
                                <div className="mutateMetadata"> <button>mutate</button> </div>
                            </div>
                            <div className="numericMetadata">
                                <div className="assetContainer childrenElement"> <h1>15 asset</h1> </div>
                                <div className="admirerContainer childrenElement"> <h1>465 admirer</h1> </div>
                                <div className="iconContainer childrenElement"> <h1>518 idol</h1> </div>
                            </div>
                            <div className="baseRowMetadata">
                                <div className="denominationElement childrenElement"> <h1>Sameer Agrawal</h1> </div>
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