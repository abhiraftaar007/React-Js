import './App.css';
import Garage from './Garage';

/* 
In React, you will render lists with some type of loop.
The JavaScript map() array method is generally the preferred method.

Let's render all of the cars from our garage
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
