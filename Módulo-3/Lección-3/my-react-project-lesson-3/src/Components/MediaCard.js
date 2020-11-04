//importar la carpeta
import React from 'react';
import '../App.scss';

//Pintar una tarjeta social para un usuario

class MediaCard extends React.Component {
  render() {
    return (
      <div className="Container-personal">
        <header className="Card-header">
          <div>
            <img
              src={this.props.photo}
              width={this.props.width}
              height={this.props.height}
            ></img>
            <h2>{this.props.name}</h2>
            <p>{this.props.date}</p>
          </div>
        </header>
        <main>
          <p>{this.props.text}</p>
          <p>{this.props.heart}</p>
        </main>
      </div>
    );
  }
}

export default MediaCard;
