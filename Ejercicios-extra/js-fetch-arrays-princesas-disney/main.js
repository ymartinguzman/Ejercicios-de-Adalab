'use strict';

const list = document.querySelector('.list');
const btn = document.querySelector('.js-btn');

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
    result += `<li class="js-list--data"><button class="js-btn">`;
    result += `<div class="container"><img class="js-list--image" src = ${picture} alt=${name}>`;
    result += `<h2 class="title"> ${name} </h2></div>`;
    result += `<div class="comment"> ${comment} </div>`;
    result += `</button></li>`;
  }
  list.innerHTML = result;
}

// function friendPrincess(){
//   if()
// }

// btn.addEventListener('click', friendPrincess);

apiData(princess);
