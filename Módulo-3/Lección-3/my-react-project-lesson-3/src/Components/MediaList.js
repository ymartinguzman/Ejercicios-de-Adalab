import React from 'react';
import MediaCard from './MediaCard';
import PersonalCard from './PersonalCard';

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-card">
        <h1>Personalize Cards</h1>
        <ul className="section-cards_list">
          <li>
            <PersonalCard
              name="Itziar"
              city="Ibiza"
              country="España"
              date="03.11.2020"
            />
          </li>
          <li>
            <PersonalCard
              name="Blume"
              city="Alicante"
              country="España"
              date="03.11.2020"
            />
          </li>
          <li>
            <PersonalCard
              name="Mari"
              city="Campo de Criptana"
              country="España"
              date="03.11.2020"
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
