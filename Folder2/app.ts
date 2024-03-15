/** @format */

// -------------------------------------------------------
// @ Now this type will assign numbers to string values

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// -------------------------------------------------------
// @Tuple type:
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Sina",
  age: 20,
  hobbies: ["Play Soocer", "Hiking"],
  role: Role.AUTHOR,
};

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

//@ Union types:
function combineTypes(
  parameter1: string | number,
  parameter2: string | number
) {
  let result;
  if (typeof parameter1 === "number" && typeof parameter2 === "number") {
    result = parameter1 + parameter2;
  } else {
    result = parameter1.toString() + " " + parameter2.toString();
  }
  return result;
}
const combineNames = combineTypes("Sina", "Ali");
const combineNumbers = combineTypes(10, 29);
console.log(combineNames);
console.log(combineNumbers);

//
 