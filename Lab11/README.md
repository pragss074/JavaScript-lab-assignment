/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 11: Scope and Closures

## 1. Experiment No.
11

## 2. Experiment Title
Scope and Closures

## 3. Aim
Explain block scope and global scope, and use a function that returns a function that keeps a value between calls.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
Scope determines where a variable can be accessed. A block is enclosed by curly braces. Variables declared with let inside a block are block-scoped. A global variable can be accessed by functions in its scope. A closure occurs when an inner function retains access to variables from its outer function even after the outer function has returned.

## 6. Algorithm / Procedure
1. Declare level = outer, declare another level = inner inside a block, print the inner value and then print the outer value.
2. Create makeCounter that sets count to 0 and returns a function that increments and returns count. Call the returned function twice.
3. Declare school = Sample College outside a function. Create showSchool to print Welcome to followed by school and call it.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
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
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Block scope:** Declare level = outer, declare another level = inner inside a block, print the inner value and then print the outer value.
2. **Closure counter:** Create makeCounter that sets count to 0 and returns a function that increments and returns count. Call the returned function twice.
3. **Global scope:** Declare school = Sample College outside a function. Create showSchool to print Welcome to followed by school and call it.

## 8. Input
Task 1: outer variable = outer; block variable = inner. Task 2: counter starts at 0. Task 3: global school = Sample College.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
inner
outer
1
2
Welcome to Sample College
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is scope?
   **A:** The region of a program where a variable can be accessed.
2. **Q:** What is block scope?
   **A:** The scope limited to a block enclosed in curly braces.
3. **Q:** What is a closure?
   **A:** A function that retains access to variables from its surrounding lexical scope.
4. **Q:** What is a global variable?
   **A:** A variable declared in a scope where it can be accessed by multiple parts of the program.
