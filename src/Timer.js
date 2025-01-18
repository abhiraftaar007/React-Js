import React, { useEffect, useState } from "react";

const Timer = () => {
  //   const [count, setCount] = useState(0);

  /* 
    useEffect(()=>{
      setTimeout(()=>{
          setCount((count)=>count+1);
      },1000);
    })
    But wait!! It keeps counting even though it should only count once!
    useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
    This is not what we want. There are several ways to control when side effects run.
    
    We should always include the second parameter which accepts an array. We can optionally pass dependencies to useEffect in this array.
  
    1. No Dependency passed:
    useEffect(()=>{
        // Runs on Every render
        })
  ` 
    2. An empty array:
    useEffect(()=>{
        // Runs only on the first render
        }, [])
    
    3. Props or state values
    useEffect(()=>{
        // Runs on the first render
        // And any time and dependency values changes
        }, [props, state])
    */

  const [count, setCount] = useState(0);
  /* useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here, runs only on the first render
 */

  // Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again.
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here
  // If there are multiple dependencies, they should be included in the useEffect dependency array.

  

  return (
    <div>
      <h1>I've rendered {count} times!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </div>
  );
};

export default Timer;
