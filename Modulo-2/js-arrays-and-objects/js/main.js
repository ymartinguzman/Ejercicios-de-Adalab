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

// TÚ CÓDIGO AQUÍ

const htmlContainer = document.querySelector(".js-result");

function listAdalabers() {
  let accName = ""; //3º crear const, fuera y ante spara que se aplique en el bucle. La creo que para que luego se metan aqui las iteraciones
  console.log(promos[0].name); //1º es el camino para llegar a Ada. Buena práctica para ver el camino a seguir para llegar a un nombre pero aún me falta encontrar cómo llegar a los tres nombres. Camino para llegar a un objeto o clave

  for (let i = 0; i < array.length; i++) {
    console.log(promos[i].name); //2º a ver qué me da
    accName += `<li>${promos[i].name}</li>`; // 4º con esto me pinta los <li>
  }
  //una opción es  meter el bucle en una función pq para meter el ul y que lo imprima, no queremos que lo imprima muchas veces, sólo queremos que imprima varias cosas las <li>
  console.log(accName); //5º  a ver qué me está pintando
  htmlContainer.innerHTML = `<ul>${accName}</ul>`; //6º añadp ul a html
}
listAdalabers();

//7º para terminar de rizar el rizo, meto todo en una función. Lo mejor no dejar código por ahí dando vueltas
