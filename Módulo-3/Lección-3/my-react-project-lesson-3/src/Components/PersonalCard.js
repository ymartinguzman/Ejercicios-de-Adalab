//importar la carpeta
import React from 'react';
import '../stylesheets/App.scss';
//Pintar una tarjeta social para un usuario

class PersonalCard extends React.Component {
  render() {
    return (
      <div className="Container">
        <header className="Card-header">
          <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.date}</p>
          </div>
        </header>
        <main>
          <p>{this.props.city}</p>
          <p>{this.props.country}</p>
        </main>
      </div>
    );
  }
}

export default PersonalCard;
