import './App.css';
import Problem from './Problem';
import Solution from './Solution';

/* 
useCallback Hook
The React useCallback Hook returns a memoized callback function.
Think of memoization as caching a value so that it does not need to be recalculated.

This allows us to isolate resource intensive functions so that they will not automatically run on every render.

The useCallback Hook only runs when one of its dependencies update.
This can improve performance.

The useCallback and useMemo Hooks are similar. 
The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.


*/
function App() {
  return (
    <div className="App">
      {/* <Problem/> */}
      <Solution/>
    </div>
  );
}

export default App;
