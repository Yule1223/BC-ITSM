import '../styles/Header.style.css';
import * as React from 'react';
import logo from '../../img/logo.svg';
import {useTranslation} from "react-i18next";
import licencia from "../../img/licencia.png";

function Header2(props) {
    const {t} = useTranslation();
    return (
        <nav className="navbar navbar-light bg-info fixed-top p-1" style={{height: '60px'}}>
            <div>
                <a className="navbar-brand text-dark" href="/">
                    <img src={logo} width="30" height="30"
                         className="d-inline-block align-top" alt=""/>SLink

                </a>
                <img src={licencia} className="d-inline-block align-top" alt=""/>
                <p className="d-inline fw-bold text-capitalize fs-5 m-lg-3">{t('knowUs.title')}</p>
            </div>

        </nav>
    );
}

export default Header2;
