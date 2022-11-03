import { useState } from "react"
import ChildA from "./ChildA";



function Parent(){

    const [firstName,setFirstName] = useState("Sameer");
    const [lastName,setLastName] = useState("Agrawal");

    return(
        <div>
            <ChildA firstName = {firstName} lastName = {lastName}/>
        </div>
    )
}


export default Parent;

// React developers often encounter scenario's, where they must pass data/state from a top-level component to a deeply nested component. Prop drilling refers to transporting this data/state as props to the intended destination through intermediate components