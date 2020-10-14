"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
const arrayEmpty = [];
const multipleArray = [];

function bestLostNumber() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      arrayEmpty.push(lostNumbers[i]);
    }
    if (lostNumbers[i] / 3 === Math.ceil(lostNumbers[i] / 3)) {
      multipleArray.push(lostNumbers[i]);
    }
  }
  return document.write(arrayEmpty.concat(multipleArray));
}

bestLostNumber();
// console.log(arrayEmpty);
// console.log(multipleArray);
// const result = arrayEmpty.concat(multipleArray);
// console.log(result);
