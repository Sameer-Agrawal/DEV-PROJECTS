import React from "react"

function ChildC( { firstName , lastName } ){
    return(
        <div>
            <h1>this, children "C"</h1>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
        </div>
    )
}

export default ChildC;