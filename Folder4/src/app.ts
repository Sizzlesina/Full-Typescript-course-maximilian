/** @format */
// @ This cant be changed
const userName = "Max";
// userName = "Maximilian";

// @ This can be changed
let age = 30;
age = 29;

//!HINT: You shouldnt use "var" anymore in modern javascript (Because of scoping)

if (age > 20) {
  var isOld: boolean = true;
}
console.log(isOld); // The scope of this variable is global

// But in let variables:
if (age > 20) {
  let isOld2 = true;
}
// console.log(isOld2) => This cant be accessed to because of scoping

// @ Spread operator:
const person = {
  name: "Sina",
  age: 20,
};
const newPerson = { ...person };
console.log(newPerson);

// @ Rest parameter:
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addNumbers = add(5, 10, 2, 3.7);
console.log(addNumbers);

// @ Destructing arrays:
const hobbies = ["Soccer", "Hiking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, "\n", hobby2);

// @ Object Destructing:
const { name: firstName, age: newAge } = person;
console.log(firstName, newAge);
