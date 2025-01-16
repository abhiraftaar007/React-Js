import './App.css';
import Football from './Football';
/* 
Just like HTML DOM events, React can perform actions based on user events.
React has the same events as HTML: click, change, mouseover etc.

React events are written in camelCase syntax
onClick instead of onclick

React event handlers are written inside curly braces

Example - 
React -> <button onClick={shoot}>Take the Shot!</button>
HTML -> <button onclick="shoot()">Take the Shot!</button>
*/

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Football/>
    </div>
  );
}

export default App;
