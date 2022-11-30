import React , { useEffect , useState } from 'react';
import Process from './Process';

function Catalogue( { catalogue } ) {
    return (
        <React.Fragment>
            { catalogue != null ? catalogue.forEach( ( datum ) => { return <Perception datum={ datum }/> } ) : <Process/> }
        </React.Fragment>
    )
}

export default Catalogue;