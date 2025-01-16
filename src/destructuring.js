const vehicles = ["mustang", "f-150", "expedition"];
// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// new way
const [car1, truck1, suv1] = vehicles;
// const [car, , suv] = vehicles; // Leave the truck
// When destructuring arrays, the order that variables are declared is important.

// console.log(car1);

// Destructuring comes in handy when a function returns an array:
function calc(a, b) {
  const add = a + b;
  const substract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, substract, multiply, divide];
}
const [add, substract, multiply, divide] = calc(4, 5);

/* console.log(add);
console.log(substract);
console.log(multiply);
console.log(divide); */

// Desturcturing Objects
const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

myVehicle1(vehicleOne);

// before
function myVehicle(vehicle) {
  const message =
    "My " +
    vehicle.type +
    " is a " +
    vehicle.color +
    " " +
    vehicle.brand +
    " " +
    vehicle.model +
    ".";

    console.log(message);
}

// new way
function myVehicle1({ type, color, brand, model }) {
  const message =
    "My " + type + " is a " + color + " " + brand + " " + model + ".";
    console.log(message);
}

const vehicleTwo = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
  registration: {
    city: "Houston",
    state: "Texas",
    country: "USA",
  },
};

myVehicleTwo(vehicleTwo);

function myVehicleTwo({ model, registration: { state } }) {
  const message = "My " + model + " is registered in " + state + ".";
  console.log(message);
}