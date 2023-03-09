"use strict";

// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  return "white";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍎";
}
async function getBanana() {
  await delay(1000);
  return "🍌";
}

// await 병렬 실행
async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

// async function pickFruits() {
//   const apple = await getApple();
//   const banana = await getBanana();
//   return `${apple} + ${banana}`;
// }

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // all: promise 배열을 전달하게되면 모든 Promise들이 병렬적으로 다 받을 때까지 모아준다
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  // race: 배열에 전달된 Promise 중에서 먼저 값을 return하는 아이만 전달된다
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
