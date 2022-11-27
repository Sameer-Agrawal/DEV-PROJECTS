import React from 'react';
import '../UI/Media.css';

function Media( props ) {
    return (
        <React.Fragment>
            {/* The muted attribute is a boolean attribute. When present, it represent that the audio output of the video should be muted */}
            {/* disablePictureInPicture attribute, disable picture in picture mode*/}
            {/* The controls attribute is a boolean attribute. When present, it specify that video controls should be displayed */}

            <video src={ props.media.media } muted={ true } className="mediaElement" controls={ true }></video>
        </React.Fragment>
    )
}

export default Media;