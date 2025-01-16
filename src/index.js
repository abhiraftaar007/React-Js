import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';

// JSX - JavaScript XML
// allows us to write HTML in React
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
// JSX converts HTML tags into react elements.
// You are not required to use JSX, but JSX makes it easier to write React applications.
// JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

// with JSX - JSX allows us to write HTML directly within the JavaScript code.
const myElement = <h1>I Love JSX!</h1>;
// without JSX
const myElement1 = React.createElement("h1", {}, "I do not use JSX!");

// Expression in JSX
const myElement3 = <h1>React is {5 + 5} times better with JSX</h1>;

// Large block of HTML
const myElement4 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

// On Top Level Element - The HTML code must be wrapped in ONE top level element.
// So if you like to write two paragraphs, you must put them inside a parent element, like a div element.
// JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
const myElement5 = (
  // <div>
  //   <p>I am a para1</p>
  //   <p>I am a para2</p>
  // </div>

  // JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
  // A fragment looks like an empty HTML tag: <></>.
  <>
    <p>I am a para1</p>
    <p>I am a para2</p>
  </>
);

// Elements Must be Closed - JSX follows XML rules, and therefore HTML elements must be properly closed.
// Attribute className - When JSX is rendered, it translates className attributes into class attributes.
// The class attribute is a much used attribute in HTML, but since JSX is rendered as JavaScript, and the class keyword is a reserved word in JavaScript, you are not allowed to use it in JSX.
const myElement6 = <input className="myclass" type="text" />;

// Conditions - if statement - React supports if statements, but not inside JSX.
// to use conditional statements in JSX, you should put the if statements outside of the JSX, or you could use a ternary expression instead
const x = 5;
let text = "heyyyyy";
if (x < 10) {
  text = "hiloooo";
}
const myElement7 = <h1>{text}</h1>;
// using ternary Operator
const myElement8 = <h1>{(x)<10 ? "hello":"goodBye"}</h1>
// in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(myElement8);
