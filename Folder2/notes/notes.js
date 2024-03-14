/** @format */

{/* prettier-ignore*/}

/*
@ Code Types :
++ string
++ number 
++ boolean
++ object 
++ Array  

++ Tuple 
- Added by Typescript Fixed-length array
!HINT: When using the "Tuple" type we can push an value to our array but we cant assign a new value to it manually

++ Enum:
- Added by Typescript : Automatically enumerated global constant identifiers
!HINT: This type will have a label and a value for this label (The lables better be uppercase ) so when we want to access the value of the label we write:
- (enum name).(enam label)

++ Any:
- This means anything

++ Union types:
- By combining two or more types we can create union types
  
++ Type alias:
- We can use the "type" keyword to create our own custom type

++ Function types:
- These types syntax are like functions => ( (parameter type) ) => (return type) or we can use "Function" keyword

++ Callback function types:
function something(number1: number,number2: number,cn: () => void){
  const result = number1 + number2;
  cn(result);
}
something(10,20,(result) =>{
  console.log(result)
})

++ void:
- Used for functions when it returns nothing

++ unknown:
- We can store any value in it without getting any error but type unknown is different with type any
@ An example to undrestand the difference:
let userInput : any;
let userOutput : unknown;
let userName : string;

userInput = 5;
userInput = "Max";
* userName = userInput;
! userName = userOutput;
? The userInput can be assigned to a string value because type any can be anything but the userOutput cant be assigned because we dont know about the type of it 

++ never:
- Used for when we have nothing at all (e.g. function that never returns anything)
@ Example:
function generateError(message:string,code : number) : never{
  throw {message: message,errorCode : code};
}
const result = generateError("An error occurred!",500);
console.log(result);

@ - Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.

@ - These links might also be interesting:

* Official TypeScript Docs: https://www.typescriptlang.
*/
