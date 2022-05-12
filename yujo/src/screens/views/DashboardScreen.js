import React, {useState} from "react";
import Header from "../../components/views/Header";
import '../styles/DashboardScreen.style.css';
import {useTranslation} from "react-i18next";
import LastSlasChart from "../../components/chartsData/LastSlasChart";
import SlasWithFeatureChart from "../../components/chartsData/SlasWithFeatureChart";
import {getStringFromConstantValue, slinkConfig} from "../../config";
import DistributionFeatureChart from "../../components/chartsData/DistributionFeatureChart";

function DashboardScreen(props) {
    const {t, i18n} = useTranslation();
    const [menuIndex, setMenuIndex] = useState(0);

    return (
        <>
            <Header isOwner />
            {!props.loadingCheck && (
                <div className="generalContainer">
                    <div className="menuContainer">
                        <div className="menu">
                            <div className="topMenuItem menuItem">{t('chart.leftMenuTitle')}</div>
                            <div className={(menuIndex === 0 ? 'menuItemSelected' : '') + ' menuItem'} onClick={() => setMenuIndex(0)}>{t('chart.leftMenuGeneralData')}</div>
                            <div className="menuSeparator" />
                            <div className={(menuIndex === 1 ? 'menuItemSelected' : '') + ' menuItem'} onClick={() => setMenuIndex(1)}>{t('chart.leftMenuServiceData')}</div>
                            <div className="menuSeparator" />
                            <div className={(menuIndex === 2 ? 'menuItemSelected' : '') + ' menuItem'} onClick={() => setMenuIndex(2)}>{t('chart.leftMenuExtraServiceData')}</div>
                            <div className="menuSeparator" />
                            <div className={(menuIndex === 3 ? 'menuItemSelected' : '') + ' menuItem'} onClick={() => setMenuIndex(3)}>{t('chart.leftMenuServiceSpaceData')}</div>
                            <div className="menuSeparator" />
                            <div className={(menuIndex === 4 ? 'menuItemSelected' : '') + ' menuItem'} onClick={() => setMenuIndex(4)}>{t('chart.leftMenuLicensesData')}</div>
                            <div className="menuSeparator" />
                            <div className={(menuIndex === 5 ? 'menuItemSelected' : '') + ' menuItem'} onClick={() => setMenuIndex(5)}>{t('chart.leftMenuRevisionReportsData')}</div>
                            <div className="menuSeparator" />
                            <div className={(menuIndex === 6 ? 'menuItemSelected' : '') + ' menuItem'} onClick={() => setMenuIndex(6)}>{t('chart.leftMenuBillingsData')}</div>
                            <div className="menuSeparator" />
                            <div className={(menuIndex === 7 ? 'menuItemSelected' : '') + ' bottomMenuItem menuItem'} onClick={() => setMenuIndex(7)}>{t('chart.leftMenuBillingMethodsData')}</div>
                        </div>
                    </div>
                    <div className="content">
                        {menuIndex === 0 && (
                            <>
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <LastSlasChart />
                                    </div>
                                </div>
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <DistributionFeatureChart title={t('chart.distributionServices')} feature="service" />
                                    </div>
                                    <div className="chartContainer">
                                        <DistributionFeatureChart title={t('chart.distributionExtraServices')} feature="extraService" />
                                    </div>
                                </div>
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <DistributionFeatureChart title={t('chart.distributionServiceSpaces')} feature="serviceSpace" />
                                    </div>
                                    <div className="chartContainer">
                                        <DistributionFeatureChart title={t('chart.distributionLicenses')} feature="license" />
                                    </div>
                                    <div className="chartContainer">
                                        <DistributionFeatureChart title={t('chart.distributionRevisionReports')} feature="revisionReport" />
                                    </div>
                                </div>
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <DistributionFeatureChart title={t('chart.distributionBillings')} feature="billing" />
                                    </div>
                                    <div className="chartContainer">
                                        <DistributionFeatureChart title={t('chart.distributionBillingMethods')} feature="billingMethod" />
                                    </div>
                                </div>
                            </>
                        )}
                        {menuIndex === 1 && slinkConfig.services.map(service => {
                            return (
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <SlasWithFeatureChart title={t('chart.lastSLAsWithService') + ' "' + service.name[i18n.language] + '"'} feature="service" id={service.id} />
                                    </div>
                                </div>
                            );
                        })}
                        {menuIndex === 2 && slinkConfig.extraServices.map(extraService => {
                            return (
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <SlasWithFeatureChart title={t('chart.lastSLAsWithExtraService') + ' "' + extraService.name[i18n.language] + '"'} feature="extraService" id={extraService.id} />
                                    </div>
                                </div>
                            );
                        })}
                        {menuIndex === 3 && slinkConfig.serviceSpaces.map(serviceSpace => {
                            return (
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <SlasWithFeatureChart title={t('chart.lastSLAsWithServiceSpace') + ' "' + serviceSpace.name[i18n.language] + ' (' + serviceSpace.startTime + '-' + serviceSpace.endTime + ')' + '"'} feature="serviceSpace" id={serviceSpace.id} />
                                    </div>
                                </div>
                            );
                        })}
                        {menuIndex === 4 && slinkConfig.licences.map(license => {
                            return (
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <SlasWithFeatureChart title={t('chart.lastSLAsWithLicense') + ' "' + license.name[i18n.language] + '"'} feature="license" id={license.id} />
                                    </div>
                                </div>
                            );
                        })}
                        {menuIndex === 5 && slinkConfig.revisionReports.map(revisionReport => {
                            return (
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <SlasWithFeatureChart title={t('chart.lastSLAsWithRevisionReport') + ' "' + getStringFromConstantValue(revisionReport.pricePeriodicity, t) + '"'} feature="revisionReport" id={revisionReport.id} />
                                    </div>
                                </div>
                            );
                        })}
                        {menuIndex === 6 && slinkConfig.billings.map(billing => {
                            return (
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <SlasWithFeatureChart title={t('chart.lastSLAsWithBilling') + ' "' + getStringFromConstantValue(billing.periodicity, t) + '"'} feature="billing" id={billing.id} />
                                    </div>
                                </div>
                            );
                        })}
                        {menuIndex === 7 && slinkConfig.billingMethods.map(billingMethod => {
                            return (
                                <div className="chartRow">
                                    <div className="chartContainer">
                                        <SlasWithFeatureChart title={t('chart.lastSLAsWithBillingMethod') + ' "' + billingMethod.name[i18n.language] + '"'} feature="billingMethod" id={billingMethod.id} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default DashboardScreen;
