import React , { useContext } from "react" 
import { context } from "./Parent"

function ChildC(){
    console.log("Render, Child 'C'");
    const { firstName , lastName } = useContext(context);  // Read, global state

    return(
        <div>
            <h1>this, children "C"</h1>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
        </div>
    )
}

export default React.memo(ChildC);