/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 10: Objects and Destructuring

## 1. Experiment No.
10

## 2. Experiment Title
Objects and Destructuring

## 3. Aim
Create an object, read and change its properties, and take values out of an array and an object with destructuring.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
An object stores data as key-value properties. Properties can be read and updated using dot notation. Destructuring is syntax that extracts values from arrays or properties from objects into variables. Array destructuring follows position; object destructuring uses property names.

## 6. Algorithm / Procedure
1. Create student with name Rohan, roll 12 and marks 78. Print the name, change marks to 81 and print marks again.
2. Store Maths, Science and English in an array, extract the first two into first and second and print them.
3. Create student with name Rohan, roll 12 and marks 81. Extract name and roll and print them.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: Read and update object properties
const student1 = { name: "Rohan", roll: 12, marks: 78 };
console.log(student1.name);
student1.marks = 81;
console.log(student1.marks);

// Task 2: Array destructuring
const subjects = ["Maths", "Science", "English"];
const [first, second] = subjects;
console.log(first);
console.log(second);

// Task 3: Object destructuring
const student2 = { name: "Rohan", roll: 12, marks: 81 };
const { name, roll } = student2;
console.log(name);
console.log(roll);
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Object properties:** Create student with name Rohan, roll 12 and marks 78. Print the name, change marks to 81 and print marks again.
2. **Array destructuring:** Store Maths, Science and English in an array, extract the first two into first and second and print them.
3. **Object destructuring:** Create student with name Rohan, roll 12 and marks 81. Extract name and roll and print them.

## 8. Input
Task 1: student = {name: Rohan, roll: 12, marks: 78}; update marks to 81. Task 2: subjects = Maths, Science, English. Task 3: student = {name: Rohan, roll: 12, marks: 81}.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
Rohan
81
Maths
Science
Rohan
12
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is an object?
   **A:** A collection of properties represented as key-value pairs.
2. **Q:** How do you access an object property?
   **A:** Using dot notation or bracket notation.
3. **Q:** What is destructuring?
   **A:** A syntax for extracting values from arrays or properties from objects.
4. **Q:** How does array destructuring work?
   **A:** It assigns array elements to variables according to their positions.
