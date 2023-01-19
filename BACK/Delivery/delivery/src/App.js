import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navigation from './Component/Navigation';
import Login from './Component/Login';
import Registration from './Component/Registration';

import './App.css'

function App() {
    return (
      <React.Fragment>
        <BrowserRouter>
          {/* Provide routing functionality */}
          <Navigation/>
          <Routes>
            {/* With location mutation, Routes component span through child route and render that branch provided specific URL */}
            <Route path='/login' element={ <Login/> }></Route>
            <Route path='/registration' element={ <Registration/> }></Route>
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
}

export default App;
