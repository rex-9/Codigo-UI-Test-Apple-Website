import './Cards.scss';
import apple from '../../assets/apple-brown.svg';
import one from '../../assets/one.png';
import music from '../../assets/music.png';
import hdtv from '../../assets/hdtv.png';
import severance from '../../assets/severance.png';

const Cards = () => (
  <>
    <div className="cards">
      <div className="hCard">
        <img src={one} alt={one} />
        <header>
          <img src={apple} alt={apple} />
          One
          <br />
          Bundle Apple TV+ with
          <br />
          up to five other great services.
          <br />
          And enjoy more for less.
          <br />
          <button type="button">Try Apple One free*</button>
          <br />
          <a href="https://www.apple.com/apple-one/">Learn More &gt;</a>
        </header>
      </div>
      <div className="hCard">
        <header style={{ textAlign: 'start', paddingRight: '50px' }}>
          The Apple Music
          <br />
          Student Plan comes
          <br />
          with Apple TV+ for free.3
          <br />
          <button type="button">Try Apple One free*</button>
        </header>
        <img src={music} alt={music} />
      </div>
    </div>
    <div className="cards">
      <div className="vCard">
        <header>
          <img src={apple} alt={apple} />
          tv 4k
          <br />
          A higher definition of TV.
          <br />
          <button type="button">Try Apple One free*</button>
          <br />
          <a href="https://www.apple.com/apple-one/">Learn More &gt;</a>
        </header>
        <img src={hdtv} alt={hdtv} />
      </div>
      <div className="vCard">
        <header>
          AirPlay
          <br />
          Bring Apple TV+ to
          <br />
          a screen near you.
          <br />
          <button type="button">Try Apple One free*</button>
          <br />
          <a href="https://www.apple.com/apple-one/">Learn More &gt;</a>
        </header>
        <img src={severance} alt={severance} />
      </div>
    </div>
  </>
);

export default Cards;
