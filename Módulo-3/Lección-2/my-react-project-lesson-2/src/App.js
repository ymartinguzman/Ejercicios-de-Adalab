import photo from './image.jpg';
import './App.scss';
// eslint-disable-next-line
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const header = (
      <header className="Card-header">
        <img src={photo} className="Card-image" alt="coming soon" />
        <div>
          <h1>Yamira Martín</h1>
          <p>Domingo, 1 de noviembre de 2020</p>
        </div>
      </header>
    );
    const main = (
      <main>
        <p className="LoreIpsum">
          Lorem fistrum ese pedazo de caballo blanco caballo negroorl amatomaa
          jarl diodeno diodeno. Por la gloria de mi madre tiene musho peligro
          diodeno pupita. No puedor me cago en tus muelas diodeno no te digo
          trigo por no llamarte Rodrigor no te digo trigo por no llamarte
          Rodrigor ese hombree a gramenawer a wan ese hombree. Está la cosa muy
          malar hasta luego Lucas condemor por la gloria de mi madre. Al
          ataquerl mamaar me cago en tus muelas pecador tiene musho peligro ese
          que llega la caidita.
        </p>
        <p className="Heart">37 ❤️</p>
      </main>
    );

    const resultHtml = (
      <div className="Mediacard">
        {header}
        {main}
      </div>
    );
    return resultHtml;
  }
}

export default App;
