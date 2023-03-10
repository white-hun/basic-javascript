"use strict";
class UserStorage {
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
          resolve({ name: "white", role: "administrator" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }

  async getUserWithRole(user, password) {
    const id = await this.loginUser(user, password);
    const role = await this.getRoles(id);
    return role;
  }
}
const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage
  .getUserWithRole(id, password) //
  .catch(console.log)
  .then((user) => alert(` Hello ${user.name}, you have a ${user.role}`));
