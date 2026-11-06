/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 3: Conditions and Loops

## 1. Experiment No.
3

## 2. Experiment Title
Conditions and Loops

## 3. Aim
Choose between cases with if, else if and else, and repeat work with for and while loops.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
Conditional statements control program flow by checking conditions. A for loop is useful when the number of repetitions is known. A while loop repeats as long as its condition is true. The loop variable or condition must be updated so that the loop can stop.

## 6. Algorithm / Procedure
1. Store marks 72 and print Grade A for 75 or more, Grade B for 60 or more, and Grade C otherwise.
2. Print the numbers from 1 to 5, one on each line.
3. Add 1, then 2, then 3 and so on to a total until the total is more than 20. Print the total.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: Grade
const marks = 72;
if (marks >= 75) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// Task 2: for loop
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Task 3: while loop
let total = 0;
let number = 1;
while (total <= 20) {
  total += number;
  number++;
}
console.log(total);
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Grade using conditions:** Store marks 72 and print Grade A for 75 or more, Grade B for 60 or more, and Grade C otherwise.
2. **for loop:** Print the numbers from 1 to 5, one on each line.
3. **while loop:** Add 1, then 2, then 3 and so on to a total until the total is more than 20. Print the total.

## 8. Input
Marks = 72. The for loop runs from 1 through 5. The while loop starts with total = 0 and number = 1.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
Grade B
1
2
3
4
5
21
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is a conditional statement?
   **A:** A statement that executes code depending on whether a condition is true or false.
2. **Q:** What is a for loop?
   **A:** A loop commonly used when the repetition count or range is known.
3. **Q:** What is a while loop?
   **A:** A loop that continues while its condition is true.
4. **Q:** What can cause an infinite loop?
   **A:** A loop condition that never becomes false, often because the control variable is not updated.
