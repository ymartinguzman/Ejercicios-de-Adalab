'use strict';

//function contains document.querySelector
function getEl(a) {
  const html = document.querySelector(a);
  if (!html) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  }
  return html;
}

//function to know if a number is even or odd
function numbers(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//select number from paragraph
const sentence = getEl('.paragraph');
console.log(sentence.innerHTML);

//transform string into number
const number = parseInt(sentence.innerHTML);
console.log(number);

//check if number is even or odd
console.log(numbers(number));
if (number === numbers) {
  console.log('Este número es PAR');
} else {
  console.log('Este número es IMPAR');
}
