import React, { useContext, useState, createContext } from 'react'
import { UserContext } from './Component1';

// const Component5 = ({user}) => {
//   return (
//     <div>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </div>
//   )
// }
const Component5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component5
