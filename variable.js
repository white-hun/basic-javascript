// 1. Use strict
// added in ES5
// use this for Valira Javascript
"use strict"; // ES5

// 2. Variable(Mutable)
// let (added in ES6)
// rw(read/write)
let globalName = "global name";
{
  let name = "white";
  console.log(name);
  name = "black";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var hoisting(move declaration from bottom to top)
// has no block scope(block scope 무시한다)
// 어디에 선언했든 상관없이 선언을 제일 위로 끌어올려주는 것
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants(Immutable)
// r (read only)
// use const whenever possible
// only use let if variable needs to change
const daysInWeek = 7;
const maxNumber = 5;

// NOTE!!
// Immutable data types: premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all object by default are mutable in JS
// favor immutable data type always for a few reasons
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// type에 따라서 메모리에 저장 되는 방법이 다른 방식으로 저장된다
// premitive- single item: number, string, boolean, null, undefined, symbol
// primitive type- value로 값이 저장
// object- box container
// object type- object를 가르키는 reference가 저장
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over ((-2**53) ~2**53)
console.log(`value: ${bigInt},  type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "breadan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting},  type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob},  type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true; // true
const test = 3 < 1; // false
console.log(`value: ${canRead},  type: ${typeof canRead}`);
console.log(`value: ${test},  type: ${typeof test}`);

// null
let nothing = null; // 명확하게 비어있다고 '할당'한 것
console.log(`value: ${nothing},  type: ${typeof nothing}`);

// undefined
let x; // '선언'은 되었지만 '할당'되지 않은 것
console.log(`value: ${x},  type: ${typeof x}`);

// symbol, create unique identifiers for objects
// map 이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시다발적인 코드에서 우선순위를 준다
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
console.log(`value: ${symbol1.description},  type: ${typeof symbol1}`);

// object, real-life object, data structure
// 크기가 커서 메모리에 한번에 들어 갈 수 없다(white를 할당하고 그 안에 name과 age를 할당)
// white가 가르키는 곳에는 reference가 있는데 실제로 object를 가르키고 있는 곳
// reference를 통해서 object가 담겨있는 메모리를 가르킨다
// 박스 형태의 자료
const white = { name: "ellie", age: 20 };
white.age = 29;

// 5. Dynamic typing: dynamically typed language
// 선언할 때 어떤 type인지 선언하지 않고
// 프로그램이 동작할 때(run time) 할당된 값에 따라서 type이 변경될 수 있다
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${text},  type: ${typeof text}`);
text = 1;
console.log(`value: ${text},  type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text},  type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text},  type: ${typeof text}`);
// console.log(text.charAt(0)); // 바로 위 코드에서 type이 number로 변경되서 에러발생
