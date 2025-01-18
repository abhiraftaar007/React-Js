import './App.css';
import EffectCleanup from './EffectCleanup';
import Timer from './Timer';

/* 
useEffect
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.
useEffect(<function>, <dependency>)

*/

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Timer/>
      <EffectCleanup/>
    </div>
  );
}

export default App;
