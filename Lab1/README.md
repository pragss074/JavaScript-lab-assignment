/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 1: Your First JavaScript Script

## 1. Experiment No.
1

## 2. Experiment Title
Your First JavaScript Script

## 3. Aim
Run a script in the browser and with Node.js, and declare values with const and let.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
JavaScript is a programming language used to make web pages interactive. A script can run in a browser or with Node.js. console.log() prints values to the console. const declares a variable that cannot be reassigned, while let declares a variable that can be reassigned. typeof returns the type of a value.

## 6. Algorithm / Procedure
1. Add a script element inside the body of an HTML page and print “Hello from the script” using console.log. Open the page and inspect the browser Console (F12).
2. Declare schoolName with the text Sample College and year with the number 2026. Print both values on separate lines.
3. Print the type of the text hello, the number 7 and the Boolean value true.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: Browser script (also included in index.html)
console.log("Hello from the script");

// Task 2: const and let
const schoolName = "Sample College";
let year = 2026;
console.log(schoolName);
console.log(year);

// Task 3: typeof
console.log(typeof "hello");
console.log(typeof 7);
console.log(typeof true);
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Browser script:** Add a script element inside the body of an HTML page and print “Hello from the script” using console.log. Open the page and inspect the browser Console (F12).
2. **const and let:** Declare schoolName with the text Sample College and year with the number 2026. Print both values on separate lines.
3. **typeof:** Print the type of the text hello, the number 7 and the Boolean value true.

## 8. Input
No interactive input is required. Values used: Sample College, 2026, "hello", 7 and true.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
Hello from the script
Sample College
2026
string
number
boolean
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is JavaScript?
   **A:** A programming language commonly used to add interactivity to web pages.
2. **Q:** What does console.log() do?
   **A:** It displays a value or message in the console.
3. **Q:** What is the difference between let and const?
   **A:** A let variable can be reassigned; a const variable cannot be reassigned.
4. **Q:** What does typeof return?
   **A:** It returns a string describing the data type of a value.
