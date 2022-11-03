import React from "react"
import ChildB from "./ChildB"

function ChildA(){
    console.log("Render, Child 'A'");
    return(
        <div>
            <h1>this, children "A" and it's children "B"</h1>
            <ChildB/>
        </div>
    )
}

export default React.memo(ChildA);