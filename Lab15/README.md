/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 15: Promises and async/await with Local Data

## 1. Experiment No.
15

## 2. Experiment Title
Promises and async/await with Local Data

## 3. Aim
Create a Promise that resolves or rejects, use async/await with try and catch, and load local data as a Promise.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
A Promise represents the eventual completion or failure of an asynchronous operation. A Promise can be fulfilled or rejected. then() handles fulfillment and catch() handles rejection. async declares an asynchronous function, and await pauses within that function until a Promise settles. try and catch handle rejected Promises. Local data can also be returned asynchronously through a Promise.

## 6. Algorithm / Procedure
1. Create checkMarks(marks) returning a Promise that resolves with marks from 0 to 100 and rejects otherwise. Call it with 80 and print the value.
2. Call checkMarks with 120 and print the rejection error message.
3. Create async run() that prints await checkMarks(65), then awaits checkMarks(-5), and catches the error by printing Caught: and its message. Call run().
4. Create getUsers() that resolves after 100 ms with three local users: Asha, Rohan and Meera. Await it and print each name.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Tasks 1–3: Promise, resolve, reject and async/await
function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

// Task 1: Resolve
checkMarks(80)
  .then((value) => console.log(value));

// Task 2: Reject
checkMarks(120)
  .catch((error) => console.log(error.message));

// Task 3: async/await with try/catch
async function run() {
  try {
    console.log(await checkMarks(65));
    console.log(await checkMarks(-5));
  } catch (error) {
    console.log("Caught: " + error.message);
  }
}
run();

// Task 4: Promise with local data
function getUsers() {
  const users = [
    { id: 1, name: "Asha" },
    { id: 2, name: "Rohan" },
    { id: 3, name: "Meera" }
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 100);
  });
}

async function printUsers() {
  const users = await getUsers();
  users.forEach((user) => console.log(user.name));
}
printUsers();
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **Resolve Promise:** Create checkMarks(marks) returning a Promise that resolves with marks from 0 to 100 and rejects otherwise. Call it with 80 and print the value.
2. **Reject Promise:** Call checkMarks with 120 and print the rejection error message.
3. **async/await:** Create async run() that prints await checkMarks(65), then awaits checkMarks(-5), and catches the error by printing Caught: and its message. Call run().
4. **Local data Promise:** Create getUsers() that resolves after 100 ms with three local users: Asha, Rohan and Meera. Await it and print each name.

## 8. Input
Task 1: checkMarks(80). Task 2: checkMarks(120). Task 3: checkMarks(65) and checkMarks(-5). Task 4: local user records for Asha, Rohan and Meera.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
80
Marks out of range
65
Caught: Marks out of range
Asha
Rohan
Meera

Note: Promise callbacks are asynchronous; exact ordering between separate Promise chains may depend on scheduling.
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What is a Promise?
   **A:** An object representing the eventual success or failure of an asynchronous operation.
2. **Q:** What does resolve() do?
   **A:** It fulfills a Promise with a value.
3. **Q:** What does reject() do?
   **A:** It rejects a Promise with a reason or error.
4. **Q:** What is async/await?
   **A:** Syntax that makes Promise-based asynchronous code easier to read.
5. **Q:** Why is try-catch used with await?
   **A:** It handles errors from rejected Promises.
