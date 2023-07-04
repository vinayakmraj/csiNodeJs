// 1. Introduction
console.log("Welcome to JavaScript Basics!");

// 2. Variables
// Variables declared with var are function-scoped.
// Variables declared with let are block-scoped.
// Variables declared with const are also block-scoped like let.
let name = "Vinayak";
let age = 21;

// 3. Data Types
let isStudent = true;
let height = 174.5;
let hobbies = ["reading", "coding", "playing cricket"];
let person = {
  name: "Raj",
  age: 20,
  profession: "Engineer",
};

// 4. Operators
let sum = 10 + 5;
let multiply = 3 * 4;
let isGreaterThan = age > 18;

// 5. Conditional Statements
if (isStudent) {
  console.log("You are a student.");
} else {
  console.log("You are not a student.");
}

// 6. Loops
for (let i = 0; i < hobbies.length; i++) {
  console.log("Hobby:", hobbies[i]);
}

// 8. Arrays
console.log("Hobbies:", hobbies);

// 9. Objects
console.log("Person:", person);
console.log("Person's age:", person.age);
