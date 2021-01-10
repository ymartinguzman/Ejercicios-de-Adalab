'use strict';

const input = document.querySelector('.input');
const result = document.querySelector('.result');

const year = input.value;
const leapYear = 4;

function years() {
  if (year % 4 === 0) {
    result.innerHTML = `Este año ${year} es bisiesto`; //${year + leapYear}
  } else if (year % 4 === 1) {
    result.innerHTML = `${year + (leapYear - 3)}`;
  } else if (year % 4 === 2) {
    result.innerHTML = `${year + (leapYear - 2)}`;
  } else if (year % 4 === 3) {
    result.innerHTML = `${year + (leapYear - 1)}`;
  }
}

input.addEventListener('change', years);
console.log(year);
