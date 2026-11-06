/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 13: Reduce, Some, Every and Map

## 1. Experiment No.
13

## 2. Experiment Title
Reduce, Some, Every and Map

## 3. Aim
Use reduce, some, every and map on arrays, and keep the original array unchanged.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
reduce() combines array elements into a single accumulated value. some() checks whether at least one element passes a test. every() checks whether all elements pass a test. map() creates a new array by applying a callback to each element, leaving the original array unchanged.

## 6. Algorithm / Procedure
1. Store prices 120, 45 and 300 in an array. Use reduce starting from 0 to find and print the total.
2. Store marks 72, 85, 30 and 90. Use some to check whether any mark is below 40 and every to check whether all marks are 35 or more.
3. Store marks 72, 85, 64 and 90. Use map to create a new array where every mark is 5 more. Print the new and original arrays.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: reduce
const prices = [120, 45, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);

// Task 2: some and every
const marks1 = [72, 85, 30, 90];
console.log(marks1.some((mark) => mark < 40));
console.log(marks1.every((mark) => mark >= 35));

// Task 3: map
const marks2 = [72, 85, 64, 90];
const increasedMarks = marks2.map((mark) => mark + 5);
console.log(increasedMarks);
console.log(marks2);
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **reduce:** Store prices 120, 45 and 300 in an array. Use reduce starting from 0 to find and print the total.
2. **some and every:** Store marks 72, 85, 30 and 90. Use some to check whether any mark is below 40 and every to check whether all marks are 35 or more.
3. **map:** Store marks 72, 85, 64 and 90. Use map to create a new array where every mark is 5 more. Print the new and original arrays.

## 8. Input
Task 1: prices = [120, 45, 300]. Task 2: marks = [72, 85, 30, 90]. Task 3: marks = [72, 85, 64, 90].

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
465
true
false
[ 77, 90, 69, 95 ]
[ 72, 85, 64, 90 ]
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What does reduce() do?
   **A:** It combines array elements into one accumulated result.
2. **Q:** What does some() return?
   **A:** true if at least one element passes the test; otherwise false.
3. **Q:** What does every() return?
   **A:** true if all elements pass the test; otherwise false.
4. **Q:** Does map() change the original array?
   **A:** No. It returns a new array.
