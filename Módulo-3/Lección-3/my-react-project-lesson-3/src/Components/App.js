//importar componentes
import React from 'react';

// eslint-disable-next-line
import MediaCard from './MediaCard';
import photo from '../image.jpg';

//clase ppal donde van a ir todos los componentes
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard
          name="Yamira Martín"
          date="Domingo, 1 de noviembre de 2020"
          img={photo}
          text="Lorem fistrum ese pedazo de caballo blanco caballo negroorl amatomaa
            jarl diodeno diodeno. Por la gloria de mi madre tiene musho peligro
            diodeno pupita. No puedor me cago en tus muelas diodeno no te digo
            trigo por no llamarte Rodrigor no te digo trigo por no llamarte
            Rodrigor ese hombree a gramenawer a wan ese hombree. Está la cosa
            muy malar hasta luego Lucas condemor por la gloria de mi madre. Al
            ataquerl mamaar me cago en tus muelas pecador tiene musho peligro
            ese que llega la caidita."
          likes="37"
          heart="❤️"
        />
      </div>
    );
  }
}

export default App;
//exportar la classe para conectar con los componentes
