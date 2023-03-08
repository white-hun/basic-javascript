"use strict";

// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  // answer
  console.log(fruits.toString());
  console.log(fruits.join());
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  // answer
  const result = fruits.split(",", 2);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // answer
  const result = array.reverse();
  console.log(result);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // answer
  const result = array.slice(2, 5);
  console.log(result);
}
//-------------------------------------
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  // answer
  // find의 callback fn은 boolean 값을 retuen 해야한다
  const result = students.find(
    (student, index) =>
      // console.log(student, index)
      student.score === 90
  ); // boolean 값으로 확인 score가 90이 맞으면 return
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // answer
  const result = students.filter(
    // console.log(student, index);
    (student, index) => student.enrolled
  );
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // answer
  const result = students.map((student) => student.score);
  console.log(result);
}
// Q8. check if there is a student with the score lower than 50
{
  // answer
  const result1 = students.some((student) => student.score < 50);
  console.log(result1);
  const result2 = !students.every((student) => student.score < 50);
  console.log(result2);
  const result3 = students.every((student) => student.score < 50);
  console.log(!result3);
}

// Q9. compute students' average score
{
  // answer
  const myResult = students.map((student) => student.score);
  const avg = myResult.reduce((prev, crnt) => (prev += crnt));
  console.log(avg / 5);
  // answer
  const result = students.reduce((prev, crnt) => prev + crnt.score, 0);
  // console.log("-------------------------");
  // console.log(prev);
  // console.log(crnt);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // answer
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // answer
  const result = students.map((student) => student.score).sort((score1, score2) => score1 - score2);
  console.log(result);
}
