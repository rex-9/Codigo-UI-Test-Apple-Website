import Scroll from '../components/scroll/Scroll';
import Noti from '../components/elements/Noti';
import Nav from '../components/elements/Nav';
import Sticky from '../components/elements/Sticky';
import TV from '../components/elements/TV';
import QA from '../components/elements/QA';
import Cards from '../components/elements/Cards';
import About from '../components/elements/About';

const Main = () => (
  <div>
    <Noti />
    <Nav />
    <Sticky />
    <Scroll />
    <TV />
    <QA />
    <Cards />
    <About />
  </div>
);

export default Main;
