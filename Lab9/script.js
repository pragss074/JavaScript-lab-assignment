/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

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
