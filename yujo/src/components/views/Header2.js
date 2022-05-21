import '../styles/Header.style.css';
import * as React from 'react';
import logo from '../../img/logo.svg';
import {useTranslation} from "react-i18next";
import licencia from "../../img/licencia.png";
import {useMediaQuery} from 'react-responsive'

function Header2(props) {
    const {t} = useTranslation();
    const youAreKidding = useMediaQuery({ query: '(min-width: 770px)'})

    return (
        <nav className="navbar navbar-light bg-info fixed-top p-1" style={{height: '60px'}}>
            <div>
                <a className="navbar-brand text-dark m-lg-3" href="/">SLink</a>
                <img src={licencia} className="d-inline-block align-top" alt=""/>
                {youAreKidding &&
                <p className="d-inline fw-bold text-capitalize fs-5 m-lg-3">{t('knowUs.title')}</p>}
            </div>

        </nav>
    );
}

export default Header2;
