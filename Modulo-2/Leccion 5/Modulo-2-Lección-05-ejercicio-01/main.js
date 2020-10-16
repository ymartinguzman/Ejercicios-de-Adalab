"use strict";

let ole = "Mi primer click, ¡ole yo y la madre que me parió";
function firstClick() {
  alert(ole);
}

let button = document.querySelector(".click");
button.addEventListener("click", firstClick);
