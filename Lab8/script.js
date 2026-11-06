/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

// Task 1: Inheritance
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return "Hi, I am " + this.name;
  }
}
class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}
const teacher = new Teacher("Anita", "Maths");
console.log(teacher.greet());

// Task 2: Locker
class Locker {
  constructor() {
    this.pin = 1234;
  }
  checkPin(number) {
    return number === this.pin;
  }
}
const locker = new Locker();
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));

// Task 3: Composition
class Engine {
  constructor(power) {
    this.power = power;
  }
}
class Car {
  constructor(power) {
    this.engine = new Engine(power);
  }
  start() {
    return "Car starts with " + this.engine.power + " HP";
  }
}
const car = new Car(150);
console.log(car.start());
