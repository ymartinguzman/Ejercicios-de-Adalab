'use strict';

function getEl(a) {
  const html = document.querySelector(a);
  return html;
}

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

const sentence = getEl('.paragraph');
const number = parseInt(sentence.innerHTML);

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
