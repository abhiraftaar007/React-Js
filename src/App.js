import AccessDOMElements from "./AccessDOMElements";
import "./App.css";
import NoReRenders from "./NoReRenders";
import TrackStateChanges from "./TrackStateChanges";

/* 
useRef -
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.

*/
function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}

      <h3>No Renders</h3>
      <NoReRenders />
      <h3>Accessing DOM Elements</h3>
      <AccessDOMElements />
      <br/>
      <h3>TrackState Changes</h3>
      <TrackStateChanges />
    </div>
  );
}

export default App;
