import React from 'react';
//Mostrar una imagen aleatoria de un gato usando la web de lorempixel, y que además será un enlace a una página.

class RandomCat extends React.Component {
  render() {
    return (
      <a href="http://lorempixel.com">
        <img src="http://lorempixel.com/400/200/cats/" alt="Random cat" />
      </a>
    );
  }
}

export default RandomCat;
