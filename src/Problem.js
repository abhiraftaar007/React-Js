import React, { useState } from 'react'
import Todos from './Todos';

/* 
One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
In this example, you might think that the Todos component will not re-render unless the todos change
This is a similar example to the one in the React.memo section.

Try running this and click the count increment button.
You will notice that the Todos component re-renders even when the todos do not change.

Why does this not work? We are using memo, 
so the Todos component should not re-render 
since neither the todos state nor the addTodo function are changing when the count is incremented.

This is because of something called "referential equality".
Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.


*/
const Problem = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c)=>c+1);
  }

  const addTodo = () => {
    setTodos((t)=> [...t, "New Todo"]);
  }

  return (
    <div>
      <Todos todos={todos} addTodo={addTodo}/>
      <hr />
      <div>
        Count : {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  )
}

export default Problem
