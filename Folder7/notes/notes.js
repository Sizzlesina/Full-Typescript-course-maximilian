/** @format */

{/* prettier-ignore*/}
/*
@ Generic types:
- A type to got connected to another type and said which exact type that other type is 
++ Example:
const names : Array<string> = [];

@ Generic functions:
++ Syntax:
function merge<T extends object, U extends object>(a : T , b: U){
  return Object.assign(a,b);
}
const mergedObject = merge({name : "sina"}, {age : 20})
! This will merge the two objects into one object
! The extends keyword tell typescript that the generic must be as type "object"

@ Keyof constraint:
function extractAndConvert<T extends object, U extends keyof T>(obj : T, key : U){
  return "Value: " + obj[key];
}
extractAndConvert({name : "Sina"}, "name")

@ Generic classes:
class DataStorage<T extends string | number | boolean>{
  private data : T[] = [];

  addItem(item : T){
    this.data.push(item)
  }

  removeItem(item : T){
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem(){
    return [...this.data]
  }
}
const textStorage = new DataStorage<string>();
! Now we can send data's of the string type to this class (We can choose the type of data's)

! The methods inside the class can have their own generic types too

@ Generic utility types:
- Using partial for objects (Its not that important you can check on that later)

@ Generic types vs Union types:
- Generic types are more flexible than union types
*/
