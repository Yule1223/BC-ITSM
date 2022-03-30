import '../styles/Header.style.css';
import * as React from 'react';
import logo from '../../img/logo.svg';
import WalletDialog from "./WalletDialog";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import {useTranslation} from "react-i18next";
import DashboardIcon from '@mui/icons-material/Dashboard';
import {useCallback} from "react";
import {useNavigate} from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();
    const handleOnDashboard = useCallback(() => navigate('/dashboard', {replace: false}), [navigate]);
    const { t } = useTranslation();
    return (
        <nav className="navbar navbar-light bg-info fixed-top p-1" style={{height: '60px'}}>
            <a className="navbar-brand text-dark" href="/">
                <img src={logo} width="30" height="30"
                     className="d-inline-block align-top" alt=""/>SLink
            </a>
            {props.isOwner && (
                <Button startIcon={<DashboardIcon />} variant='contained' color='warning' onClick={handleOnDashboard}>
                    {t('dashboard.dashboard')}
                </Button>
            )}
            <WalletDialog />
        </nav>
    );
}

export default Header;
