// const year = 8760;
// const bisiestYear = 8784;

// const Yamira = 60;

// console.log(year * Yamira);

const userAge = document.querySelector('.age');
console.log(userAge.innerHTML);

console.log('Yo tengo' + userAge); //da error porque no puede leer el string como un número

const ageNumber = parseInt(userAge.innerHTML);
console.log(ageNumber);
console.log('Yo tengo' + ageNumber);
