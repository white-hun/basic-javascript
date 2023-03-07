"use strict";

// 1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals:

....
1 + 2 = ${1 + 2}`);

console.log("ellie's \nbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`deIncrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);
// 앞에 있으면 바로 업데이트되서 할당
// 뒤에 있으면 할당을 하고 업데이트

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`); // tip! 무거운 것들을 뒤에 호출한다

// && (and)
console.log(`and: ${value1 && value2 && check()}`);

// null 체크할 때도 사용된다
// often used to compress long if-statement
// nullavleObject && nullableObject.something
// if (nullableObject !== null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("🤞");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const white1 = { name: "white" };
const white2 = { name: "white" };
const white3 = white1;
console.log(white1 == white2); // false reference가 달르다
console.log(white1 === white2); // false reference가 달르다
console.log(white1 === white3); // true reference가 같다

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
// false: 0, null, undefined, NaN, ''
// true: any other value

// 8. Conditional operators: if
// if, else if, else
const name = "coder";
if (name === "white") {
  log("Welcome, White!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  log("unkwnon");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "white" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// While loop, while the condition is truthy,
// body code is exevuted.
let i = 3;
while (i > 0) {
  console.log(`white: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`i: ${i}`);
}

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(`i: ${i}`);
  }
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`i: ${i}`);
}
