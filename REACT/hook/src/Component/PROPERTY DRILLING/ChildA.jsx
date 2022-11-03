import React from "react"
import ChildB from "./ChildB"

function ChildA( { firstName , lastName } ){
    return(
        <div>
            <h1>this, children "A" and it's children "B"</h1>
            <ChildB firstName = {firstName} lastName = {lastName}/>
        </div>
    )
}

export default ChildA;