"use strict";

// object
// on of the JavaScript's data types.
// a collection of related data and/or functionality
// Nearly all object in Java Script are instances of Object
// object = { key: value}

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(name, age) {
  console.log(name);
  console.log(age);
}

const white = { name: "white", age: 4 };
print(white);

// with JavaScript magic (dynamically typed language)
// can add properties later
white.hasJob = true;
console.log(white.hasJob);

// can delete properties later
delete white.hasJob;
console.log(white.hasJob);

// 2. Computed poperties
console.log(white.name);
console.log(white["name"]);
white["hasJob"] = true;
console.log(white.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(white, "name");

// 3. Property value shorthand
const person1 = { name: "Bob", age: 20 };
const person2 = { name: "Steve", age: 22 };
const person3 = { name: "Dave", age: 24 };
const person4 = new Person("white", 29);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
// 해당키가 object 안에 있는지 확인
console.log("name" in white);
console.log("age" in white);
console.log("random" in white);
console.log(white.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in white) {
  // white가 가지고 있는 key들이 블럭을 돌때마다(반복될 때마다) key라는 지역변수에 할당된다
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. cloning
// Object.assign (dest, [obj1, obj2, obj3...])
const user = { name: "white", age: "29" };
const user2 = user;
user2.name = "coder";
user2.age = "39";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
