import React, { useContext, useState } from "react";
let context = React.createContext(null)  // Construction, global state


function Parent(){
    const [firstName,setFirstName] = useState("Sameer");
    const [lastName,setLastName] = useState("Agrawal");
    return (
        <context.Provider value={{ firstName , lastName }}>
            <h1>this, Parent!</h1>
            <ChildA/>
        </context.Provider>
    )
}


function ChildA(){
    return (
        <>
        <h1>this, Child "A"</h1>
        <ChildB/>
        </>
    )
}

function ChildB(){
    return (
        <>
        <h1>this, Child "B"</h1>
        <ChildC/>
        </>
    )
}


function ChildC(){  // Nearest context.provided() method, parent component
    const { firstName , lastName } = useContext(context);  // Read, global state
    return (
        <>
        <h1>this, Child "C"</h1>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        </>
    )
}


export default Parent;