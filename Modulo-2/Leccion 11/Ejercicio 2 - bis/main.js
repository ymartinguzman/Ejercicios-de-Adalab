'use strict';
const input = document.querySelector('.js-input');
const button = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');

// let objects = localStorage.getItem('object');
// input.value = objects;

const objetoAnterior = JSON.parse(localStorage.getItem('object'));
console.log(objetoAnterior);

if (objetoAnterior !== null) {
  input.value = objetoAnterior.search; //así sale de nuevo la busqueda
  for (const character of objetoAnterior.dataInput) {
    result.innerHTML += `<li>Tu personaje es ${character.name} y su género es ${character.gender}</li>`;
  }
}

function clickButton() {
  let inputValue = input.value;

  fetch(`https://swapi.dev/api/people/?search=${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      for (const character of data.results) {
        result.innerHTML += `<li>Tu personaje es ${character.name} y su género es ${character.gender}</li>`;
      }
      // localStorage.setItem('object', JSON.stringify(inputValue));
      let objeto = {
        search: inputValue,
        dataInput: data.results,
      };
      localStorage.setItem('object', JSON.stringify(objeto));
    });
}
button.addEventListener('click', clickButton);
