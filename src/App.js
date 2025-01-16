import './App.css';
import message from './message';
import {name,age} from "./person";


function App() {
  return (
    <div className="App">
      <h1>{name}</h1>
      <h1>{age}</h1>
      <p>{message()}</p>
    </div>
  );
}

export default App;
