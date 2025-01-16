import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const container = document.getElementById("abhi");
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
  <p>I am simple paragraph</p>
    <App />
  </React.StrictMode>
);

/* 
React Render HTML
React's goal is in many ways to render HTML in a web page.
React renders HTML to the web page by using a function called createRoot() and its method render().

The createRoot() function takes one argument, an HTML element.
The purpose of the function is to define the HTML element where a React component should be displayed.

render() method is then called to define the React component that should be rendered.
But render where ?
There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.
You'll notice a single <div> in the body of this file. This is where our React application will be rendered.
 */