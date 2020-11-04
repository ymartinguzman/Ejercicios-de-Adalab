//importar componentes
import React from 'react';

// eslint-disable-next-line
import PersonalCard from './PersonalCard';
import MediaCard from './MediaCard';
import photo from '../image.jpg';
import MediaList from './MediaList';

//clase ppal donde van a ir todos los componentes
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard
          photo={photo}
          width="100"
          height="100"
          name="Yamira Martín"
          date="4 de noviembre de 2020"
          text="Bienvenido al Chiquito Ipsum, el generador de texto de relleno para tus diseños de antes de los dolores.Dale a Fistrum para que te salga ese pedaso de texto Chiquito en estado puro. Si te crees muy moderno dale a Latin que te lo pongo con cuarto y mitad de romanooo...Jarl!!"
          num={37}
          heart="❤"
        />
        <MediaList />
      </div>
    );
  }
}

export default App;
//exportar la classe para conectar con los componentes
