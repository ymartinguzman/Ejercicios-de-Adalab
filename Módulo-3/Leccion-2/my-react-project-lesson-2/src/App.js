import photo from './image.jpg';
import './App.scss';

function render() {
  const titleName = 'Yamira Martín';
  const date = 'Domingo, 1 de noviembre de 2020';
  const resultHtml = (
    <div className="Mediacard">
      <header className="Card-header">
        <img src={photo} className="Card-image" alt="coming soon" />
        <div>
          <h1>{titleName}</h1>
          <p>{date}</p>
        </div>
      </header>
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
    </div>
  );
  return resultHtml;
}

export default render;
