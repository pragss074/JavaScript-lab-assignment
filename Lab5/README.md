/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 5: Arrays, Array Methods and Nested Arrays

## 1. Experiment No.
5

## 2. Experiment Title
Arrays, Array Methods and Nested Arrays

## 3. Aim
Create arrays, read their items, use forEach and filter, and read a value from an array inside another array.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
An array stores multiple values in an ordered collection. Array indexes start at 0. The length property gives the number of items. forEach() runs a callback for every item. filter() creates a new array containing items that pass a condition. A nested array contains other arrays.

## 6. Algorithm / Procedure
1. Store 72, 85, 64 and 90 in marks. Print the number of items and the first mark.
2. Store Maths, Science and English in an array and print each subject using forEach.
3. Filter 72, 85, 45 and 90 to keep marks of 60 or more and print the new array.
4. Store [1, 2, 3] and [4, 5, 6] inside grid. Print the number in row 2 and column 3.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: Array basics
const marks1 = [72, 85, 64, 90];
console.log(marks1.length);
console.log(marks1[0]);

// Task 2: forEach
const subjects = ["Maths", "Science", "English"];
subjects.forEach((subject) => console.log(subject));

// Task 3: filter
const marks2 = [72, 85, 45, 90];
const selectedMarks = marks2.filter((mark) => mark >= 60);
console.log(selectedMarks);

// Task 4: Nested arrays
const grid = [[1, 2, 3], [4, 5, 6]];
console.log(grid[1][2]);
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Array basics:** Store 72, 85, 64 and 90 in marks. Print the number of items and the first mark.
2. **forEach:** Store Maths, Science and English in an array and print each subject using forEach.
3. **filter:** Filter 72, 85, 45 and 90 to keep marks of 60 or more and print the new array.
4. **Nested array:** Store [1, 2, 3] and [4, 5, 6] inside grid. Print the number in row 2 and column 3.

## 8. Input
Task 1: [72, 85, 64, 90]. Task 2: [Maths, Science, English]. Task 3: [72, 85, 45, 90]. Task 4: [[1, 2, 3], [4, 5, 6]].

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
4
72
Maths
Science
English
[ 72, 85, 90 ]
6
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is an array?
   **A:** An ordered collection that stores multiple values.
2. **Q:** What is the first index of an array?
   **A:** The first index is 0.
3. **Q:** What does forEach() do?
   **A:** It calls a function once for each array element.
4. **Q:** What does filter() return?
   **A:** A new array containing elements that pass the given test.
