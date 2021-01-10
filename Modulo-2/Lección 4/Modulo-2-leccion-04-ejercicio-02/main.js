'use strict';

//function
function average(a, b, c, d) {
  return a + b + c + d;
}
console.log(average(10, 20, 30, 40) / 4);

//anonymous function
const newAverage = function (a, b, c, d) {
  return a + b + c + d;
};
console.log(newAverage(50, 60, 70, 80) / 4);

//arrow function
const sum = (a, b, c, d) => {
  return a + b + c + d;
};
console.log(sum(1, 2, 3, 4) / 4);
