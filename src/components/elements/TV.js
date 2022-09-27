import './TV.scss';
import tv from '../../assets/tv.png';
import appleTv from '../../assets/apple-tv.png';
import iphone from '../../assets/iphone.png';
import ipad from '../../assets/ipad.png';
import mac from '../../assets/mac.png';
import airplay from '../../assets/airplay.png';

import samsung from '../../assets/samsung.png';
import lg from '../../assets/lg.png';
import vizio from '../../assets/vizio.png';
import sony from '../../assets/sony.png';
import xfinity from '../../assets/xfinity.png';
import roku from '../../assets/roku.png';
import firetv from '../../assets/firetv.png';
import googletv from '../../assets/googletv.png';
import ps from '../../assets/ps.png';
import xbox from '../../assets/xbox.png';

const devices = [appleTv, iphone, ipad, mac, airplay];
const supportedDevices = [samsung, lg, vizio, sony, xfinity, roku, firetv, googletv, ps, xbox];

const TV = () => (
  <>
    <div className="tv">
      <img height={105} src={tv} alt="TV" />
      <header>
        Watch Apple TV+ anywhere
        <br />
        on the Apple TV app.
      </header>
      <span>
        Find the Apple TV app on your favorite Apple devices.
        <br />
        Or watch Apple TV+ online at
        <a href="https://tv.apple.com/"> tv.apple.com</a>
      </span>
      <div className="devices">
        {
          devices.map((device) => <img key={device} src={device} alt={device} />)
        }
      </div>
      <p>
        See it on your smart TV
        <br />
        or streaming device.
      </p>
      <a href="https://support.apple.com/my-mm/guide/tvplus/welcome/web">Set up your device &gt;</a>
      <a href="https://www.apple.com/apple-tv-app/devices/">Explore compatible devices &gt;</a>
      <div className="devices">
        {
          supportedDevices.map((device) => <img key={device} src={device} alt={device} />)
        }
      </div>
    </div>
  </>
);

export default TV;
