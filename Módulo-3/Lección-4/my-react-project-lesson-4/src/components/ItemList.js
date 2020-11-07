import React from 'react';
import Item from './Item';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
  {
    name: 'Bocadillo de chorizo',
    quantity: 4,
    category: 'Almuerzo',
    price: 8,
    description: 'Bocadillo premium de chorizo Pamplona',
  },
];

let emptyArray = [];

let priceItems = [];
priceItems = arrayOfItems.filter((itemPrice) => itemPrice.price < 10); //filter es como if

emptyArray = priceItems.map((itemInfo, i) => (
  //map es para recorrer
  <li key={i}>
    <Item
      name={itemInfo.name}
      description={itemInfo.description}
      quantity={itemInfo.quantity}
      category={itemInfo.category}
      price={itemInfo.price}
    />
  </li>
));

class ItemList extends React.Component {
  render() {
    return <ul className="item-list">{emptyArray}</ul>;
  }
}

export default ItemList;
