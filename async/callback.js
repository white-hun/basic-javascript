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

// 사용자의 데이터를 백엔드 서버에서 받아오는 class
class UserStorage {
  // 사용자 로그인 API
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      // id & password 맞다면
      if (
        (id === "white" && password === "dream") ||
        (id === "balck" && password === "academy")
      ) {
        // id를 전달해주는 callback
        onSuccess(id);
        // id & password 포함되지 않으면
      } else {
        // error 출력
        onError(new Error("not found"));
      }
    }, 2000);
  }
  // 사용자의 권한을 서버에 요청해서 정보를 받아오는 API
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      // 사용자가 white이면
      if (user === "white") {
        // name & role을 전달해주는 callback
        onSuccess({ name: "white", role: "admin" });
        // white 아니면
      } else {
        // error 출력
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

// 1. 사용자에게 id & password 입력받기 (prompt)
// 2. 서버에 로그인
// 3. 로그인한 사용자의 id를 이용해서 roles(권한)을 요청
// 4. 로그인에 성공한 사용자의 정보 출력(alert)

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
// prompt로 입력받은 정보를 loginUser에 전달
userStorage.loginUser(
  id,
  password,
  // line.js:36 -> id
  // loginUser.onSuccess
  (user) => {
    // user를 이용해서 getRoles에 전달
    userStorage.getRoles(
      user,
      // getRoles.onSuccess
      (userWithRole) => {
        // 성공 시 메세지 출력
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      // getRoles.onError
      (error) => {
        console.log(error);
      }
    );
  },
  // loginUser.onError
  (error) => {
    console.log(error);
  }
);
