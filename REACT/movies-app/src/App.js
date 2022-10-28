import React from "react";
import NavBar from "./component's/NavBar";
import Banner from "./component's/Banner";
import Catalogue from "./component's/Catalogue";
import Preference from "./component's/Preference";
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Children from "./Higher Order Component/Children.jsx"

function App() {
  return (
    <React.Fragment>
      <Children Dark/>
      <Children/>
    </React.Fragment>
  );
}

export default App;
