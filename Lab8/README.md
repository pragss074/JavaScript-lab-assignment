/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 8: Inheritance, Methods and Composition

## 1. Experiment No.
8

## 2. Experiment Title
Inheritance, Methods and Composition

## 3. Aim
Use extends to make a child class, write a method that checks a value, and place one object inside another.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
Inheritance allows a class to use and extend the features of another class. The extends keyword creates a child class. Composition means building an object using another object as one of its properties. Methods define behavior associated with objects.

## 6. Algorithm / Procedure
1. Create Person with greet() returning Hi, I am followed by the name. Create Teacher extending Person and adding a subject. Create Anita, who teaches Maths, and print her greeting.
2. Create Locker with PIN 1234 and checkPin(number), returning true when the number matches and false otherwise. Print checks for 1111 and 1234.
3. Create Engine storing power and Car holding an Engine created from its power. start() returns Car starts with, the power and HP. Create a Car with power 150 and print start().

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
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
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Inheritance:** Create Person with greet() returning Hi, I am followed by the name. Create Teacher extending Person and adding a subject. Create Anita, who teaches Maths, and print her greeting.
2. **Locker:** Create Locker with PIN 1234 and checkPin(number), returning true when the number matches and false otherwise. Print checks for 1111 and 1234.
3. **Composition:** Create Engine storing power and Car holding an Engine created from its power. start() returns Car starts with, the power and HP. Create a Car with power 150 and print start().

## 8. Input
Task 1: Anita, subject Maths. Task 2: PIN checks 1111 and 1234. Task 3: car power = 150 HP.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
Hi, I am Anita
false
true
Car starts with 150 HP
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is inheritance?
   **A:** A feature that lets a class acquire and extend behavior from another class.
2. **Q:** What does extends do?
   **A:** It declares a class as a child of another class.
3. **Q:** What does super() do?
   **A:** It calls the parent class constructor from a child class constructor.
4. **Q:** What is composition?
   **A:** Building an object by including other objects as its parts or properties.
