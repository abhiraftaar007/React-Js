import "./App.css";
// import Car from "./Car";
import Garage from "./Garage";
// Components are like functions that return HTML elements.
// Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
// Components come in two types, Class components and Function components

/*
Components can be passed as props, which stands for properties.

Props are like function arguments, and you send them into the component as attributes. 
*/

// Components in Components - refer Garage and Car file

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Car color="red" /> */}
      <Garage/>
    </div>
  );
}

export default App;
