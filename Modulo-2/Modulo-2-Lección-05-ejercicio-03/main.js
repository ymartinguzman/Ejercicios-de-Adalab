"use strict";

const paragraph = document.querySelector(".paragraph");
const section = document.querySelector(".section");
function newParagraph() {
  section.innerHTML =
    section.innerHTML +
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facilis voluptate, porro animi, nostrum nisi, expedita dignissimos quisquam cum adipisci praesentium ipsam vitae laboriosam reprehenderit soluta ipsum ullam iure.Tempora!</p>";
}
paragraph.addEventListener("mouseenter", newParagraph);
// paragraph.removeEventListener("mouseover", newParagraph);//si quiero que el evento sólo suceda una vez
