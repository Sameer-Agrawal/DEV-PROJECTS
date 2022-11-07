import Login from './Component/Login'
import Signup from './Component/Signup'
import Process from './Component/Process'
import Profile from './Component/Profile'
import "./App.css";
import { BrowserRouter , Routes , Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* In previous versions of React Router, you had to order your route a certain way to get the right one to render when multiple routes matched an ambiguous URL. V6 is a lot smarter and will pick the most specific, path match so you don't have to worry about that anymore. */}
        <Routes>
          {/* "Routes" hold's up "Route" */}
          <Route path="/login" element = { <Login/> } ></Route>
          <Route path="/signup" element = { <Signup/> } ></Route>
          <Route path="/profile" element = { <Profile/> } ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// Firebase is a set of hosting services for any type of application. It offers NoSQL and real-time hosting of databases, content, social authentication, and notifications, or services, such as a real-time communication server
// SDK --> SDK stands for Software Development Kit. It is a collection of software development tools, which can be used to create and develop applications for a specific device or operating system.
