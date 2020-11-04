//importar la carpeta
import React from 'react';
import '../stylesheets/App.scss';

//Pintar una tarjeta social para un usuario

class MediaCard extends React.Component {
  render() {
    return (
      <div className="Container-personal">
        <header className="Card-header">
          <div className="Card-title">
            <img
              className="Card-image"
              src={this.props.photo}
              width={this.props.width}
              height={this.props.height}
            ></img>

            <div className="Card-name">
              <h2>{this.props.name}</h2>
              <p>{this.props.date}</p>
            </div>
          </div>
        </header>
        <main>
          <p>{this.props.text}</p>
        </main>
        <footer className="Card-footer">
          <p>{this.props.num}</p>
          <p>{this.props.heart}</p>
        </footer>
      </div>
    );
  }
}

export default MediaCard;
