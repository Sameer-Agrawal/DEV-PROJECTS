import React , { useEffect , useState } from 'react';
import Process from './Process';

import { doc , getDoc } from "firebase/firestore";
import { database } from  '../firebase.js';

import Showcase from './Showcase';

import '../UI/Perception.css';

function Perception( { datum } ) {

    const [ blunder , mutateBlunder ] = useState(null);
    const [ identifier , mutateIdentifier ] = useState(null);

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

    const customerIdentifierRetrieval = async ( identifier ) => {
        const datum = await retrievalHandler(identifier);  // Customer datum retrieval, provided customer identifier

        if( datum == 'Datum retrieval, fruitless' ){
            await mutateBlunder(datum);  // Mutation, blunder
            setTimeout( () => { mutateBlunder(null) } , 10000 );  // Blunder maintainance
        }

        return datum.alphabetic_identifier; 
    }

    useEffect( () => {
        if( datum != null ){
            ( async () => {  // Immediately invoked function expression
                const identifier = await customerIdentifierRetrieval(datum.customer_identifier);
                await mutateIdentifier(identifier);
            } )();
        }
    } , [ datum ] )

    return (
        <React.Fragment>
            { 
                datum != null && identifier != null ? 

                    <div className="customerPerceptionContainer">
                        <div className="customerIdentifierElement"><h1>{ identifier }</h1></div>
                        <div className="customerPerceptionPortrayalElement"><h1>{ datum.perception }</h1></div>

                        { blunder != null && <Showcase word={ blunder } transmute={ () => { mutateBlunder(null) } }/> }
                    </div>

                : <Process/> 
            }
        </React.Fragment>
    )
}

export default Perception;