"use strict";

const promos = [
  {
    promo: "A",
    name: "Ada",
    students: [
      {
        id: "id-1",
        name: "Sofía",
        age: 20,
      },
      {
        id: "id-2",
        name: "María",
        age: 21,
      },
      {
        id: "id-3",
        name: "Lucía",
        age: 22,
      },
    ],
  },
  {
    promo: "B",
    name: "Borg",
    students: [
      {
        id: "id-4",
        name: "Julia",
        age: 23,
      },
      {
        id: "id-5",
        name: "Tania",
        age: 24,
      },
      {
        id: "id-6",
        name: "Alaia",
        age: 25,
      },
    ],
  },
  {
    promo: "C",
    name: "Clarke",
    students: [
      {
        id: "id-7",
        name: "Lidia",
        age: 26,
      },
      {
        id: "id-8",
        name: "Celia",
        age: 27,
      },
      {
        id: "id-9",
        name: "Nadia",
        age: 28,
      },
    ],
  },
];

const studentsWorkingInGoogle = ["id-2", "id-3", "id-5", "id-9"];

/*EJERCICIO 4*/
// console.log(promos[0].name);
// console.log(promos[0].students[0].name);
// console.log(promos[0].students[0].age);

let printNameAdalaber = " "; /*para el segundo bucle que repetirá 9 veces*/
let dataAdalaber = " ";
const listGeneral = document.querySelector(".js-result");
for (let i = 0; i < promos.length; i++) {
  for (let s = 0; s < promos[i].students.length; s++) {
    printNameAdalaber += `<li>${promos[i].students[s].name}, ${promos[i].students[s].age}</li>`;
  }
  dataAdalaber += `<li>
      <p>Nombre: ${promos[i].name}</p>
      <ul>${printNameAdalaber}</ul>
    </li>`;
  printNameAdalaber = " "; /*para parar el bucle y que empiece de nuevo*/
}
listGeneral.innerHTML = `<ul>${dataAdalaber}</ul>`;
// console.log(dataAdalaber);
