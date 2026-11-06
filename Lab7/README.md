/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 7: Constructor Functions and Classes

## 1. Experiment No.
7

## 2. Experiment Title
Constructor Functions and Classes

## 3. Aim
Create objects with a constructor function and an ES6 class, and add a method through the prototype.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
A constructor function is a function used with new to create objects. The this keyword refers to the object being created. ES6 classes provide syntax for defining objects and methods. A prototype allows methods to be shared by objects created from the same constructor.

## 6. Algorithm / Procedure
1. Create Student(name, marks), create Asha with 88 marks and print her name and marks on separate lines.
2. Create a Book class with title and pages and a summary() method. Create Algorithms with 320 pages and print its summary.
3. Create Student with name and marks. Add result to Student.prototype; it returns Pass for marks of 40 or more and Fail otherwise. Print Asha's result.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: Constructor function
function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}
const student1 = new Student("Asha", 88);
console.log(student1.name);
console.log(student1.marks);

// Task 2: ES6 class
class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }
  summary() {
    return `${this.title} has ${this.pages} pages`;
  }
}
const book = new Book("Algorithms", 320);
console.log(book.summary());

// Task 3: Prototype method
function StudentResult(name, marks) {
  this.name = name;
  this.marks = marks;
}
StudentResult.prototype.result = function () {
  return this.marks >= 40 ? "Pass" : "Fail";
};
const student2 = new StudentResult("Asha", 88);
console.log(student2.result());
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Constructor function:** Create Student(name, marks), create Asha with 88 marks and print her name and marks on separate lines.
2. **ES6 class:** Create a Book class with title and pages and a summary() method. Create Algorithms with 320 pages and print its summary.
3. **Prototype method:** Create Student with name and marks. Add result to Student.prototype; it returns Pass for marks of 40 or more and Fail otherwise. Print Asha's result.

## 8. Input
Task 1: Asha, 88. Task 2: title = Algorithms, pages = 320. Task 3: Asha, marks = 88.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
Asha
88
Algorithms has 320 pages
Pass
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is a constructor function?
   **A:** A function used with new to initialize a newly created object.
2. **Q:** What is a class in JavaScript?
   **A:** A syntax for defining object templates and their methods.
3. **Q:** What is a prototype?
   **A:** An object from which other objects can inherit properties and methods.
4. **Q:** What does this refer to in a constructor?
   **A:** The new object being initialized.
