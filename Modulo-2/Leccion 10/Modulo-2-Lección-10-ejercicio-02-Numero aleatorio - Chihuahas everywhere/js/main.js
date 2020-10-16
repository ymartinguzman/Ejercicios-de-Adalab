"use strict";

function getDogImage() {
  fetch("https://dog.ceo/api/breed/labrador/images/random")
    .then((dogsRandom) => dogsRandom.json())
    .then((getDogs) => {
      const img = document.querySelector("img");
      img.src = getDogs.message;
      img.alt = "Un perro";
    
    });
}
const btn = document.querySelector(".js-dog");
btn.addEventListener("click", getDogImage);

const btnAnother = document.querySelector(".js-anotherDog");
btnAnother.addEventListener("click", getDogImage);
