import React from "react";
import NavBar from "./component's/NavBar";
import Banner from "./component's/Banner";
import Catalogue from "./component's/Catalogue";
import Preference from "./component's/Preference";
import './App.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <div className="parentElement">

        <BrowserRouter>
          <NavBar/>
          {/* Routes hold's up route */}
          {/* In previous versions of React Router you had to order your routes a certain way to get the right one to render when multiple routes matched an ambiguous URL. V6 is a lot smarter and will pick the most specific match so you don't have to worry about that anymore. */}
          <Routes>
            {/* element attribute specify, component to render, provided specific path */}
            <Route path="/" element = { <React.Fragment> <Banner/> <Catalogue/> </React.Fragment> } ></Route>
            <Route path="/preference" element = { <Preference/> }></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </React.Fragment>
  );
}

export default App;
