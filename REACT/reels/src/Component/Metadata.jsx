import React from 'react';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import '../UI/Metadata.css';

function Metadata( props ) {
    return (
        <React.Fragment>
            <div className="metadataOutmostContainer">
                <div className="proprietorContainer">
                    <Avatar alt="Visual representation" src="https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg" />
                    <div className="identifierElement">{ props.customer.alphabetic_identifier }</div>
                </div>
                <div className="perceptionCatalogue">Outmost structure, comment container</div>
                <div className="admireContainer">
                    <FavoriteBorderIcon className="admirePortrayalElement"/>
                    <div className="admireComputationElement">Admire, count</div>
                </div>
                <div className="stampPortrayalContainer">Stamp, portrayal</div>
                <div className="perceptionPortrayalContainer">
                    <input type="text" className="perceptionPortrayalElement" placeholder='Portray perception, provided media' />
                    <Button variant="outlined">Comment</Button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Metadata;