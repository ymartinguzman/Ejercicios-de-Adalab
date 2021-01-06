'use strict';

const studentOne = 'Yamira';
const studentTwo = 'Blume';

if (studentTwo !== 'Blume') {
  console.log('Bienvenida,' + studentTwo);
} else if (studentOne !== 'Yamira') {
  console.log('Bienvenida, ' + studentOne);
} else {
  console.log(
    'Lo siento, pero el usuario que has introducido no está regustrado'
  );
}

//otra forma de platearlo
if (studentOne !== 'Yamira' || studentTwo !== 'Blume') {
  console.log('Bienvenida, ' + studentOne || studentTwo);
} else {
  console.log(
    'Lo siento, pero el usuario que has introducido no está regustrado'
  );
}
