import React from "react"
import ChildC from "./ChildC"

function ChildB(){
    console.log("Render, Child 'B'");
    return(
        <div>
            <h1>this, children "B" and it's children "C"</h1>
            <ChildC/>
        </div>
    )
}


export default React.memo(ChildB);