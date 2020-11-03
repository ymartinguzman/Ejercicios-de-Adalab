//importar componentes
import React from 'react';
import CatList from './CatList';

//clase ppal donde van a ir todos los componentes
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CatList />
      </div>
    );
  }
}

export default App;
//exportar la classe para conectar con los componentes
