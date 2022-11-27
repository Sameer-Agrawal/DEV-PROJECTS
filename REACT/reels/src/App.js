import Login from './Component/Login'
import Signup from './Component/Signup'
import Process from './Component/Process'
import Profile from './Component/Profile'
import Feed from './Component/Feed'
import Inspection from './Component/HOC/Inspection'
import Redirection from './Component/HOC/Redirection'
import Showcase from './Component/Showcase.jsx'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import "./App.css";
import React , { useEffect , useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from "./firebase"
// import { customer } from './context.js'
export const context = React.createContext();  // Context definition


function App() {

  const [ datum , mutateDatum ] = useState(null);  // State definition, functional component

  useEffect( () => { 
    onAuthStateChanged( authentication , (object) => { 
      // console.log(`Represent authentication, state --> ${object}`);
      if( object == null )  mutateDatum('dormant')
      else  mutateDatum(object) 
    } ) 
  } , [] )  // Invocation, with mutation, authentication state

  return (
    <div className="App">
      <BrowserRouter>
        {/* In previous versions of React Router, you had to order your route a certain way to get the right one to render when multiple routes matched an ambiguous URL. V6 is a lot smarter and will pick the most specific, path match so you don't have to worry about that anymore. */}
        <context.Provider value = { datum }>
          <Routes>
            {/* "Routes" hold's up "Route" */}

              <Route path='/inspection' element={ <Inspection/> }>
                {/* Absolute route path "/profile" nested under path "/inspection" is not valid. An absolute child route path must start with the combined path of all its parent routes */}
                <Route path='/inspection/profile' element={ <Profile/> }></Route>
                <Route path='/inspection/feed' element={ <Feed/> }></Route>
              </Route>

              <Route path='/redirection' element={ <Redirection/> }>
                {/* Absolute route path "/profile" nested under path "/inspection" is not valid. An absolute child route path must start with the combined path of all its parent routes */}
                <Route path='/redirection/signup' element={ <Signup/> }></Route>
                <Route path='/redirection/login' element={ <Login/> }></Route>
              </Route>

              <Route path='/showcase' element={ <Showcase/> }></Route>
              
          </Routes>
        </context.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;


// Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server
// SDK --> SDK stands for Software Development Kit. It is a collection of software development tools, which can be used to create and develop applications for a specific device or operating system.
