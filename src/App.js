import './App.css'; // CSS stylesheets
import Car from './Car';
import Garage from './Garage';


/* 
Styling React using CSS
1. Inline styling
In JSX, JavaScript expressions are written inside curly braces, 
and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

camelCased Property Names
Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax
Use backgroundColor instead of background-color

JavaScript Object - 
You can also create an object with styling information, and refer to it in the style attribute



2. CSS stylesheets
You can write your CSS styling in a separate file, just save the file with the .css file extension, and import it in your application
see above - imported App.css

3. CSS Modules
Another way of adding styles to your application is to use CSS Modules.
CSS Modules are convenient for components that are placed in separate files.
The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.

Create the CSS module with the .module.css extension
example: my-style.module.css.
*/

/* 
Styling React Using Sass

Sass
Sass is a CSS pre-processor.
Sass files are executed on the server and sends CSS to the browser.

npm i sass

Refer to my-sass.scss and Garage.js
*/
function App() {
  const myStyle = {
    color:"white",
    backgroundColor:"DodgerBlue",
    padding: "10px",
    fontFamily: "sans-Serif"
  };

  return (
    <div className="App">
      <h1 style={{color:"red"}}>Hello</h1>
      <h2 style={{backgroundColor:"lightblue"}}>camelCased Property</h2>

      <h3 style={myStyle}>JavaScript Object</h3>

      <Car/>

      <Garage/>
    </div>
  );
}

export default App;
