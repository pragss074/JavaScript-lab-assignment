/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

// Task 1: Block scope
let level = "outer";
{
  let level = "inner";
  console.log(level);
}
console.log(level);

// Task 2: Closure
function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());

// Task 3: Global scope
const school = "Sample College";
function showSchool() {
  console.log("Welcome to " + school);
}
showSchool();
