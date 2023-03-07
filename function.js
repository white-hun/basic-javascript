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
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Pest paraneters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
}
printAll("dream", "coding", "white");
