"use strict";

// synchronous callback
function printImmediately(print) {
  print();
}
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
printImmediately(() => console.log("Hello"));
printWithDelay(() => console.log("async callback"), 2000);

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
