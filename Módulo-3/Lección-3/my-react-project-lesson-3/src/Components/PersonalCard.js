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
const PersonalCard = (props) => {
  return (
    <div className="Container">
      <header className="Card-header">
        <div>
          <h1>{props.name}</h1>
          <p>{props.date}</p>
        </div>
      </header>
      <main>
        <p>{props.city}</p>
        <p>{props.country}</p>
      </main>
    </div>
  );
};

export default PersonalCard;
