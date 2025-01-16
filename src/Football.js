export default function Football() {
  // const shoot = () => {
  //     alert("Great Shot!");
  // }

  // Passing Arguments - To pass an argument to an event handler, use an arrow function.
  //   const shoot = (a) => {
  //     alert(a);
  //   };

  // React Event Object - Event handlers have access to the React event that triggered the function.
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  };

  return (
    // <button onClick={shoot}>Take the Shot!</button>
    // <button onClick={() => shoot("Goal!")}>Take the Shot!</button>
    <button onClick={(event) => shoot("Goal!", event)}>Take the Shot!</button>
  );
}
