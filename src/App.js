import './App.css';
import Todos from './Todos';


/* 
useReducer Hook
The useReducer Hook is similar to the useState Hook.
It allows for custom state logic.
If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

Syntax
The useReducer Hook accepts two arguments.
useReducer(<reducer>, <initialState>)

The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
The useReducer Hook returns the current stateand a dispatchmethod
*/
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Todos/>
    </div>
  );
}

export default App;
