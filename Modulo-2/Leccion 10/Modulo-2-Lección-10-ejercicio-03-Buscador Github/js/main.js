"use strict";

const btn = document.querySelector(".button");

function UsersGithub() {
  const inputValue = document.querySelector(".input").value;

  fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json())
    .then((dataInput) => {
      const name = document.querySelector(".name");
      name.innerHTML = dataInput.name;
      const repositories = document.querySelector(".repos");
      repositories.innerHTML = dataInput.public_repos;
      const image = document.querySelector(".image");
      image.src = dataInput.avatar_url;
    });
}
btn.addEventListener("click", UsersGithub);
