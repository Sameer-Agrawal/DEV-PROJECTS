import React, { useState , useEffect } from 'react';
import '../UI/Media.css';

function Media( props ) {

    const callback = ( fruit ) => {
        fruit.forEach( ( children ) => {
            // A threshold of 1.0 mean, when 100% of the target is visible within the parent element specified by the root attribute, the callback is invoked

            if( children.isIntersecting ){  // Represent, media HTML element fulfilment
                children.target.play().then( async () => {
                    await props.transmute(children.target);  // Active media, maintainance
                } )
            }else{
                children.target.pause();
            }

        } )
    }

    const option = { root : document.querySelector('.mediaContainer') , threshold : 0.9 }
      
    const observer = new IntersectionObserver( callback , option );  

    useEffect( () => {  // Callback invocation provided, component mount together with, mutation media state
        const catalogue = document.querySelectorAll('.mediaElement');  // Represent video, HTML element
        catalogue.forEach( ( video ) => { observer.observe(video) } )
    } , [ props.media ] )

    return (
        <React.Fragment>
            {/* The muted attribute is a boolean attribute. When present, it represent that the audio output of the video should be muted */}
            {/* disablePictureInPicture attribute, disable picture in picture mode*/}
            {/* The controls attribute is a boolean attribute. When present, it specify that video controls should be displayed */}

            <video src={ props.media.media } muted={ true } identifier={ props.media.media_identifier } className="mediaElement"></video>
        </React.Fragment>
    )
}

export default Media;