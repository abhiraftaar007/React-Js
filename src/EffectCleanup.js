import React, { useEffect, useState } from "react";

/* 
Effect Cleanup -
Some effects require cleanup to reduce memory leaks.
Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.
We do this by including a return function at the end of the useEffect Hook.

Note: To clear the timer, we had to name it.
*/
const EffectCleanup = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <h1>Effect Cleanup {count} times!</h1>;
};

export default EffectCleanup;
