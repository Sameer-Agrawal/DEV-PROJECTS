import React from "react";
import NavBar from "./component's/NavBar";
import Banner from "./component's/Banner";
import Catalogue from "./component's/Catalogue";
import Preference from "./component's/Preference";
import './App.css'

function App() {
  return (
    <React.Fragment>
      <div className="parentElement">
        <NavBar/>
        {/* <Banner/>
        <Catalogue/> */}
        <Preference/>
      </div>
    </React.Fragment>
  );
}

export default App;
