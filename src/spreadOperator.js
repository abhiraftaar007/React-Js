//allows us to quickly copy all or part of an existing array or object into another array or object.
const numberOne = [1,2,3];
const numberTwo = [4,5,6];
const numbersCombined = [...numberOne, ...numberTwo];
// console.log(numbersCombined);

// combination with destructuring
const numbers = [1,2,3,4,5,6];
const [one, two, ...rest] = numbers;
console.log(one);
console.log(two);
console.log(rest);

// with objects
const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);