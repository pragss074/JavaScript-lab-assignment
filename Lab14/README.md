/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */
# Experiment 14: Timers and Intervals

## 1. Experiment No.
14

## 2. Experiment Title
Timers and Intervals

## 3. Aim
Run code after a delay with setTimeout, cancel a timer, and repeat code with setInterval.

## 4. Software / Tools Required
- JavaScript
- Visual Studio Code (or any text editor)
- Node.js (for running JavaScript files)
- Web browser (for browser-based practicals)
- Command Prompt / VS Code Terminal

## 5. Theory
setTimeout() schedules a callback to run once after a delay. clearTimeout() cancels a scheduled timeout. setInterval() repeatedly runs a callback after a specified interval. clearInterval() stops the repeated execution. Timer callbacks run asynchronously relative to the remaining synchronous code.

## 6. Algorithm / Procedure
1. Print Start, schedule Timer done with setTimeout and delay 0, then print End. Observe the order.
2. Schedule Not shown after 1000 milliseconds, store its timer ID, cancel it with clearTimeout and print Cancelled.
3. Print Tick and a count every 200 milliseconds. Stop the interval when the count reaches 3.

## 7. Program / Queries / Commands
The complete program for this experiment is saved in `script.js`.

```javascript
// Task 1: setTimeout with zero delay
console.log("Start");
setTimeout(() => console.log("Timer done"), 0);
console.log("End");

// Task 2: clearTimeout
const timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);
clearTimeout(timerId);
console.log("Cancelled");

// Task 3: setInterval
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Tick " + count);
  if (count === 3) {
    clearInterval(intervalId);
  }
}, 200);
```

**Execution command (for Node.js practicals):**
```bash
node script.js
```



### Tasks covered
1. **setTimeout order:** Print Start, schedule Timer done with setTimeout and delay 0, then print End. Observe the order.
2. **Cancel timeout:** Schedule Not shown after 1000 milliseconds, store its timer ID, cancel it with clearTimeout and print Cancelled.
3. **setInterval:** Print Tick and a count every 200 milliseconds. Stop the interval when the count reaches 3.

## 8. Input
No keyboard input. Timings: setTimeout delay = 0 ms; cancelled timeout delay = 1000 ms; interval delay = 200 ms.

## 9. Output
Expected output (formatting of arrays may differ slightly between browser consoles and Node.js):

```text
Start
End
Cancelled
Timer done
Tick 1
Tick 2
Tick 3

Note: Timer callbacks appear after synchronous statements. Tick messages are printed about 200 ms apart.
```

**Output screenshot:** Run the program, capture the actual terminal or browser output, and save it as `images/screenshot.png`.

![Output screenshot](images/screenshot.png)

## 10. Result
The experiment was performed successfully. The JavaScript concepts covered in this experiment were implemented and the expected results were obtained.

## 11. Viva-Voce Questions
1. **Q:** What does setTimeout() do?
   **A:** It schedules a callback to run once after a delay.
2. **Q:** What does clearTimeout() do?
   **A:** It cancels a timeout that has not executed yet.
3. **Q:** What does setInterval() do?
   **A:** It repeatedly executes a callback after a specified interval.
4. **Q:** How do you stop an interval?
   **A:** Call clearInterval() with its interval ID.
