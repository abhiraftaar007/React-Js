import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return(
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
      <br/>
      <button type="button" onClick={() => setColor("red")}>
        Red
      </button>
      <br/>
      <button type="button" onClick={() => setColor("pink")}>
        Pink
      </button>
      <br/>
      <button type="button" onClick={() => setColor("green")}>
        Green
      </button>
    </>
  );
}

export default FavoriteColor;
