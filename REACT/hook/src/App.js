// import Counter from "./Component/Counter";
// import Immutable from "./Component/Immutable";
// import VAR1 from "./Component/USE EFFECT/VAR1";
// import VAR2 from "./Component/USE EFFECT/VAR2";
// import VAR3 from "./Component/USE EFFECT/VAR3";
// import Parent from "./Component/PROPERTY DRILLING/Parent";
// import Context from "./Component/Context";

import { useState } from "react";
import NavBar from "./Component/Theme mutation/Component/NavBar";
import React from "react"
import "./App.css"

export const context = React.createContext("white");  // Context definition

function App() {

  const [ view , mutateView ] = useState("white");  // State, definition

  const mutationHandler = () => {  // View mutation, handler
    if( view == "white" ) mutateView("black");  // View maintainance
    else mutateView("white");
  };  

  return (
    <div className="App">
      {/* Represent, component invocation */}
      {/* <Counter/> */}
      {/* <Immutable/> */}
      {/* <VAR1/> */}
      {/* <VAR2/> */}
      {/* <VAR3/> */}
      {/* <Parent/> */}
      {/* <Context/> */}

      <context.Provider value = { view }>  
        {/* State mutation, bring about mutation, global state */}
        { console.log(view) }
        <NavBar/>
      </context.Provider>

      <button className="mutateElement" onClick = { mutationHandler } >Mutate theme!</button>

    </div>
  );
}

export default App;
