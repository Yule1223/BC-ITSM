import 'bootstrap/dist/css/bootstrap.min.css';
import background_logo from '../../img/blockchain-background.svg';
import logo from '../../img/Slink-without-background.svg';
import '../styles/IndexScreen.style.css';
import Typewriter from "typewriter-effect";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

function IndexScreen() {
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
                    <Link to="/form">
                        <button type="button" className="btn-index btn btn-light">{t('index.iWantIt')}</button>
                    </Link>
                    <Link to="/knowUs">
                        <button className="btn-index btn btn-light">{t('index.knowUs')}</button>
                    </Link>
                </div>
            </section>
        </div>
    );
}


export default IndexScreen;
