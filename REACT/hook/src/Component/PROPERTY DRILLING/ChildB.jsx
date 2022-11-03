import React from "react"
import ChildC from "./ChildC"

function ChildB( { firstName , lastName } ){
    return(
        <div>
            <h1>this, children "B" and it's children "C"</h1>
            <ChildC firstName  = {firstName} lastName = {lastName}/>
        </div>
    )
}


export default ChildB;