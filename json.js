"use strict";

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json); // 배열처럼 보이게 출력된다

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // 함수는 object의 data가 아니기 때문이다
  jump: () => {
    console.log(`${this.name} can jump`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]); // 원하는 property만 전달
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "snow" : value;
  //   return value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
  //   return value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // error
// object가 JSON으로 변환될 때는 함수가 포함되지 않았고
// 다시 JSON이 object로 변환될 때 JSON에 함수가 포함되어 있지 않으니까 object에는 함수가 없다

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate); // birthDate는 string이기 때문에 작성하면 error가 발생한다
// JSON으로 변환될 때 string으로 할당됬기 때문에 다시 string으로 변화해도 string이다
// rabbit안에 Date는 object 인데 이것을 세밀하게 Date로 변환 하고 싶으면 callback 함수를 이용한다
console.log(obj.birthDate.getDate());
