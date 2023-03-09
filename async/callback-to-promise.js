"use strict";
// Callvack Hell example
class UserStorage {
  // onSuccess, onError callback 전달받을 필요없음
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "white" && password === "dream") ||
          (id === "balck" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "white") {
          onSuccess({ name: "white", role: "admin" });
        } else {
          onError(new Error("no access"));
        }
      }, 1000);
    });
  }
}
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .loginUser(id, password)
  // .then(user => userStorage.getRoles(user))
  // 받은 인자와 바로 전달하는 인자가 똑같으니 생략가능
  .then(userStorage.getRoles)
  .then((user) =>
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
  )
  .catch(console.log);
