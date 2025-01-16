import Car from "./Car";

export default function Garage() {
  const carName = "Ford";
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      {/* <Car brand="Ford"/> */}
      {/* <Car brand={carName} /> */}
      <Car brand={carInfo} />
    </>
  );
}
