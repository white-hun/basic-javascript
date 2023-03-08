"use strict";

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // 제일 마지막 배열을 가져오는 방법

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b.for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// forEach에선 array를 받아오지 않는다
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the END
fruits.push("strawberry", "peach");
console.log(fruits);

// pop remove an item from the END
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the BEGINNING
fruits.unshift("strawberry", "lemon");
console.log(fruits);

// shift: remove an item to the BEGINNING
fruits.shift();
fruits.shift();
console.log(fruits);

// NOTE!
// shift, unshift are slower than pop, push
// 뒤쪽에 데이터를 추가할 때는 빈공간에서 추가, 삭제하면 되지만
// 앞쪽에 데이터를 넣으려면 앞에있던 데이터를 뒤에 새로운 공간을 만들고 옮겨줘야하기 때문이다
// splice: remove an item by index position
fruits.push("strawberry", "peach", "lemon");
console.log(fruits);
// fruits.splice(1, 3);
// console.log(fruits);
fruits.splice(1, 1, "orange", "watermelon"); // 지우고 원하는 데이터 추가
console.log(fruits);

// combine two arrays
const fruits2 = ["pear", "kiwi"];
// concat(...items: ConcatArray<T>[]): T[]; // concat API Document
// concat을 호출하는 배열(fruits) + 새로전달될 items(fruits2) = 새로운 배열을 return(newfruits)
const newfruits = fruits.concat(fruits2);
// const newfruits = [...fruits2, ...fruits];
console.log(newfruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("orange"));
console.log(fruits.indexOf("strawberry"));
console.log(fruits.indexOf("lemon"));
// includes: true of false
console.log(fruits.includes("grape"));
// lastIndexOf
fruits.push("apple");
console.log(fruits);
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));
