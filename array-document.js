"use strict";

const color = ["red", "orange", "yellow"];
console.log(color);
console.log(color.length);
console.log(color.toString());
console.log(color.toLocaleString());
console.log(color.pop("red"));
console.log(color.pop());
console.log(color.push("orange", "yello", "green", "blue"));
console.log(color);
const color2 = ["pupple", "navy"];
const newColor = color.concat(color2);
console.log(newColor);
// join
console.log(color.join(" | "));
// reverse
console.log(color.reverse().join(", "));
// shift
console.log(color.shift());
console.log(color.reverse());
console.log(color.push("blue"));
console.log(color);
// slice
console.log(color.slice(1, 3)); // index 1부터 3앞까지 출력

const number = [1, 5, 10, 15, 20, 25, 100];
number.sort(); // default=ASC(Ascending Order: 문자형 오름차순)
console.log(number); // 숫자 1이 우선이기 때문에 [1, 10, 100, 15, 20, 25, 5]
// sort(오름차순)
number.sort((comp1, comp2) => {
  return comp1 - comp2; // -1(0보다 작은 수)이면 오름(1 - 5, 5 - 10...)
});
console.log(number);
// sort(내림차순)
number.sort((comp1, comp2) => {
  return comp2 - comp1; // 1(0보다 큰 수)이면 내림(5 - 1, 10 - 5...)
});
console.log(number);
// splice
number.splice(2, 4); // index 2부터 4개 삭제
console.log(number);
// unshift
number.unshift(1000, 1000); // 맨앞쪽 추가
console.log(number);
// indexOf
console.log(number.indexOf(1));
// lastIndexOf
console.log(number.lastIndexOf(1000));

const rgb = [
  { name: "red", age: 20 },
  { name: "green", age: 20 },
  { name: "blue", age: 25 },
];
// every(AND조건)
console.log(rgb.every((item) => item.age > 19));
console.log(rgb.every((item) => item.age >= 25));
// some(OR조건)
console.log(rgb.some((item) => item.age > 19));
console.log(rgb.some((item) => item.age >= 25));
// forEach
number.forEach((num) => console.log(num));
// map
const mapNumber = number.map((num) => num * 10);
console.log(mapNumber);
// filter
const filterNumber = number.filter((num) => num > 900);
console.log(filterNumber);
// reduce
const reduceNumber = number.reduce((num, current) => {
  return (num += current);
}, 1000);
console.log(reduceNumber);

const countNumber = [2, -5, -123, 59, -5480, 24, 0, -69, 349, 3];
const count = countNumber.reduce(
  (num, cnt) => {
    if (cnt < 0) {
      num[0]++;
    } else if (cnt > 0) {
      num[1]++;
    }
    return num;
  },
  [0, 0]
);
console.log(count);
// reduceRight
const reduceRightNumber = number.reduceRight((num, current) => num - current);
const reduceNumber2 = number.reduce((num, current) => num - current);
console.log(reduceRightNumber);
console.log(reduceNumber2);
