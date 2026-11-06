/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

// Task 1: reduce
const prices = [120, 45, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

// Task 2: some and every
const marks1 = [72, 85, 30, 90];
console.log(marks1.some((mark) => mark < 40));
console.log(marks1.every((mark) => mark >= 35));

// Task 3: map
const marks2 = [72, 85, 64, 90];
const increasedMarks = marks2.map((mark) => mark + 5);
console.log(increasedMarks);
console.log(marks2);
