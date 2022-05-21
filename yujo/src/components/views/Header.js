import '../styles/Header.style.css';
import * as React from 'react';
import logo from '../../img/logo.svg';
import licencia from '../../img/licencia.png'
import WalletDialog from "./WalletDialog";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {languages} from "../../translations/translationConfig";
import {useMediaQuery} from 'react-responsive'

function Header(props) {
    const navigate = useNavigate();
    const handleOnEntitiesList = useCallback(() => navigate('/entitiesList', {replace: false}), [navigate]);
    const handleOnDashboard = useCallback(() => navigate('/dashboard', {replace: false}), [navigate]);
    const {t, i18n} = useTranslation();
    const isSmallScreen = useMediaQuery({query: '(min-width: 1500px)'})
    const isTinyScreen = useMediaQuery({query: '(min-width: 1000px)'})
    const notScreen = useMediaQuery({ query: '(min-width: 800px)'})
    const youAreKidding = useMediaQuery({ query: '(min-width: 770px)'})

    return (
        <nav className="navbar navbar-light bg-info fixed-top p-1 d-flex flex-row" style={{height: '8vh'}}>
            {notScreen &&
            <div>
                <a className="navbar-brand text-dark m-lg-3" href="/">
                    SLink
                </a>
                {isTinyScreen && <img src={licencia} className="d-inline-block align-top" alt=""/>}
                {isSmallScreen && <p className="d-inline fw-bold text-capitalize fs-5 m-lg-3">{t('knowUs.title')}</p>}
            </div>}
            <div className="container" style={{flex: 1}}>
                <div className="d-flex justify-content-around w-100">
                    {props.isOwner && (
                        <>
                            <div className="d-flex justify-content-center align-items-center">
                                <Button startIcon={<FormatListBulletedIcon/>} variant='contained' color='info'
                                        onClick={handleOnEntitiesList}>
                                    {t('entitiesList.title')}
                                </Button>
                            </div>
                            {youAreKidding &&
                            <div className="d-flex justify-content-center align-items-center">
                                <Button startIcon={<DashboardIcon/>} variant='contained' color='warning'
                                        onClick={handleOnDashboard}>
                                    {t('chart.title')}
                                </Button>
                            </div>}
                        </>
                    )}
                    <WalletDialog/>
                    {isTinyScreen &&
                    <FormControl>
                        <InputLabel
                            id="demo-simple-select-label">{t('footer.languages.selectLanguageTitle')}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={i18n.language}
                            label={t('footer.languages.selectLanguageTitle')}
                            onChange={(event) => i18n.changeLanguage(event.target.value)}
                        >
                            {languages.map(language => <MenuItem
                                value={language}>{t('footer.languages.' + language)}</MenuItem>)}
                        </Select>
                    </FormControl>}
                </div>
            </div>
        </nav>
    );
}

export default Header;
