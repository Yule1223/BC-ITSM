import '../styles/Header.style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../../img/logo.svg';
import {Link} from "react-router-dom";

function Header() {
  return (
      <nav className="navbar navbar-light bg-info fixed-top p-1">
          <a className="navbar-brand text-dark" href="#">
              <img src={logo} width="30" height="30"
                   className="d-inline-block align-top" alt="" />Slink
          </a>
      </nav>
  );
}

export default Header;
