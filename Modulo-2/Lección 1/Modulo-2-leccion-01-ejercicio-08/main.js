'use strict';

const sectionA = document.querySelector('.section-a');
const sectionB = document.querySelector('.section-b');
const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');

//add elements
sectionA.classList.add('hidden');
sectionB.classList.add('change-color');
button1.classList.add('change-btn');

//remove elements
sectionA.classList.remove('hidden');
sectionB.classList.remove('change-color');
