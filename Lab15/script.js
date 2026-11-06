/*
 * Name: Pragya
 * Student ID: BCS2025499
 * Roll No: 2510303373
 * Email ID: pragya.rg2007@gmail.com
 */

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
