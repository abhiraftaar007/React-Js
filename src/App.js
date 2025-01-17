import './App.css';
import MyForm from './MyForm';

/* 
Just like in HTML, React uses forms to allow users to interact with the web page.Just like in HTML, React uses forms to allow users to interact with the web page.

In HTML, form data is usually handled by the DOM.
In React, form data is usually handled by the components.
When the data is handled by the components, all the data is stored in the component state.
You can control changes by adding event handlers in the onChange attribute.
We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
You can control the submit action by adding an event handler in the onSubmit attribute for the <form>
*/
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <MyForm/>
    </div>
  );
}

export default App;
