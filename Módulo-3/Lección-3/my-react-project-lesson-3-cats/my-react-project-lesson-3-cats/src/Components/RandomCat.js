import React from 'react';
//Mostrar una imagen aleatoria de un gato usando la web de lorempixel, y que además será un enlace a una página.

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    const width = this.props.width;
    return (
      <a href="http://lorempixel.com">
        <img
          src={`http://lorempixel.com/${width}/${this.props.height}/cats/${randomCat}`}
          alt="Random cat"
        />
      </a>
    );
  }
}

export default RandomCat;
