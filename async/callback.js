"use strict";

// JavaScript is synchronous
// Execute the code block by order after hoisting
// hoisting: var, function declaration

// synchronous callback
function printImmediately(print) {
  print();
}
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

console.log("1"); // 동기
// setTimeout(function to run, set time)
setTimeout(() => console.log("2"), 1000); // 비동기 // 브라우저에 요청해두고
console.log("3"); // 동기
printImmediately(() => console.log("Hello")); //동기
printWithDelay(() => console.log("async callback"), 2000); // 비동기

// Callvack Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "white" && password === "dream") ||
        (id === "balck" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "white") {
        onSuccess({ name: "white", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(user, (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    });
  },
  (error) => {
    console.log(error);
  }
);
