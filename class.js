"use strict";

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1, Calss declarations
class Person {
  // constructor
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: Hello!`);
  }
}

const white = new Person("white", 29);
console.log(white.name);
console.log(white.age);

white.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    // age라는 getter를 정의하는 순간 this.age 메모리에 저장되있는 값을 읽어오는 것이 아니라
    // get를 호출
    // setter를 정의하는 순간
    // 값을 할당할 때, 바로 메모리에 값을 할당하는 것이 아니라
    // setter를 호출
    this.age = age;
  }

  // 3개의 field가 존재(firstName, lastName, _age)

  //   get age() {
  //       return this._age; // 사용자가 age를 호출하게 되면 age를 return
  //   }
  //   set age(value) {
  //     this.age = value; // 새로운 value를 받으면 age를 value로 할당 <-여기서 무한루프 걸리게 됨(call stack error)
  // }
  //   }

  // 값을 return
  get age() {
    return this._age; // 무한 루프에 걸리지 않게 위해 이름을 바꿔주는데 보통 언더바를 사용한다
  }
  // 값을 설정
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Refenece
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(Experiment.publicField);
console.log(Experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 draw 함수 상속
    console.log("🔺");
  }
  // overriding: 필요한 함수만 재정의
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}
const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
console.log(triangle.toString());
