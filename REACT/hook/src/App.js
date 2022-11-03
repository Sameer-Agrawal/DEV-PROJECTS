import Counter from "./Component/Counter";
import Immutable from "./Component/Immutable";
import VAR1 from "./Component/USE EFFECT/VAR1";
import VAR2 from "./Component/USE EFFECT/VAR2";
import VAR3 from "./Component/USE EFFECT/VAR3";
import Parent from "./Component/PROPERTY DRILLING/Parent";
import Context from "./Component/Context";

function App() {
  return (
    <div className="App">
      {/* Represent, component invocation */}
      {/* <Counter/> */}
      {/* <Immutable/> */}
      {/* <VAR1/> */}
      {/* <VAR2/> */}
      {/* <VAR3/> */}
      {/* <Parent/> */}
      <Context/>
    </div>
  );
}

export default App;
