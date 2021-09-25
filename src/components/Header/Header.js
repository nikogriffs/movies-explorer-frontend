import Navigation from '../Navigation/Navigation.js'
import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={ logo } alt="Логотип сайта"/>
      <Navigation />
    </header>

  );
}

export default Header;