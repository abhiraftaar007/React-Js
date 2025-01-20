import "./App.css";
import UseMemoo from "./useMemoo";

/* 
useMemo Hook
The React useMemo Hook returns a memoized value.
Think of memoization as caching a value so that it does not need to be recalculated.

The useMemo Hook only runs when one of its dependencies update.
This can improve performance.

The useMemo and useCallback Hooks are similar. 
The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

Solution -
To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.
We can wrap the expensive function call with useMemo.
The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.
In the following example, the expensive function will only run when count is changed and not when todo's are added.

*/
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <UseMemoo />
    </div>
  );
}

export default App;
