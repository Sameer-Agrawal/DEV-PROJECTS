import { useNavigate , useLocation } from 'react-router-dom';
import React , { useState , useEffect } from 'react';

import Process from './Process.jsx'

import Avatar from '@mui/material/Avatar';

import Catalogue from './Catalogue.jsx'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';

import '../UI/Metadata.css';

function Metadata( props ) {

    const location = useLocation();
    const navigate = useNavigate();

    const [ admirePerception , mutateAdmirePerception ] = useState(null);
    const [ datum , mutateDatum ] = useState(null);  // Represent, active media datum

    const admirePerceptionMaintainance = async (metadata) => {
        if( props.customer != null ){
                const customer_identifier = props.customer.numerical_identifier;  // Represent, customer datum identifier

                if( metadata.like.includes(customer_identifier) ){ await mutateAdmirePerception(true) }
                else{ await mutateAdmirePerception(false) }

        }
    }

    useEffect( () => {  // Callback invocation provided, component mount together with, active media mutation
        // console.log(props.media);  // Represent array, which inturn hold up, object / media metadata
        if( props.active != null && props.media != null ){
            const identifier = props.active.getAttribute('identifier');  // Represent identifier, active media HTML element 
            props.media.map( async ( metadata ) => {  // Looping through, media metadata
                if( metadata.media_identifier == identifier ){
                    admirePerceptionMaintainance(metadata);  // Maintainance, admire perception
                    await mutateDatum(metadata);
                }
            } )
        }
    } , [ props.active , props.media ] )

    const admirePerceptionHandler = async ( event ) => {
    //     if( props.customer != null ){
    //         await mutateAdmirePerception(!admirePerception);

    //         const customer_identifier = props.customer.numerical_identifier;  // Represent, customer datum identifier
    //         const media_identifier = props.media.media_identifier;  // Represent, media datum identifier

    //         // Mutate, media database
    //         const reference = doc( database , 'media' , media_identifier );  // Represent reference, document   
    //         if( datum.like.includes(customer_identifier) ){  // The includes() method determine, whether an array include a certain value among its children, and inturn return boolean value
                
    //         }else{

    //         }
    //         await updateDoc( reference , {  } );
    //     }
    }

    const redirectionHandler = ( path ) => {
        if( location.pathname == path ) return;
        navigate(path);  // Navigate, specified path
    }

    return (
        <React.Fragment>
            { admirePerception != null && datum != null ? <div className="metadataOutmostContainer">
                                                                <div className="proprietorContainer">
                                                                    <Avatar alt="Visual representation" src={ props.customer.representation } />
                                                                    <div className="identifierElement" onClick={ () => { redirectionHandler( '/inspection/profile' ) } } >{ props.customer.alphabetic_identifier }</div>
                                                                </div>

                                                                <div className="perceptionCatalogue"><Catalogue perception={ props.media.comment }/></div>

                                                                <div className="admireContainer">
                                                                    { admirePerception ? <FavoriteIcon className="admirePortrayalElement admirePortrayalMaintainance" onClick={ ( event ) => { admirePerceptionHandler( event ) } }/> : <FavoriteBorderIcon className="admirePortrayalElement" onClick={ ( event ) => { admirePerceptionHandler( event ) } }/> }
                                                                    <div className="admireComputationElement">Admire, count</div>
                                                                </div>

                                                                <div className="stampPortrayalContainer">Stamp, portrayal</div>

                                                                <div className="perceptionPortrayalContainer">
                                                                    <input type="text" className="perceptionPortrayalElement" placeholder='Portray perception, provided media' />
                                                                    <Button variant="outlined">Comment</Button>
                                                                </div>
                                                            </div> : <Process/> }
            
        </React.Fragment>
    )
}

export default Metadata;