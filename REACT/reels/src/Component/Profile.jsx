import React from 'react'

function Profile() {
    return (
        <React.Fragment>
            <div className="parentContainer">
                <div className="metadataContainer">
                    <div className="portraitContainer">
                        <img src="" alt="Visual representation" />
                    </div>
                    <div className="rightMetaDataContainer">
                        <div className="topRowMetaData">
                            <div className="identifierElement"> <h1>beingsam_08</h1> </div>
                            <div className="mutateMetaData"> <button>Mutate meta-data</button> </div>
                        </div>
                        <div className="numericMetaData">
                            <div className="assetContainer"> <h1>15 asset</h1> </div>
                            <div className="admirerContainer"> <h1>465 admirer</h1> </div>
                            <div className="iconContainer"> <h1>518 idol</h1> </div>
                        </div>
                        <div className="baseRowMetaData">
                            <div className="denominationElement"> <h1>Sameer Agrawal</h1> </div>
                            <div className="biographyElement"> <h1>I SEE EVERYTHING</h1> </div>
                            <div className="accessoryElement"></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Profile;