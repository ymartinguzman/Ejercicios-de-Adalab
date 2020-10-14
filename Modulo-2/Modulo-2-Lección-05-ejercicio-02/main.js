"use strict";

const name = document.querySelector(".name");
const button = document.querySelector(".button");
function message() {
  console.log(`Hola ${name.value}`);
}
button.addEventListener("click", message);
