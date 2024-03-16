/** @format */

{/* prettier-ignore */}
/*
@ Decorators:
- "experimentalDecorators" in the tsconfig file must be uncommented 
- Decorator syntax is like a function
- it start with a capital letter (Optional)
- It executes when the class is defined

++ Syntax:
function Logger(constructor : Function){
  console.log("Logging...");
  console.log(constructor);
}
@Logger()
class Person{
  constructor(){
    console.log("Creating person object...");
  }
}
const pers = new Person();

@ Decorator factory:
function Logger(logString : string){
  return function(constructor : Function){
    console.log(logString);
    console.log(constructor);
  }
}
@Logger("LOGGING _ PERSON")
class Person{
  name = "Sina"
  constructor(){
    console.log("Creating person object...")
  }
}
const object = new Person();
---------------------------------------------------------------------------------------------------------------------------------------------------
@ Attached you find all the code snapshots for this module - you also find them attached to individual lectures throughout this module.
@These links might also be interesting:
*More on Decorators:
 https://www.typescriptlang.org/docs/handbook/decorators.html
 */
