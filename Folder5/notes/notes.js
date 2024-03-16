/** @format */

{/*prettier-ignore */}
/*
@ Classes:
- Blueprints for objects (theorical definition)
- Define how objects look like, which properties and methods they have
- Classes make creation of multiple, similar objects much easier
@ Objects:
- The thing you work in code
- Instances of classes (based on classes)
- Class-based creation is an alternative to using object literals

@ Class syntax:
- Classes must start with a uppercase letter
- Classes have a built in constructor function
- We can pass in values to the class properties with the constructor function using "this"  keyword
++ Example:
class ClassName {
  name : string;
  constructor(n : string){
    this.name = n;
  }
}
const object = new ClassName("Value");

@ How to copy a function that use "this" keyword:
- Imagine we want to make a copy of a function inside the class that uses the "tbis" keyword to have access to its properties now we want to copy this function into another variable
++ Take a look at the syntax:
class Student{
  name : string;
  constructor(n : string){
    this.name = n;
  }
  describe(){
    console.log("Student name is: ",this.name)
  }
} 
const object = new Student("Sina");
const objectCopy = {name:"Ali",object.describe};
objectCopy.describe();
! In this case we get an error because typescript cant figure out that which name we pointing out;
* Now the solution:
class Student{
  name : string;

  constructor(n:string){
    this.name = n;
  }
  describe(this : Student){
    console.log("Student name is: ",this.name);
  }
}
const object = new Student("Sina");
const objectCopy = {name:"Ali",object.describe};
objectCopy.describe();

@ Access modifiers:
++ Private: 
- When we dont want a method or a variable in a class to only have access to that inside the class we write "private" mark near it
++ Public:
- This is a default access modifier for variables and methods inside the class and we can have access to these methods and variables from outside the class too

@ Shorthand syntax:
++ Instead of:
class Student{
  private id : string;
  name : string;
  
  constructor(i:string,n:string){
    this.name = n;
    this.id = i;
  }
}
++ Write:
class Student {

  constructor(private id:string,public name : string){}
}

@ Readonly modifier:
- This modifier only exists in typescript
- This add some extra safety that a property that initialized once cant changed value (Something like constant variable values)
++ Example:
class Student {
  employees : string[] = [];
  constructor(private id : string, public name : string){}

  addEmployee(employee : string){
    ! this.id = "dga2"; => Error
    this.employees.push(employee)
  }
}
const object = new Student("fr23","Sina");

@ Inheritance:
- A class that have the same behavior as another class BUT with some extra features
++ Example:
class Person {
  constructor(private name: string, public age: number) {}
}
class Student extends Person {
  constructor(private id: string, name: string, age: number) {
    super(name, age);
  }
}
const object = new Student("932", "Sina", 20);
console.log(object);
* Now this will store the name and the age of the student into the variables inside the class 

@ Protected modifier:
- We can have access to this type of methods and variables in the classes that inherited from the base class 

@ Getters and Setters:
++ get:
- We can get a property in the class with some controling over the property and then return it using this type of function
++ set:
- We can set the value for some properties in the class with this type of functions
!HINT: We call these getters and setters like a property not like a function call

++ Example:
class Student {
  private lastReport : string;
  constructor(private reports : string[]){
    this.lastReport = reports[0];
  }

  get mostRecentReports(){
    if(this.lastReport){
      return this.lastReport
    }
    throw new Error("Something went wrong")
  }
  addReports(text : string){
    this.reports.push(text);
    this.lastReport = text;
  }
  set mostRecentReports(value : string){
    if(!value){
      throw new Error("Please enter a value!")
    }
    this.addReports(value)
  }
}
const object = new Student("Sina",["Max","Anitta"]);
object.mostRecentReports("Some new reports");
console.log(object.mostRecentReports)

@ Static properties and methods:
- These properties and methods will live in the whole application lifecycle
- We call these type of methods directly with the class

@ Abstract classes:
- We can make an class abstract and force the other developers to use a specified class
++ Example:
abstract class Person {
  constructor(protected name : string){}

  abstract describe(this : Person) : void;
}
class Student extends Person {
  constructor(name : string){
    super(name)
  }
  describe(){
    console.log("Student name is: ",this.name);
  }
}
const object1 = new Person("Sina");
const object2 = new Student("Sina");
! object1.describe(); => Error
* object2.describe(); => Success

@ How to create a private constructor?:

abstract class Person {
  constructor(protected name : string){}

  abstract describe(this : Person) : void;
}
class Student extends Person {
  private static instance : Student;
  constructor(name : string){
    super(name)
  }
 static getInstance(){
  if(Student.instance){
    return this.instance;
  }
?  this.instance = new Student("Sina"); ====> This is the default value for the class properties
  return this.instance;
 }
  describe(){
    console.log("Student name is: ",this.name);
  }
}
const object = Student.getInstance()

@ Interface:
- Is a custom typescript type created by us
- We can use it like this:
++ Syntax:
interface Person {
  name: string;
  age: number;

  greet: (phrase: string) => void;
}

let user1: Person;
user1 = {
  name: "Sina",
  age: 20,

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user1.greet("Hi there i am");
++ Output : Hi there i am Sina

@ Using interfaces with classes:
- We can use the interfaces with class using "implements" keyword
++ Syntax:
interface Greetable {
  name: string;
  age: number;

  greet: (phrase: string) => void;
}
// Interface cant get a default value
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}
let user1: Greetable;

user1 = new Person("Sina");
user1.greet("Hi there - I am");

! Two interfaces can extend from each other


@These links might also be interesting:
*More on (JS) Classes: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
* More on TS Interfaces: 
https://www.typescriptlang.org/docs/handbook/2/objects.html
*/
