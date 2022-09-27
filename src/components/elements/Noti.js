import { useState } from 'react';
import './Noti.scss';

const Noti = () => {
  const [toggle, setToggle] = useState(true);
  const hide = {
    display: 'none',
  };
  const show = {
    display: 'flex',
  };
  const close = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="noti" style={toggle ? show : hide}>
        <p>Choose another country or region to see content specific to your location and shop online</p>
        <select>
          <option value="Korea" key="Korea">&#10004; Korea</option>
          <option value="Others" key="Others">Other Country</option>
        </select>
        <button className="continue" type="button">Continue</button>
        <button type="button" className="close" onClick={close}>&#x2715;</button>
      </div>
    </>
  );
};
export default Noti;
