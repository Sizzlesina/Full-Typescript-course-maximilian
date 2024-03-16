/** @format */

{/*prettier-ignore */}
/*
@ Advanced types:
++ Custom types using "type" keyword
++ Merged types using "&" keyword
++ Types that could be this or could be that using "|" keyword 

@ Type guards:
1 - Using if conditions and "typeof" keyword to have control over the types 
2 - We can check for a property in a object using "in" keyword 
++ Example:
"This" in object

3 - We can use "instanceOf" keyword for classes

@ Discriminated unions:
- Using type for some interfaces and then in the type guard of a function which wanna do something to this interfaces use a switch case an a unique property to store the values

@ Type casting:
- Inside the <> we can write the type casting (<> placed first of the element that we wanna get the type to it)
@ OR
- We can use "as" keyword after the element to tell the type of it

@ Index properties:
- We can make index property types to controll the type of the type of the property and the value for them in objects
++ Example:
interface ErrorContainer {
  [prop : string] : string;
}
const errorBag : ErrorContainer = {
  email : "Please enter a valid email address!"
};

@ Function overloads:
- We can have different prototype of a function (With the same name) but with different parameters

@ Optional chaining:
- Using "?" keyword to have access to the properties of a object if it exists

*/
