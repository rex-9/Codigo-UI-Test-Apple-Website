import {
  Animator, ScrollContainer, ScrollPage, batch, FadeIn, ZoomIn, ZoomOut, Move, Fade, MoveIn, MoveOut, Sticky,
} from 'react-scroll-motion';
import './Scroll.scss';
import tv from '../../assets/tv.png';
import amv from '../../assets/amv.mp4';
import { plans } from '../../data';

const Scroll = () => {
  const FadeUp = batch(FadeIn(), Move(), Sticky());

  return (
    <>
      {/* <div className="bg" /> //commented background image */}
      <div className="fullscreen-bg">
        <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
          <source src={amv} type="video/mp4" />
        </video>
      </div>
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={batch(MoveOut(0, -500))}>
            <div className="originals">
              <h1>
                All Apple Originals.
                <br />
                {' '}
                Only on Apple TV+.
                <br />
                <button type="button">Stream now</button>
              </h1>
              <p>
                Watch on the
                <img width={40} src={tv} alt="tv" />
                {' '}
                app
              </p>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(MoveIn(0, 500), FadeUp)}>
            <div className="lines">
              New Apple Originals every month.
              <br />
              <br />
              Stream on the Apple TV app on Apple
              <br />
              devices, smart TVs, consoles, or sticks.
              <br />
              <br />
              Share Apple TV+ with your family.
              <br />
              <br />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(MoveIn(0, 500), MoveOut(0, -500), FadeUp)}>
            <div className="plans">
              {
                plans.map((plan) => (
                  <div key={plan.h1} className="plan">
                    <h2>{plan.h2}</h2>
                    <h1>{plan.h1}</h1>
                    <p>{plan.p}</p>
                    <button type="button">{plan.button}</button>
                  </div>
                ))
              }
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={ZoomIn()}>
            <div className="movies">
              <img src={tv} alt="tv" />
              <img src={tv} alt="tv" />
              <img src={tv} alt="tv" />
              <img src={tv} alt="tv" />
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator>
            <div className="slide1">
              <div className="blue" />
              <div className="blue" />
              <div className="blue" />
              <div className="blue" />
              <div className="blue" />
              <div className="blue" />
              <div className="blue" />
            </div>
            <div className="slide2">
              <div className="green" />
              <div className="green" />
              <div className="green" />
              <div className="green" />
              <div className="green" />
              <div className="green" />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default Scroll;
