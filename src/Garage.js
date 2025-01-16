import Car from "./Car";

function Garage() {
  //   const cars = ["Ford", "BMW", "Audi"];
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];

  // When you run this code in your create-react-app, it will work but you will receive a warning that there is no "key" provided for the list items.
  /* 
  {cars.map((car) => (
          <Car brand={car} />
        ))}
   */
  // Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.
  // Keys need to be unique to each sibling. But they can be duplicated globally
  // Generally, the key should be a unique ID assigned to each item. As a last resort, you can use the array index as a key.
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

export default Garage;
