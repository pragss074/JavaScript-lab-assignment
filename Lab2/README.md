/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 2: Operators, Type Conversion and a Calculator

## 1. Experiment No.
2

## 2. Experiment Title
Operators, Type Conversion and a Calculator

## 3. Aim
Use arithmetic operators, convert between text and numbers, and choose an operation using if and else if.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
Arithmetic operators perform calculations: +, -, * and /. Number() converts suitable text to a number and String() converts a value to text. if and else if statements select a block of code based on a condition.

## 6. Algorithm / Procedure
1. Use 17 and 5 and print their sum, difference, product and quotient on separate lines.
2. Convert the text 12 to a number and add 5. Convert the number 7 to text, join it with the text 3 and print the result.
3. Use 8 and 4 with the + operator. Use if and else if to print the sum or difference, then change the operator to - and repeat.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: Arithmetic operations
const a = 17;
const b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Task 2: Type conversion
const convertedNumber = Number("12");
console.log(convertedNumber + 5);
const convertedText = String(7);
console.log(convertedText + "3");

// Task 3: Calculator using conditions
const firstNumber = 8;
const secondNumber = 4;
let operator = "+";

if (operator === "+") {
  console.log(firstNumber + secondNumber);
} else if (operator === "-") {
  console.log(firstNumber - secondNumber);
}

operator = "-";
if (operator === "+") {
  console.log(firstNumber + secondNumber);
} else if (operator === "-") {
  console.log(firstNumber - secondNumber);
}
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Arithmetic operations:** Use 17 and 5 and print their sum, difference, product and quotient on separate lines.
2. **Type conversion:** Convert the text 12 to a number and add 5. Convert the number 7 to text, join it with the text 3 and print the result.
3. **Calculator:** Use 8 and 4 with the + operator. Use if and else if to print the sum or difference, then change the operator to - and repeat.

## 8. Input
Task 1: 17 and 5. Task 2: text "12", number 7 and text "3". Task 3: numbers 8 and 4; operators + and -.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
22
12
85
3.4
17
73
12
4
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is an arithmetic operator?
   **A:** An operator used to perform a mathematical calculation.
2. **Q:** What is type conversion?
   **A:** Changing a value from one data type to another.
3. **Q:** What does Number() do?
   **A:** It converts a suitable value into a number.
4. **Q:** Why are if and else if used?
   **A:** They allow a program to select code based on conditions.
