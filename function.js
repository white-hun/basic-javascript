"use strict";

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
  console.log("Hello");
}

printHello();

function log(message) {
  console.log(message);
}
log("Welcome!");

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  // changeName(white)
  obj.name = "coder"; // white.name 즉 white object 내부에 존재하는 name: white 가 coder로 변경
}
const white = { name: "white" };
changeName(white);
console.log(white);

// 3. Default parameters (addid in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`); // from: 어디에서 message가 왔는지
}
showMessage("Hi!");

// 4. Pest paraneters (added in ES6)
function printAll(...args) {
  // args의 갯수 만큼 반복
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]); // 반복문 진행상황에 따라 하나씩 출력
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => log(arg));
}
printAll("dream", "coding", "white");

// 5. Locla scope
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "Hello";
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "Hello";
  }
  //   return undefined; // return이 없는 함수는 return undefined;와 같다
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum ${sum(1, 2)}`);

// Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
// 조건이 맞지 않을 때는 빨리 return을 해서 종료하고 조건이 맞을 때만 logic을 실행하는 것이 좋다
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a vlaue to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defiend (hoisted)
// a function expression is created when the execution reaches it.
// anonymous function
const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum; // line.js:72
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("Yes!");
};
// named function
// better debugging in debugger's stack traces
// recursions // 피보나치 수, 반복되는 평균값
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// recursions // 피보나치 수, 반복되는 평균값
// const printNo = function print() {
//     console.log("no!");
//     print();
//   };
//   randomQuiz("wrong", printYes, printNo);
//   randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint1 = function () {
  console.log("simplePrint");
};

const simplePrint2 = () => console.log("simplePrint");
const add2 = (a, b) => a + b;

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언함과 동시에 출력, 실행하듯이 함수를 묶어준다
(function hello() {
  console.log("IIFE");
})();

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder
