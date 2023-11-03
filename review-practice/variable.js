"use strict";

// {}: block scope {} 밖에서 {}안을 볼 수 없다
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}
