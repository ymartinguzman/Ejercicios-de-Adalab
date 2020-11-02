//importar la carpeta
import React from 'react';
import '../App.scss';
//Pintar una tarjeta social para un usuario

class MediaCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header className="Card-header">
          <img src={this.props.img} className="Card-image" alt="coming soon" />
          <div>
            <h1>{this.props.name}</h1>
            <p>{this.props.date}</p>
          </div>
        </header>
        <main>
          <p className="LoreIpsum">{this.props.text}</p>
          <p className="Heart">
            {this.props.likes} {this.props.heart}
          </p>
        </main>
      </div>
    );
  }
}

export default MediaCard;
