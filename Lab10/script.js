/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

// Task 1: Read and update object properties
const student1 = { name: "Rohan", roll: 12, marks: 78 };
console.log(student1.name);
student1.marks = 81;
console.log(student1.marks);

// Task 2: Array destructuring
const subjects = ["Maths", "Science", "English"];
const [first, second] = subjects;
console.log(first);
console.log(second);

// Task 3: Object destructuring
const student2 = { name: "Rohan", roll: 12, marks: 81 };
const { name, roll } = student2;
console.log(name);
console.log(roll);
