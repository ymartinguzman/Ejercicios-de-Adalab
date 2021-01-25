'use strict';

const list = document.querySelector('.list');

let princess = [];
function apiData(arr) {
  fetch(
    'https://beta.adalab.es/ejercicios-extra/js-fetch-arrays-princesas-disney/data/users.json'
  )
    .then((response) => response.json())
    .then((data) => {
      princess = data;
      console.log(princess);
      paintInfo();
    });
}

function paintInfo() {
  let result = '';

  for (let i = 0; i < princess.length; i++) {
    const picture = princess[i].picture;
    const name = princess[i].name;
    const comment = princess[i].comment;
    result += `<li>`;
    result += `<img src = ${picture} alt=${name}>`;
    result += `<h2> ${name} </h2>`;
    result += `${comment}`;
    result += `</li>`;
  }
  list.innerHTML = result;
}

apiData(princess);
