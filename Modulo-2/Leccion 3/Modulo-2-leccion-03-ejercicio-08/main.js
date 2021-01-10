'use strict';

const input = document.querySelector('.input');
const result = document.querySelector('.result');

const leapYear = 4;

function years() {
  const year = parseInt(input.value);
  if (year % 4 === 0) {
    result.innerHTML = `Este año ${year} es bisiesto. El próximo año bisiesto será ${
      year + leapYear
    }`;
  } else if (year % 4 === 1) {
    result.innerHTML = `El próximo año bisiesto será ${year + 3}`;
  } else if (year % 4 === 2) {
    result.innerHTML = `El próximo año bisiesto será ${year + 2}`;
  } else if (year % 4 === 3) {
    result.innerHTML = `El próximo año bisiesto será ${year + 2}`;
  }
  console.log(year);
}

input.addEventListener('change', years);
