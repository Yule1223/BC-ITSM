import 'bootstrap/dist/css/bootstrap.min.css';
import background_logo from '../../img/blockchain-background.svg';
import logo from '../../img/Slink-without-background.svg';
import '../styles/IndexScreen.style.css';
import Typewriter from "typewriter-effect";
import {Link, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useCallback} from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import GroupsIcon from '@mui/icons-material/Groups';
function IndexScreen() {
    const navigate = useNavigate();
    const handleOnForm = useCallback(() => navigate('/form', {replace: false}), [navigate]);
    const handleOnKnowUs = useCallback(() => navigate('/knowus', {replace: false}), [navigate]);
    const {t} = useTranslation();

    return (
        <div className="App bg-info">
            <section className="App-header pb-3">
                <img src={background_logo} className="App-logo-1" alt="logo"/>
                <img src={logo} className="App-logo-2" alt="logo"/>
                <div className="typed">
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true
                        }}
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(t('index.openYourSLANow1') + ' ' + t('index.openYourSLANow2'))
                                .pauseFor(300)
                                .deleteChars(t('index.openYourSLANow2').length)
                                .pauseFor(1000)
                                .typeString(t('index.openYourSLANow3'))
                                .start();
                        }}/></div>
                <div className="d-flex w-25 justify-content-between">
                    <Button startIcon={<BorderColorIcon />} variant='contained' className='btn-index text-dark' onClick={handleOnForm}>
                        {t('index.iWantIt')}
                    </Button>
                    <Button startIcon={<GroupsIcon />} variant='contained' className='btn-index text-dark' onClick={handleOnKnowUs}>
                        {t('index.knowUs')}
                    </Button>
                </div>
            </section>
        </div>
    );
}


export default IndexScreen;
