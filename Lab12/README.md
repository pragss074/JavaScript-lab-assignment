/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 12: Callbacks and Higher-Order Functions

## 1. Experiment No.
12

## 2. Experiment Title
Callbacks and Higher-Order Functions

## 3. Aim
Pass a function as an argument to another function and call it.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
A callback is a function passed as an argument to another function. A higher-order function is a function that accepts another function as an argument or returns a function. Arrow functions can be used as concise callback functions.

## 6. Algorithm / Procedure
1. Create applyTwice(fn, value), which calls fn on the value and then on the result. Create addTen and print applyTwice(addTen, 5).
2. Create formatMarks(marks, callback) that returns callback(marks). Print the result for 76 using an arrow callback that formats Marks: 76/100.
3. Create repeatAction(times, action) that calls action once for each round from 1 to times. Call it with 3 and print each round.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
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
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **applyTwice:** Create applyTwice(fn, value), which calls fn on the value and then on the result. Create addTen and print applyTwice(addTen, 5).
2. **formatMarks:** Create formatMarks(marks, callback) that returns callback(marks). Print the result for 76 using an arrow callback that formats Marks: 76/100.
3. **repeatAction:** Create repeatAction(times, action) that calls action once for each round from 1 to times. Call it with 3 and print each round.

## 8. Input
Task 1: value = 5 and callback adds 10. Task 2: marks = 76. Task 3: times = 3.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
25
Marks: 76/100
Round 1
Round 2
Round 3
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is a callback?
   **A:** A function passed to another function to be called by it.
2. **Q:** What is a higher-order function?
   **A:** A function that accepts a function as an argument or returns a function.
3. **Q:** What is an arrow function?
   **A:** A concise function expression using =>.
4. **Q:** What does applyTwice do here?
   **A:** It applies the supplied function to the value two times.
