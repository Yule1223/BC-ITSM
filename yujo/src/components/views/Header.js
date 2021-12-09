import '../styles/Header.style.css';
import logo from '../../img/logo.svg';

function eader() {
  return (
      <nav className="navbar navbar-light bg-info fixed-top p-1">
          <a className="navbar-brand text-dark" href="/">
              <img src={logo} width="30" height="30"
                   className="d-inline-block align-top" alt="" />Slink
          </a>
      </nav>
  );
}

export default Header;
