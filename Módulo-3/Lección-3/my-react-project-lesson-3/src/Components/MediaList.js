import React from 'react';
import MediaCard from './MediaCard';

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-card">
        <h1>Personaliza Cards</h1>
        <ul className="section-cards_list">
          <li>
            <MediaCard name="Itziar" city="Ibiza" country="España" />
          </li>
          <li>
            <MediaCard name="Yamira" city="Alicante" country="España" />
          </li>
          <li>
            <MediaCard name="Mari" city="Campo de Criptana" country="España" />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;
