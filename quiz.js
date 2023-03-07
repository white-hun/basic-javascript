// Function quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

const add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

//-----------------------------------
function calculate(command, a, b) {
  switch (command) {
    case "add":
      return a + b;
  }
  switch (command) {
    case "substract":
      return a - b;
  }
  switch (command) {
    case "divide":
      return a / b;
  }
  switch (command) {
    case "multiply":
      return a * b;
  }
  switch (command) {
    case "remainder":
      return a % b;
    default:
      throw Error("unknown command");
  }
}

console.log(calculate("add", 10, 10));
