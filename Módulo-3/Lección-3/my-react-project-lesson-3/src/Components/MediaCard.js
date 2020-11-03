//importar la carpeta
import React from 'react';
import '../App.scss';
//Pintar una tarjeta social para un usuario

//COMPONENTE DE CLASE
// class MediaCard extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//COMPONENTE FUNCIONAL
const MediaCard = (props) => {
  return (
    <div className="Container">
      <header className="Card-header">
        <img src={props.img} className="Card-image" alt="coming soon" />
        <div>
          <h1>{props.name}</h1>
          <p>{props.date}</p>
        </div>
      </header>
      <main>
        <p className="LoreIpsum">{props.text}</p>
        <p className="Heart">
          {props.likes} {props.heart}
        </p>
      </main>
    </div>
  );
};

export default MediaCard;
