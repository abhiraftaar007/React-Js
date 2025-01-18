import React, { useRef } from "react";

/* 
Accessing DOM Elements
In general, we want to let React handle all DOM manipulation.
But there are some instances where useRef can be used without causing issues.
In React, we can add a ref attribute to an element to access it directly in the DOM.


*/

const AccessDOMElements = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
};

export default AccessDOMElements;
