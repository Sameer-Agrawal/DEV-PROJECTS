import React from "react";
import NavBar from "./component's/NavBar";
import Banner from "./component's/Banner";
import Catalogue from "./component's/Catalogue";
import Pagination from "./component's/Pagination";
import './App.css'

function App() {
  return (
    <React.Fragment>
      <div className="parentElement">
        <NavBar/>
        <Banner/>
        <Catalogue/>
        <Pagination/>
      </div>
    </React.Fragment>
  );
}

export default App;
