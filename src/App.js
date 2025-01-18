import "./App.css";
import { Component1 } from "./Component1";
// import Component1 from "./Component1";
/* 
useContext Hook -
React Context is a way to manage state globally.
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
*/

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Component1 />
    </div>
  );
}

export default App;
