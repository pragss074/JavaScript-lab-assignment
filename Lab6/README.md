/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 6: JSON Text

## 1. Experiment No.
6

## 2. Experiment Title
JSON Text

## 3. Aim
Convert an object to JSON text, convert JSON text back to an object, and catch invalid JSON.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
JSON stands for JavaScript Object Notation. It is a text format used to represent structured data. JSON.stringify() converts a JavaScript value into JSON text. JSON.parse() converts valid JSON text into a JavaScript value. try and catch handle errors that may occur while parsing invalid JSON.

## 6. Algorithm / Procedure
1. Create an object with name Rohan and marks [70, 80], convert it to JSON text using JSON.stringify and print it.
2. Convert the text {"city":"Pune","pin":411001} to an object using JSON.parse and print the city.
3. Store {name: Rohan} as text, try to parse it and print Invalid JSON in the catch block.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: Object to JSON text
const student = { name: "Rohan", marks: [70, 80] };
const jsonText = JSON.stringify(student);
console.log(jsonText);

// Task 2: JSON text to object
const cityText = '{"city":"Pune","pin":411001}';
const cityObject = JSON.parse(cityText);
console.log(cityObject.city);

// Task 3: Handle invalid JSON
const invalidText = "{name: Rohan}";
try {
  JSON.parse(invalidText);
} catch (error) {
  console.log("Invalid JSON");
}
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Stringify:** Create an object with name Rohan and marks [70, 80], convert it to JSON text using JSON.stringify and print it.
2. **Parse:** Convert the text {"city":"Pune","pin":411001} to an object using JSON.parse and print the city.
3. **Invalid JSON:** Store {name: Rohan} as text, try to parse it and print Invalid JSON in the catch block.

## 8. Input
Task 1: An object containing name Rohan and marks 70, 80. Task 2: valid JSON text for Pune. Task 3: invalid JSON text {name: Rohan}.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
{"name":"Rohan","marks":[70,80]}
Pune
Invalid JSON
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is JSON?
   **A:** A text format used to represent structured data.
2. **Q:** What does JSON.stringify() do?
   **A:** It converts a JavaScript value into a JSON string.
3. **Q:** What does JSON.parse() do?
   **A:** It parses valid JSON text into a JavaScript value.
4. **Q:** Why is try-catch used?
   **A:** To handle errors without stopping the program unexpectedly.
