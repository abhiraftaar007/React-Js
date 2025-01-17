import './App.css';
import FavoriteColor from './FavoriteColor';

/* 
React useState Hook
The React useState Hook allows us to track state in a function component.
State generally refers to data or properties that need to be tracking in an application.

At the top of your component, import the useState Hook.
destructuring useState from react as it is a named export.

Initialize useState
We initialize our state by calling useState in our function component.

useState accepts an initial state and returns two values:
The current state.
A function that updates the state.

Notice that again, we are destructuring the returned values from useState.
The first value, color, is our current state.
The second value, setColor, is the function that is used to update our state
These names are variables that can be named anything you would like.
Lastly, we set the initial state to an empty string: useState("")

Read State - We can now include our state anywhere in our component.

Update State - 
o update our state, we use our state updater function.
We should never directly update state. Ex: color = "red" is not allowed.

What can state hold?
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
We could create multiple state Hooks to track individual values


*/

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <FavoriteColor/>
    </div>
  );
}

export default App;
