import './App.css';
import Garage from './Garage';

/* 
Props - stands for properties
Props are arguments passed into React components.
Props are passed to components via HTML attributes
React Props are like function arguments in JavaScript and attributes in HTML.
To send props into a component, use the same syntax as HTML attributes

If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets
Or if it was an object
React Props are read-only! You will get an error if you try to change their value
*/

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Garage/>
    </div>
  );
}

export default App;
