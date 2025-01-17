import { useState } from "react";
import "./App.css";
import Todos from "./Todos";

/* 
Using memo will cause React to skip rendering a component if its props have not changed.
This can improve performance.

Problem - 
When you click the increment button, the Todos component re-renders.
If this component was complex, it could cause performance issues.

Solution -
To fix this, we can use memo.
Use memo to keep the Todos component from needlessly re-rendering.
Wrap the Todos component export in memo
*/
function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <div className="App">
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
