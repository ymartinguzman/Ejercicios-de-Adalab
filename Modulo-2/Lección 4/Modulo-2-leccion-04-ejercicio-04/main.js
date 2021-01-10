'use strict';

const result = document.querySelector('.paragraph');

function price(a) {
  const iva = a * 0.21;
  const withoutIva = a - iva;
  const total = withoutIva + iva;

  result.innerHTML = `El precio sin IVA: ${withoutIva}, IVA: ${iva} y Total: ${total}`;
  console.log(iva);
}
price(25);
