/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

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
