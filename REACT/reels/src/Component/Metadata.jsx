import { useNavigate , useLocation } from 'react-router-dom';
import React , { useState , useEffect } from 'react';

import Process from './Process.jsx'

import Avatar from '@mui/material/Avatar';

import Catalogue from './Catalogue.jsx'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Showcase from './Showcase.jsx'

import Button from '@mui/material/Button';

import { doc , updateDoc , getDoc } from "firebase/firestore";
import { database } from '../firebase.js';

import '../UI/Metadata.css';

function Metadata( props ) {

    const location = useLocation();
    const navigate = useNavigate();

    const [ admirePerception , mutateAdmirePerception ] = useState(null);
    const [ datum , mutateDatum ] = useState(null);  // Represent, active media datum
    const [ blunder , mutateBlunder ] = useState(null);
    const [ admireComputation , mutateAdmireComputation ] = useState(null);

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
                    admirePerceptionMaintainance(metadata);  // Maintainance, admire perception provided active media metadata
                    const computation = await admireComputationMaintainance(metadata);
                    await mutateAdmireComputation(computation);  // Admire computation, provided active media
                    await mutateDatum(metadata);  // Active media, metadata maintainance
                }
            } )
        }
    } , [ props.active , props.media ] )

    const mutationAdmirePerception = async ( event ) => {
        const customer_identifier = props.customer.numerical_identifier;  // Represent, customer datum identifier
        const media_identifier = datum.media_identifier;  // Represent, media datum identifier

        // Mutate, media database
        
        let alteration = [];  // Represent transformed, media like attribute 
        if( datum.like.includes(customer_identifier) ){  // The includes() method determine, whether an array include a certain value among its children, and inturn return boolean value
            alteration = datum.like.filter( ( identifier ) => { if( identifier != customer_identifier ) return identifier } )
        }else{
            alteration = [ ...datum.like , customer_identifier ];  // Admiration maintainance, provided media
        }
        
        const reference = doc( database , 'media' , media_identifier );  // Represent reference, media collection  
        await updateDoc( reference , { like : [ ...alteration ] } );  // Mutation, media collection
    }

    const redirectionHandler = ( path ) => {
        if( location.pathname == path ) return;
        navigate(path);  // Navigate, specified path
    }

    const admireComputationMaintainance = async ( metadata ) => {  // Faith --> Return, admiration census
        const admiration = metadata.like;

        const retrievalHandler = async ( identifier ) => {
            const reference = doc( database , "customer" , identifier );
            const snapshot = await getDoc(reference);

            if ( snapshot.exists() ){
                const datum = snapshot.data();
                return datum;
            }else{
                return `Datum retrieval, fruitless`
            }
        }

        if( admiration.length > 0 ){  // The length property sets or returns the number of elements in an array
            const identifier = admiration[0];  // Return, customer identifier
            if( identifier == props.customer.numerical_identifier && admiration.length == 1 ){ return `Admired by, 1` }
            else if( identifier != props.customer.numerical_identifier && admiration.length == 1 ){
                const customer_identifier = admiration[0];  // Return, customer identifier
                const customer_datum = retrievalHandler(customer_identifier);  // Customer datum retrieval, provided document identifier

                if( customer_datum == 'Datum retrieval, fruitless' ){
                    await mutateBlunder(customer_datum);  // Mutation, blunder
                    setTimeout( () => { mutateBlunder(null) } , 10000 );  // Blunder maintainance
                }else{
                    const alphabetic_identifier = customer_datum.alphabetic_identifier;  // Represent, customer alphabetic 
                    return `Admired by, ${ alphabetic_identifier }`
                }
            }
            else if( identifier == props.customer.numerical_identifier && admiration.length > 1 ){
                const customer_identifier = admiration[1];  // Return, customer identifier
                const customer_datum = retrievalHandler(customer_identifier);  // Customer datum retrieval, provided document identifier

                if( customer_datum == 'Datum retrieval, fruitless' ){
                    await mutateBlunder(customer_datum);  // Mutation, blunder
                    setTimeout( () => { mutateBlunder(null) } , 10000 );  // Blunder maintainance
                }else{
                    const alphabetic_identifier = customer_datum.alphabetic_identifier;  // Represent, customer alphabetic 
                    return `Admired by, ${ alphabetic_identifier } together with, ${ admiration.length - 1 }`
                }
            }
            else{
                const customer_identifier = admiration[0];  // Return, customer identifier
                const customer_datum = retrievalHandler(customer_identifier);  // Customer datum retrieval, provided document identifier

                if( customer_datum == 'Datum retrieval, fruitless' ){
                    await mutateBlunder(customer_datum);  // Mutation, blunder
                    setTimeout( () => { mutateBlunder(null) } , 10000 );  // Blunder maintainance
                }else{
                    const alphabetic_identifier = customer_datum.alphabetic_identifier;  // Represent, customer alphabetic 
                    return `Admired by, ${ alphabetic_identifier } together with, ${ admiration.length - 1 }`
                }
            }
        }else{ return 'Admire by, insignificancy' }
    }

    return (
        <React.Fragment>
            { admirePerception != null && datum != null && admireComputation != null ? <div className="metadataOutmostContainer">
                                                                                            <div className="proprietorContainer">
                                                                                                <Avatar alt="Visual representation" src={ props.customer.representation } />
                                                                                                <div className="identifierElement" onClick={ () => { redirectionHandler( '/inspection/profile' ) } } >{ props.customer.alphabetic_identifier }</div>
                                                                                            </div>

                                                                                            <div className="perceptionCatalogue"><Catalogue perception={ props.media.comment }/></div>

                                                                                            <div className="admireContainer">
                                                                                                { admirePerception ? <FavoriteIcon className="admirePortrayalElement admirePortrayalMaintainance" onClick={ ( event ) => { mutationAdmirePerception( event ) } }/> : <FavoriteBorderIcon className="admirePortrayalElement" onClick={ ( event ) => { mutationAdmirePerception( event ) } }/> }
                                                                                                <div className="admireComputationElement">{ admireComputation }</div>
                                                                                            </div>

                                                                                            <div className="stampPortrayalContainer">Stamp, portrayal</div>

                                                                                            <div className="perceptionPortrayalContainer">
                                                                                                <input type="text" className="perceptionPortrayalElement" placeholder='Portray perception, provided media' />
                                                                                                <Button variant="outlined">Comment</Button>
                                                                                            </div>

                                                                                            { blunder != null && <Showcase word={ blunder } transmute={ () => { mutateBlunder(null) } }/>}
                                                                                        </div> : <Process/> }
            
        </React.Fragment>
    )
}

export default Metadata;