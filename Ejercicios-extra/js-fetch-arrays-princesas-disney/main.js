'use strict';

const princessList = document.querySelector('.list');

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
  for (let i = 0; i < princess.length; i++) {
    console.log(princess[i].name);
  }
}

apiData(princess);
