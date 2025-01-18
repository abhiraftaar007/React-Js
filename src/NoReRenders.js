import React, { useEffect, useRef, useState } from 'react'

/* 
Does not Cause Re-renders
If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
To avoid this, we can use the useRef Hook.


useRef() only returns one item. It returns an Object called current.
When we initialize useRef we set the initial value: useRef(0).
It's like doing this: const count = {current: 0}. We can access the count by using count.current.
*/

const NoReRenders = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(()=>{
    count.current = count.current+1;
  })
  
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  )
}

export default NoReRenders
