'use strict';

const dogAge = document.querySelector('.input');
const result = document.querySelector('.result');

const dogFirstYear = 15;
const dogSecondYear = 9;
const dogThirdAndMore = 5;

function totalAge() {
  const userValue = parseInt(dogAge.value);

  if (userValue === 1) {
    result.innerHTML = `El perro tiene ${dogFirstYear} años humanos`;
  } else if (userValue === 2) {
    result.innerHTML = `El perro tiene ${
      dogFirstYear + dogSecondYear
    } años humanos`;
  } else if (userValue === 3) {
    result.innerHTML = `El perro tiene ${
      dogFirstYear + dogSecondYear + dogThirdAndMore
    } años humanos`;
  } else {
    result.innerHTML = `El perro tiene ${
      dogFirstYear + dogSecondYear + (userValue - 2) * dogThirdAndMore
    } años humanos `;
  }
  console.log(userValue);
}

dogAge.addEventListener('change', totalAge);
console.log(dogAge);
