import './App.css';
import Garage from './Garage';
import Goal from './Goal';


/* 
In React, you can conditionally render components.
Logical && Operator
Another way to conditionally render a React component is by using the && operator.
*/
function App() {
  const cars = ['Ford','BMW','Audi'];
  return (
    <div className="App">
      <h1>Hello</h1>
      <Goal isGoal = {false}/>
      <Garage cars={cars}/>
    </div>
  );
}

export default App;
