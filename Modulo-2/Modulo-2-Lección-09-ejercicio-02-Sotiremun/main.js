"use strict";

let arr = [];

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
//   arr.push(i);
// }
// console.log(arr);
function get100Numbers(newArr) {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
    newArr.push(i);
  }
}
get100Numbers(arr);
console.log(arr);

function getReversed100Number(reverseArr) {
  get100Numbers(reverseArr);
  reverseArr.reverse();
}

getReversed100Number(arr);
console.log(arr);
