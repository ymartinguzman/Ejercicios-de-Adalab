"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];
const arrayEmpty = [];
const multipleArray = [];

function bestLostNumber() {
  //const bestLostNumber = function(){}  función anónima, también puedo usar

  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      //pongo [i] para que pregunte por todos. Si pongo [0] se va a quedar siempre en esa posición
      arrayEmpty.push(lostNumbers[i]);
    }
    if (lostNumbers[i] / 3 === Math.ceil(lostNumbers[i] / 3)) {
      //otra opción (lostNumbers[i] % 3 === 0)
      multipleArray.push(lostNumbers[i]);
    }
  }
}

bestLostNumber();
console.log(arrayEmpty);
console.log(multipleArray);
const result = arrayEmpty.concat(multipleArray); //directamente puedo poner consloe.log(arrayEmpty.concat(multipleArray));
console.log(result);
