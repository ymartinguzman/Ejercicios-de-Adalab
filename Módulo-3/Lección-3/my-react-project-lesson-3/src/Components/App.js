import React from 'react';
import RandomCat from './RandomCat';
// eslint-disable-next-line
import MediaCard from './MediaCard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MediaCard />
        <RandomCat />
      </div>
    );
  }
}

export default App;
