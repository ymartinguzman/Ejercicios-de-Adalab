'use strict';

//function
function age(a, b) {
  return a * b;
}
console.log(age(3, 4));

//anonymous function
const newAge = function (c, d) {
  return c * d;
};
console.log(newAge(5, 6));

//arrow function
const numbers = (e, f) => {
  return e + f;
};
console.log(numbers(4, 10));
