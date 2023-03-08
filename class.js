"use strict";

// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1, Calss declarations
class Person {
  // 생성자(constructor)
  constructor(name, age) {
    //fields
    this.name = name; // this는 해당 class를 동적으로 참조하는데 사용
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: Hello! I'm ${this.age}`);
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
    // this.age 메모리에 저장되있는 값(age)을 읽어오는 것이 아니라 (2)
    // getter를 호출 (3) -->
    // 값을 할당할 때, 바로 메모리에 값을 할당하는 것이 아니라 (5)
    // setter를 호출 (6) -->
    this.age = age;
  }

  // 3개의 field가 존재(firstName, lastName, _age)
  // age라는 getter를 정의하는 순간 (1)
  //   get age() { // --> 호출되는 getter (3)
  //       return this._age; // 사용자가 age를 호출하게 되면 age를 return
  //   }
  // setter를 정의하는 순간(4)
  //   set age(value) { // --> 호출되는 setter (6)
  //     this.age = value; // 새로운 value를 받으면 age를 value로 할당 <-여기서 무한루프 걸리게 됨(call stack error)
  // }
  //   }

  // 값을 return
  get age() {
    return this._age; // 무한 루프에 걸리지 않게 위해 이름을 바꿔주는데 보통 언더바를 사용한다
  }
  // 값을 설정하기 때문에 value를 받아와야한다
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative"); // 공격적인 방법
    // }
    this._age = value < 0 ? 0 : value; // 신사적인 방법
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
  // field
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  // method
  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  // method
  getArea() {
    return this.width * this.height;
  }
}

// 확장(extends)을 해주면 Rectangle에 Shape의 속성들이 포함된다
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 draw 함수 상속 // line.js:108
    console.log("🔺");
  }
  // 다양성
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
// object(rectangle)가 class(Rectangle)를 이용해서 만들어졌는지 아닌지 확인
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true // JS의 모든 object는 자체 정의된 Object를 상속한 것이다(Object ctrl + 클릭)
console.log(triangle.toString());
