'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20,
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21,
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22,
      },
    ],
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23,
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24,
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25,
      },
    ],
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26,
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27,
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];

/*EJERCICIO 5*/
console.log(promos[0].promo);
console.log(promos[1].promo);
console.log(promos[2].promo);

console.log(
  promos[0].students[0].id,
  promos[1].students[1].name,
  promos[2].students[2].age
);
const adalabersList = document.querySelector('.js-result');

let idAdalabers = '';
let printList = '';

for (let i = 0; i < promos.length; i++) {
  for (let s = 0; s < promos[i].students.length; s++) {
    idAdalabers +=  promos[i].students[s]);
  }
}
