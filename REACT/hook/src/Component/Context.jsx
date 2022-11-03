import React, { useContext, useState } from "react";
let context = React.createContext(null)  // Construction, global state

// Observation --> Children regeneration, provided children state constant

function Parent(){
    const [firstName,setFirstName] = useState("Sameer");
    const [lastName,setLastName] = useState("Agrawal");

    const mutationHandler = () => {  // Mutate identifier
        setFirstName(`Mutation, ${ firstName }`);
    }

    return (
        <React.Fragment>
            <h1>this, Parent!</h1>
            <button onClick={ mutationHandler } >Mutate identifier</button>
            <context.Provider value={{ firstName , lastName }}>
                <ChildA/>
            </context.Provider>
        </React.Fragment>
    )
}


function ChildA(){
    console.log("Render, Child 'A'");
    return (
        <React.Fragment>
            <h1>this, Child "A"</h1>
            <ChildB/>
        </React.Fragment>
    )
}

function ChildB(){
    console.log("Render, Child 'B'");
    return (
        <React.Fragment>
            <h1>this, Child "B"</h1>
            <ChildC/>
        </React.Fragment>
    )
}


function ChildC(){  // Nearest context.provided() method, parent component
    console.log("Render, Child 'C'");
    const { firstName , lastName } = useContext(context);  // Read, global state
    return (
        <React.Fragment>
            <h1>this, Child "C"</h1>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
        </React.Fragment>
    )
}


export default Parent;