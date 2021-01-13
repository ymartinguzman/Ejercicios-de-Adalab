'use strict';

function getEl(a) {
  const html = document.querySelector(a);
  if (!html) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${a}`);
  }
  return html;
}

const title = getEl('.titl');
const btn = getEl('.btn');

title.innerHTML = 'Adiós';
btn.innerHTML = 'update';
