/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

// Task 1: setTimeout with zero delay
console.log("Start");
setTimeout(() => console.log("Timer done"), 0);
console.log("End");

// Task 2: clearTimeout
const timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);
clearTimeout(timerId);
console.log("Cancelled");

// Task 3: setInterval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);
