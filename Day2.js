// Declare Variables
let a = 5;
let b = 10;


//Expressions

// let sum = a + b; // addition
// let difference = a - b; // subtraction
// let product = a * b; // multiplication
// let quotient = a / b; // division
// let remainder = a % b; // modulus (remainder after division)


//Comparison Operators

// let isGreaterThan = a > b; // greater than
// let isLessThan = a < b; // less than
// let isEqualTo = a === b; // equal to
// let isNotEqualTo = a !== b; // not equal to
// let isGreaterThanOrEqual = a >= b; // greater than or equal to
// let isLessThanOrEqual = a <= b; // less than or equal to


//Logical Operators

// let isTrue = true;
// let isFalse = false;
// let logicalAnd = isTrue && isFalse; // logical AND
// let logicalOr = isTrue || isFalse; // logical OR
// let logicalNot = !isTrue; // logical NOT


//Conditional Statements
if (a > b) {        // code to execute if the condition is true
    console.log("a is greater than b");
} else {            // code to execute if the condition is false
    console.log("a is not greater than b");
}


//conditional (ternary) operators
let result = (a == b) ? "a is equal to b" : "a is not equal to b";
console.log(result);


//switch statement in JavaScript
let day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("It's a weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's a weekend");
    break;
  default:
    console.log("Invalid day");
    break;
}

// let result = mul(5,10,20)
// console.log(result);

// function mul(a,b,c=0) {
//     return a*b*c
// }

// multi = (a,b)=>{
//     return a*b
// }

// console.log(multi(5,10,20))
// const arr = [1,2,3,4,5,6]

// const arr2 = [...arr]

// //console.log(arr, arr2);
// const [one, ...rest]=arr
// console.log(arr,arr2,one,rest);