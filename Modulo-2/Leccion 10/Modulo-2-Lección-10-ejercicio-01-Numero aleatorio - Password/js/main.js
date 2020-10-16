"use strict";
function getEmoji() {
  fetch("https://api.rand.fun/text/password?&length=30")
    .then((number) => number.json())
    .then((dataNumber) => {
      document.querySelector(".js-result").innerHTML = dataNumber.result;
    });
}
document.querySelector(".js-emoji").addEventListener("click", getEmoji);

//puedo añadir datos al final de la api con ? y & como length=30
