"use strict";

// Promise is a JavaScript object for asynchronous operation
// state: pendubg -> fulfilled or rejected
// Producer vs Consumer

// 1.Producer
// when new Promise is created, the executor runs automatically
// Promise는 resolve & reject라는 callback 함수를 받는 executer라는 callback 함수를 전달해줘야한다
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files) 비동기로 처리하는 것이 좋음
  console.log("doing something...");
  setTimeout(() => {
    // resolve("white");
    reject(new Error(""));
  }, 2000);
});

// 2. Consumers: then, catch, finally
// Producer에서 성공 후 white가 value로 전달
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log("No Network");
  })
  // 성공하든 실패하든 동작의 마지막에 무조건 실행
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

// then은 값을 바로 전달할 수 있지만, Promise도 전달할 수 있다
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
// const getHen = () => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("🐔");
//     }, 1000);
//   });
// };

// const getEgg = (hen) => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${hen} => 🥚`);
//     }, 1000);
//   });
// };

// const cook = (egg) => {
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`${egg} => 🍳`);
//     }, 1000);
//   });
// };

const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// 암묵적으로 then에서 받아오는 value를 getEgg에 전달해서 호출해준다
getHen() // <- prettier로 한줄로 바뀌면 주석할 때 처럼 붙여서 저장해주면 정렬해준다
  .then(getEgg)
  .catch((error) => {
    return "🥐";
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

// 받아오는 value를 다른함수로 바로 호출하는 경우 value 생략가능
// getHen()
//   .then((hen) => {
//     getEgg(hen);
//   })
//   .then((egg) => {
//     cook(egg);
//   })
//   .then((meal) => {
//     console.log(meal);
//   });
