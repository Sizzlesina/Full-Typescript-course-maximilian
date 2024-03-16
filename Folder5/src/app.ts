/** @format */

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
