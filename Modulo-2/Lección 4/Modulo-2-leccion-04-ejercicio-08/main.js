'use strict';

// Usamos una variable de ámbito local que se llama igual que la global
const secretLetter = 'y';
function mySecretLetter() {
  const secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "y"
console.log(mySecretLetter()); // devuelve "x"
