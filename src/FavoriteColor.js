import { useState } from "react";

function FavoriteColor() {
  /* const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red"); */

  // Or, we can just use one state and include an object instead!
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  // Since we are now tracking a single object,
  // we need to reference that object and then the property of that object when rendering the component. (Ex: car.brand)

  // Updating Objects and Arrays in State
  /* 
  When state is updated, the entire state gets overwritten.
  What if we only want to update the color of our car?
  If we only called setCar({color: "blue"}), this would remove the brand, model, and year from our state.
  We can use the JavaScript spread operator to help us
  */

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  /* 
  Because we need the current value of state, we pass a function into our setCar function. This function receives the previous value.
  We then return an object, spreading the previousState and overwriting only the color.
   */
  
  return (
    <>
      {/* <h1>My {brand}!</h1> */}
      <h1>My {car.brand}!</h1>
      {/* <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button> */}
      <p>
        {/* It is a {color} {model} from {year}; */}
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
}

export default FavoriteColor;
