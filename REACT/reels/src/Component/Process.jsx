import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import "../UI/Process.css";

function Process() {
  return (
    <React.Fragment>
        <div className="processContainer">
            <CircularProgress className="processElement" alt="In process, visual representation"/>
        </div>
    </React.Fragment>
  )
}

export default Process;