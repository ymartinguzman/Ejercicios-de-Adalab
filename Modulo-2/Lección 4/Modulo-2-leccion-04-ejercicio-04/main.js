'use strict';

function numbers(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(numbers(2));

const allNumbers = (a) => {
  if (!a === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(allNumbers(3));
