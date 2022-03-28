import '../styles/Header.style.css';
import * as React from 'react';
import logo from '../../img/logo.svg';
import WalletDialog from "./WalletDialog";

function Header() {
    return (
        <nav className="navbar navbar-light bg-info fixed-top p-1" style={{height: '60px'}}>
            <a className="navbar-brand text-dark" href="/">
                <img src={logo} width="30" height="30"
                     className="d-inline-block align-top" alt=""/>SLink
            </a>
            <WalletDialog />
        </nav>
    );
}

export default Header;
