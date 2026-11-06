/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

// Task 1: Array basics
const marks1 = [72, 85, 64, 90];
console.log(marks1.length);
console.log(marks1[0]);

// Task 2: forEach
const subjects = ["Maths", "Science", "English"];
subjects.forEach((subject) => console.log(subject));

// Task 3: filter
const marks2 = [72, 85, 45, 90];
const selectedMarks = marks2.filter((mark) => mark >= 60);
console.log(selectedMarks);

// Task 4: Nested arrays
const grid = [[1, 2, 3], [4, 5, 6]];
console.log(grid[1][2]);
