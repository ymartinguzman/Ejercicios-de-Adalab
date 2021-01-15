'use strict';

const html = document.querySelector('.paragraph');
const borderBox = false;
const width = 30;
const padding = 20;
const borderSize = 5;

const box = (a, b, c, d) => {
  if (borderBox === true) {
    html.innerHTML = `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${
      width + padding + borderSize
    } px`;
  } else {
    html.innerHTML = `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${
      width + padding
    } px`;
  }
};

box(true, 10, 10, 10);
