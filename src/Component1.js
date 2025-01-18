import React, { useState, useContext, createContext } from "react";
import Component2 from "./Component2";
import Component5 from "./Component5";

/* 
The Problem -
State should be held by the highest parent component in the stack that requires access to the state.
To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".

Even though components 2-4 did not need the state, they had to pass the state along so that it could reach component 5.

The Solution -
The solution is to create context.
To create context, you must Import createContext and initialize it
Next we'll use the Context Provider to wrap the tree of components that need the state Context.

Now, all components in this tree will have access to the user Context.

*/

const UserContext = createContext();

const Component1 = () => {
  const [user, setUser] = useState("Abhi");

  return (
    // <div>
    //   <h1>{`Hello ${user}!`}</h1>
    //   <Component2 user = {user}/>
    // </div>
    <>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </UserContext.Provider>

      <h1>Hello</h1>
    </>
  );
};

// function ComponentTest(){
//     const user = useContext(UserContext);
//     return <h1>Test {user}</h1>
// }

export { Component1, UserContext };
// export default Component1;
// export {UserContext};
