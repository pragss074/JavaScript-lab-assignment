/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

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
