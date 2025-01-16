function Garage(props) {
  const cars = props.cars;
  // If cars.length > 0 is equates to true, the expression after && will render.
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage</h2>}
    </>
  );
}

export default Garage;