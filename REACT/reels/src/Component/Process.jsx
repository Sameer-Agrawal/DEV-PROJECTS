import React from 'react';
import process from "../UI/Animation/process.gif";
import "../UI/Process.css";

function Process() {
  return (
    <React.Fragment>
        <div className="processContainer">
            <img src={ process } className="processElement" alt="In process, visual representation" />
        </div>
    </React.Fragment>
  )
}

export default Process;