'use strict';

//TRANSFORM INTO ARROW FUNCTIONS

//Exercise 03
const result = document.querySelector('.paragraph');

const price = (a) => {
  const iva = a * 0.21;
  const withoutIva = a - iva;
  const total = withoutIva + iva;

  result.innerHTML = `El precio sin IVA: ${withoutIva}, IVA: ${iva} y Total: ${total}`;
};
price(25);

//another option
const newPrice = (a) => {
  const newIva = a * 0.21;
  const noIva = a - newIva;
  const totalPrice = noIva + newIva;

  const resultPrice = `Precio sin IVA: ${noIva}, IVA: ${newIva} y Total: ${totalPrice}`;
  return resultPrice;
};
//newPrice(25);

console.log(newPrice(25));
