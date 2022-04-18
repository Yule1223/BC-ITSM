import '../styles/PolicyScreen.style.css';
import Header from "../../components/views/Header";
import React from "react";
import {strings} from "../../strings";
import {useTranslation} from "react-i18next";

function PolicyScreen() {
    const { t } = useTranslation();

    return (
        <div>
            <Header/>
            <div className="w-75 m-lg-auto">
                <h2 className="text-center">{t('policyNotice.title')}</h2>
                <h3 className="text-center">{t('policyNotice.subTitle1')}</h3>
                <p>{t('policyNotice.legalNotice1')}
                    <br/>{t('policyNotice.legalNotice2')}
                    <br/>{t('policyNotice.legalNotice3')}
                </p>
                <h3 className="text-center">{t('policyNotice.subTitle2')}</h3>
                <p>{t('policyNotice.privacy1')}</p>
                <h5 className="d-inline">{t('policyNotice.privacy2')}</h5>
                <p className="d-inline">{t('policyNotice.privacy3')}</p>
            </div>
        </div>
    )
}

export default PolicyScreen;
