import { useNavigate , useLocation } from 'react-router-dom';
import React , { useState , useEffect } from 'react';

import Process from './Process.jsx'

import Avatar from '@mui/material/Avatar';

import Perception from './Perception.jsx'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import Showcase from './Showcase.jsx'

import Button from '@mui/material/Button';

import { doc , updateDoc , getDoc , setDoc } from "firebase/firestore";
import { database } from '../firebase.js';

import '../UI/Metadata.css';

import { v4 as generator } from 'uuid';

function Metadata( props ) {

    const location = useLocation();
    const navigate = useNavigate();

    const [ blunder , mutateBlunder ] = useState(null);

    const [ perceptionCatalogue , mutatePerceptionCatalogue ] = useState(null);

    const [ admirePerception , mutateAdmirePerception ] = useState(null);
    const [ admireComputation , mutateAdmireComputation ] = useState(null);

    const [ activeCustomer , mutateActiveCustomer ] = useState(null);  // Represent, active media holder datum

    const [ perception , mutatePerception ] = useState('');

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
                    const customer_datum = await customerDatumMaintainance(metadata);  // Maintainance, customer datum, provided mutation active media
                    if( customer_datum != 'Datum retrieval, fruitless' ){ await mutateActiveCustomer(customer_datum) }
                    await perceptionCatalogueMaintainance(metadata);  // Maintainance, perception catalogue provided active media metadata

                    admirePerceptionMaintainance(metadata);  // Maintainance, admire perception provided active media metadata

                    const computation = await admireComputationMaintainance(metadata);
                    await mutateAdmireComputation(computation);  // Admire computation, provided active media

                    await mutatePerception('');  // Perception maintainance, provided active media mutation

                    await mutateDatum(metadata);  // Active media, metadata maintainance
                }
            } )
        }
    } , [ props.active , props.media ] )

    const perceptionCatalogueMaintainance = async ( metadata ) => {
        const identifier = metadata.comment;  // Return, active media perception identifier, array

        const perceptionRetrievalClosure = async ( identifier ) => {
            let accumulator = []

            for( let index = 0 ; index < identifier.length ; index++ ) {
                const current = identifier[index];
                const reference = doc( database , "perception" , current );
                const snapshot = await getDoc(reference);
    
                if ( snapshot.exists() ){
                    const datum = await snapshot.data();  // Faith --> Return perception datum
                    accumulator.push(datum);
                }
            }

            return accumulator;
        }

        const catalogue = await perceptionRetrievalClosure(identifier);
        await mutatePerceptionCatalogue(catalogue);  // Perception catalogue maintainance, provided active media datum
    }

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
                const customer_datum = await retrievalHandler(customer_identifier);  // Customer datum retrieval, provided document identifier

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
                const customer_datum = await retrievalHandler(customer_identifier);  // Customer datum retrieval, provided document identifier

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
                const customer_datum = await retrievalHandler(customer_identifier);  // Customer datum retrieval, provided document identifier

                if( customer_datum == 'Datum retrieval, fruitless' ){
                    await mutateBlunder(customer_datum);  // Mutation, blunder
                    setTimeout( () => { mutateBlunder(null) } , 10000 );  // Blunder maintainance
                }else{
                    const alphabetic_identifier = customer_datum.alphabetic_identifier;  // Represent, customer alphabetic 
                    return `Admired by, ${ alphabetic_identifier } together with, ${ admiration.length - 1 }`
                }
            }
        }else{ return 'Admired by, insignificancy' }
    }

    const retrievalHandler = async ( identifier ) => {  // Faith --> Customer datum retrieval, provided identifier
        const reference = doc( database , "customer" , identifier );
        const snapshot = await getDoc(reference);

        if ( snapshot.exists() ){
            const datum = snapshot.data();
            return datum;
        }else{
            return `Datum retrieval, fruitless`
        }
    }

    const customerDatumMaintainance = async ( metadata ) => {
        const identifier = metadata.customer_identifier;  // Represent active media holder, identifier
        const datum = await retrievalHandler(identifier);  // Customer datum retrieval, provided document identifier

        if( datum == 'Datum retrieval, fruitless' ){
            await mutateBlunder(datum);  // Mutation, blunder
            setTimeout( () => { mutateBlunder(null) } , 10000 );  // Blunder maintainance
        }

        return datum;
    }

    const perceptionMaintainanceHandler = async ( event ) => {  // Faith --> Perception maintainance
        await mutatePerception(event.target.value);
    }

    const perceptionPortrayalRetention = async () => {  // Faith --> Perception portrayal
        if( perception == '' ) return;

        const identifier = generator();  // Faith --> Return perception, document identifier

        // Add a new document, provided document identifier
        await setDoc( doc( database , 'perception' , identifier ) , { 'perception' : perception , 'customer_identifier' : props.customer.numerical_identifier } );
        await updateDoc( doc( database , 'media' , datum.media_identifier ) , { comment : [ ...datum.comment , identifier ] } );

        await mutatePerception('');  // Perception, state maintainance
    }

    return (
        <React.Fragment>
            { 
                admirePerception != null && datum != null && admireComputation != null && activeCustomer != null && perceptionCatalogue != null ? 
                    
                    <div className="metadataOutmostContainer">
                        <div className="proprietorContainer">
                            <Avatar alt="Visual representation" src={ activeCustomer.representation } />
                            <div className="identifierElement">{ activeCustomer.alphabetic_identifier }</div>
                        </div>

                        <div className="perceptionCatalogue">
                            { 
                                perceptionCatalogue.map( ( datum ) => {
                                    return <Perception datum={ datum }/>
                                } ) 
                            }
                        </div>

                        <div className="admireContainer">
                            { admirePerception ? <FavoriteIcon className="admirePortrayalElement admirePortrayalMaintainance" onClick={ ( event ) => { mutationAdmirePerception( event ) } }/> : <FavoriteBorderIcon className="admirePortrayalElement" onClick={ ( event ) => { mutationAdmirePerception( event ) } }/> }
                            <div className="admireComputationElement">{ admireComputation }</div>
                        </div>

                        <div className="stampPortrayalContainer">{ datum.stamp.toDate().toDateString() }</div>

                        <div className="perceptionPortrayalContainer">
                            <input type="text" value={ perception } onChange={ ( event ) => { perceptionMaintainanceHandler(event) } } className="perceptionPortrayalElement" placeholder='Portray perception, provided media' />
                            <Button variant="outlined" onClick={ perceptionPortrayalRetention }>Comment</Button>
                        </div>

                        { blunder != null && <Showcase word={ blunder } transmute={ () => { mutateBlunder(null) } }/>}
                    </div> 

                : <Process/> 
            }
        </React.Fragment>
    )
}

export default Metadata;