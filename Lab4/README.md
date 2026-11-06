/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 4: Writing Functions

## 1. Experiment No.
4

## 2. Experiment Title
Writing Functions

## 3. Aim
Write a function with a return value, an arrow function and a default parameter.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
A function is a reusable block of code that performs a task. Parameters receive values. The return statement sends a result back to the caller. Arrow functions provide concise function syntax. A default parameter supplies a value when an argument is not provided.

## 6. Algorithm / Procedure
1. Write greet(name) to return Hello, followed by a comma, a space and the name. Print greet for Asha.
2. Write an arrow function square that returns a number multiplied by itself. Print square(6).
3. Write billWithTax(amount, taxRate) to return amount plus amount times taxRate. Use 0.18 when taxRate is not given. Print billWithTax(100).

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: Function with return value
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Asha"));

// Task 2: Arrow function
const square = (number) => number * number;
console.log(square(6));

// Task 3: Default parameter
function billWithTax(amount, taxRate = 0.18) {
  return amount + amount * taxRate;
}
console.log(billWithTax(100));
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **greet function:** Write greet(name) to return Hello, followed by a comma, a space and the name. Print greet for Asha.
2. **Arrow function:** Write an arrow function square that returns a number multiplied by itself. Print square(6).
3. **Default parameter:** Write billWithTax(amount, taxRate) to return amount plus amount times taxRate. Use 0.18 when taxRate is not given. Print billWithTax(100).

## 8. Input
Task 1: name = Asha. Task 2: number = 6. Task 3: amount = 100; taxRate is omitted and defaults to 0.18.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
Hello, Asha
36
118
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is a function?
   **A:** A reusable block of code designed to perform a task.
2. **Q:** What does return do?
   **A:** It sends a value back from a function.
3. **Q:** What is an arrow function?
   **A:** A function expression that uses the => syntax.
4. **Q:** What is a default parameter?
   **A:** A parameter value used when an argument is omitted or undefined.
