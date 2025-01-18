import React from 'react'
import Component3 from './Component3'
import { useContext } from 'react'

// const Component2 = ({user}) => {
//   return (
//       <div>
//         <h1>Component 2</h1>
//         <Component3 user = {user}/>
//       </div>
//     )
// }
const Component2 = () => {
  return (
      <div>
        <h1>Component 2</h1>
        <Component3/>
      </div>
    )
}

export default Component2
