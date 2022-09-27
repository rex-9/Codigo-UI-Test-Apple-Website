import apple from '../../assets/apple.svg';
import search from '../../assets/search.svg';
import bag from '../../assets/bag.png';
import './Nav.scss';
import { navItems } from '../../data';

const Nav = () => (
  <>
    <div className="nav">
      <img height={20} src={apple} alt="apple" />
      {
        navItems.map((item) => <span key={item}>{item}</span>)
      }
      <img height={20} src={search} alt="search" />
      <img height={20} src={bag} alt="bag" />
    </div>
  </>
);

export default Nav;
