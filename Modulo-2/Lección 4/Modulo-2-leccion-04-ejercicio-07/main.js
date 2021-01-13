'use strict';
//PART 1
//function contains document.querySelector
function getEl(a) {
  const html = document.querySelector(a);
  return html;
}

//function to know if a number is even or odd
function numbers(a) {
  if (!a % 2) {
    return true;
  }
}
// function numbers(a) {
//   if (a % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

//PART 2
const sentence = getEl('.paragraph');
//transform string into number
const number = parseInt(sentence.innerHTML);

//PART 3
//check if number is even or odd
console.log(numbers(!number));
if (!number) {
  console.log('Este número es PAR');
} else {
  console.log('Este número es IMPAR');
}

//instead to show in console, show on screen
const result = getEl('.result');
if (!number) {
  result.innerHTML = 'Este número es PAR';
} else {
  result.innerHTML = 'Este número es IMPAR';
}
