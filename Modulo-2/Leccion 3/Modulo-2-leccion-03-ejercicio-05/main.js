'use strict';

const alert = document.querySelector('div');

if (alert.classList.contains('success')) {
  alert.innerHTML = `<h1>CORRECTO</h1> <p>Los datos son correctos</p>`;
  alert.classList.add('success');
} else if (alert.classList.contains('error')) {
  alert.innerHTML = `<h1>ERROR</h1> <p>Ha surgido un error</p>`;
  alert.classList.add('error');
} else if (alert.classList.contains('warning')) {
  alert.innerHTML = `<h1>AVISO</h1> <p>Tenga cuidado</p>`;
  alert.classList.add('warning');
}
