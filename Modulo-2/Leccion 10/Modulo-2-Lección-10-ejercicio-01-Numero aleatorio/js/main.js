"use strict";

function getEmoji() {
  fetch("https://api.rand.fun/number/integer?&max=4")
    .then((number) => number.json())
    .then((dataNumber) => {
      document.querySelector(".js-result").innerHTML = dataNumber.result;
    });
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);
