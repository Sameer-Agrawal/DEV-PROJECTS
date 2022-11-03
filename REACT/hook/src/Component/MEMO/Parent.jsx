import React , { useState } from "react";
import ChildA from "./ChildA";
export const context = React.createContext(null)  // Construction, global state

// Using memo, will cause React to skip rendering a component if its property have not changed
// memo() is higher order component

function Parent(){

    const [firstName,setFirstName] = useState("Sameer");
    const [lastName,setLastName] = useState("Agrawal");

    const mutationHandler = () => {  // Mutate identifier
        setFirstName(`Mutation, ${ firstName }`);
    }

    return(
        <React.Fragment>
            <button onClick={ mutationHandler } >Mutate identifier</button>
            <context.Provider value={{ firstName , lastName }}>
                <ChildA/>
            </context.Provider>
        </React.Fragment>
    )
}


export default Parent;