"use strict";

const btn = document.querySelector(".btn");

const list = document.querySelector(".list");

function repositoriesList() {
  const inputValue = document.querySelector(".input").value;
  fetch(`https://api.github.com/orgs/` + inputValue)
    .then((response) => response.json())
    .then((dataInput) => {
      list.innerHTML = dataInput.repos_url;
    });
}
btn.addEventListener("click", repositoriesList);
