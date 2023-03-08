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
console.log(color.join(" | "));
console.log(color.reverse().join(", "));
console.log(color.shift());
console.log(color.reverse());
console.log(color.push("blue"));
console.log(color);
console.log(color.slice(1, 3)); // index 1부터 3앞까지 출력
