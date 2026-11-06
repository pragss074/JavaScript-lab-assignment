/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 9: DOM, Validation, Storage and Quiz

## 1. Experiment No.
9

## 2. Experiment Title
DOM, Validation, Storage and Quiz

## 3. Aim
Change a page with a click, check form values in code, save text in local storage, and build a small quiz.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
The Document Object Model (DOM) represents a web page as objects that JavaScript can access and change. Event listeners respond to user actions such as clicks. Validation checks whether supplied data meets requirements. localStorage stores string data in the browser across page reloads. Radio buttons allow a user to select one answer from a group.

## 6. Algorithm / Procedure
1. Create a Welcome heading and a Change text button. On click, change the heading to Button clicked.
2. Create validateForm(name), returning a list of errors and adding Name is required when name is empty. Print results for Asha and an empty name.
3. Create a text box and Save button. Save text in localStorage under note and restore it when the page opens.
4. Show What is 2 + 3? with radio options 4, 5 and 6. Show Correct when 5 is selected and Try again otherwise.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// script.js — used by index.html for browser tasks
// Task 1: Change heading on button click
const heading = document.getElementById("welcomeHeading");
const changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click", () => {
  heading.textContent = "Button clicked";
});

// Task 2: Validation function
function validateForm(name) {
  const errors = [];
  if (name.trim() === "") {
    errors.push("Name is required");
  }
  return errors;
}
console.log(validateForm("Asha"));
console.log(validateForm(""));

// Task 3: Save and restore text using localStorage
const noteBox = document.getElementById("noteBox");
const saveButton = document.getElementById("saveButton");
noteBox.value = localStorage.getItem("note") || "";
saveButton.addEventListener("click", () => {
  localStorage.setItem("note", noteBox.value);
  document.getElementById("saveStatus").textContent = "Saved";
});

// Task 4: Quiz
document.getElementById("checkAnswer").addEventListener("click", () => {
  const selected = document.querySelector('input[name="answer"]:checked');
  const result = selected && selected.value === "5" ? "Correct" : "Try again";
  document.getElementById("quizResult").textContent = result;
});
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```

**Browser practical:** Open `index.html` in a web browser. Keep `script.js` in the same folder.

### Tasks covered
1. **Change heading:** Create a Welcome heading and a Change text button. On click, change the heading to Button clicked.
2. **Validation:** Create validateForm(name), returning a list of errors and adding Name is required when name is empty. Print results for Asha and an empty name.
3. **Local storage:** Create a text box and Save button. Save text in localStorage under note and restore it when the page opens.
4. **Quiz:** Show What is 2 + 3? with radio options 4, 5 and 6. Show Correct when 5 is selected and Try again otherwise.

## 8. Input
Browser interaction: click Change text; enter any note and click Save; select one quiz option. Console validation inputs: Asha and an empty string.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
Console:
[]
[ 'Name is required' ]

Browser:
Heading changes to “Button clicked”.
Saved note is restored after reloading the page.
Quiz displays “Correct” for 5 and “Try again” for 4 or 6.
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is the DOM?
   **A:** The Document Object Model is a programming representation of an HTML document.
2. **Q:** What is an event listener?
   **A:** A function registered to respond when a particular event occurs.
3. **Q:** What is localStorage?
   **A:** Browser storage that keeps string data across page reloads.
4. **Q:** Why is form validation used?
   **A:** To check user input and report missing or invalid values.
