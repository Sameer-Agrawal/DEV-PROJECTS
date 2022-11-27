import React , { useState , useEffect } from 'react';
import ReportIcon from '@mui/icons-material/Report';
import CancelIcon from '@mui/icons-material/Cancel';
import '../UI/Showcase.css'

function Showcase( props ) {
    return (
        <React.Fragment>
            {
                props.word != null && <div className="alertContainer">
                                            <ReportIcon className="warningIconElement iconElement"/>
                                            <h1 className="blunderShowcaseElement">{ props.word }</h1>
                                            <CancelIcon className="alertEradicationElement iconElement" onClick={ props.transmute }/>
                                        </div>   
            }
        </React.Fragment>
    )
}

export default Showcase;