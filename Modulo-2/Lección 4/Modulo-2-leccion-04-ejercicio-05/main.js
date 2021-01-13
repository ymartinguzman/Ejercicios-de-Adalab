'use strict';

function getEl(a) {
  return document.querySelector(a);
}

const title = getEl('.title');
const btn = getEl('.btn');

title.innerHTML = 'Adiós';
btn.innerHTML = 'update';
