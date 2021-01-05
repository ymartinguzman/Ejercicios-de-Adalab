'use strict';

const firstName = 'Leticia Fernández Sánchez';
const number = firstName.length;
const title = document.querySelector('h1');
title.innerHTML = `El nombre de mi compañera es ${firstName}, y está compuesto por ${number} caracteres`;

console.log(number);
