/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

// Task 1: Higher-order function
function applyTwice(fn, value) {
  return fn(fn(value));
}
function addTen(number) {
  return number + 10;
}
console.log(applyTwice(addTen, 5));

// Task 2: Callback formatting
function formatMarks(marks, callback) {
  return callback(marks);
}
console.log(formatMarks(76, (marks) => "Marks: " + marks + "/100"));

// Task 3: Repeat callback
function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}
repeatAction(3, (round) => console.log("Round " + round));
