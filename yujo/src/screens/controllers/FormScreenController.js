import FormScreen from "../views/FormScreen";
import {Web3ReactProvider} from "@web3-react/core";
import Web3 from 'web3'
import {constantsValues, slinkConfig} from "../../config";
import {useEffect, useState} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import {isMetaMaskConnected, loadMetaMaskContract} from "../../Contract";
import {
    apiCreateSLA,
    apiGetCompanies, apiGetCompany,
    apiGetCustomer,
} from "../../API";
import * as React from "react";
import {useTranslation} from "react-i18next";

function getLibrary(provider) {
    return new Web3(provider)
}

function FormScreenController() {
    const [customer, setCustomer] = useState();
    const [company, setCompany] = useState();
    const [companies, setCompanies] = useState([]);
    const [isOwner, setIsOwner] = useState(false);
    const [loadingCheck, setLoadingCheck] = useState(true);

    const [customerBusinessName, setCustomerBusinessName] = useState('');
    const [customerBusinessAddress, setCustomerBusinessAddress] = useState('');
    const [customerBusinessCIF, setCustomerBusinessCIF] = useState('');

    const [startDate, setStartDate] = useState(new Date());
    const [automaticRenewal, setAutomaticRenewal] = useState();
    const [serviceSpaceIndex, setServiceSpaceIndex] = useState(-1);
    const [serviceIndex, setServiceIndex] = useState(-1);
    const [extraServiceIndex, setExtraServiceIndex] = useState(-1);
    const [licenseIndex, setLicenseIndex] = useState(-1);
    const [revisionReportIndex, setRevisionReportIndex] = useState(-1);
    const [billingIndex, setBillingIndex] = useState(-1);
    const [billingMethodIndex, setBillingMethodIndex] = useState(-1);

    const [slaDto, setSlaDto] = useState();
    const [slaReceiptDto, setSlaReceiptDto] = useState();
    const { i18n } = useTranslation();

    const slinkConfigWithTranslate = JSON.parse(JSON.stringify(slinkConfig));

    slinkConfigWithTranslate.serviceSpaces.map(serviceSpace => serviceSpace.name = serviceSpace.name[i18n.language]);
    slinkConfigWithTranslate.services.map(service => {
        service.name = service.name[i18n.language];
        service.description = service.description[i18n.language];
    });
    slinkConfigWithTranslate.extraServices.map(service => {
        service.name = service.name[i18n.language];
        service.description = service.description[i18n.language];
    });
    slinkConfigWithTranslate.licences.map(license => license.name = license.name[i18n.language]);
    slinkConfigWithTranslate.serviceLeves = slinkConfig.serviceLeves[i18n.language];
    slinkConfigWithTranslate.billingMethods.map(billingMethod => billingMethod.name = billingMethod.name[i18n.language]);


    useEffect(() => {
        const checkMetaMaskConnection = async () => {
            const ethAddresses = await isMetaMaskConnected();
            if (ethAddresses.length > 0) {
                const customer = await apiGetCustomer(ethAddresses[0]);
                setCustomer(customer.data);
            }
            setLoadingCheck(false);
        };
        checkMetaMaskConnection();
    }, []);

    useEffect(() => {
        if (customer) {
            const checkIfIsOwner = async () => {
                const ownerAddress = slinkConfig.provider;
                setIsOwner(ownerAddress === customer.ethAddress);
            };
            const getCompany = async () => {
                const company = await apiGetCompany(customer.company);
                setCompany(company.data);
            };
            const getCompanies = async () => {
                const companies = await apiGetCompanies();
                setCompanies(companies.data);
            };

            checkIfIsOwner();
            getCompany();
            getCompanies();
        }
    }, [customer]);

    const getPriceFromPeriodicity = (price, periodicity) => {
        switch (periodicity) {
            case constantsValues.hourlyPeriodicity: return price * 8760;
            case constantsValues.dailyPeriodicity: return price * 365;
            case constantsValues.weeklyPeriodicity: return price * 52;
            case constantsValues.monthlyPeriodicity: return price * 12;
            case constantsValues.quarterlyPeriodicity: return price * 4;
            case constantsValues.semesterPeriodicity: return price * 2;

            case constantsValues.yearlyPeriodicity:
            default:
                return price;
        }
    };

    let price = 0;

    if (serviceIndex !== -1 && !slinkConfigWithTranslate.services[serviceIndex].priceSometimes) {
        price += getPriceFromPeriodicity(slinkConfigWithTranslate.services[serviceIndex].price, slinkConfigWithTranslate.services[serviceIndex].pricePeriodicity);
    }

    if (extraServiceIndex !== -1 && !slinkConfigWithTranslate.extraServices[extraServiceIndex].priceSometimes) {
        price += getPriceFromPeriodicity(slinkConfigWithTranslate.extraServices[extraServiceIndex].price, slinkConfigWithTranslate.extraServices[extraServiceIndex].pricePeriodicity);
    }

    if (serviceSpaceIndex !== -1 && !slinkConfigWithTranslate.serviceSpaces[serviceSpaceIndex].priceSometimes) {
        price += getPriceFromPeriodicity(slinkConfigWithTranslate.serviceSpaces[serviceSpaceIndex].price, slinkConfigWithTranslate.serviceSpaces[serviceSpaceIndex].pricePeriodicity);
    }

    if (revisionReportIndex !== -1 && !slinkConfigWithTranslate.revisionReports[revisionReportIndex].priceSometimes) {
        price += getPriceFromPeriodicity(slinkConfigWithTranslate.revisionReports[revisionReportIndex].price, slinkConfigWithTranslate.revisionReports[revisionReportIndex].pricePeriodicity);
    }

    const onSendPress = async () => {
        const metaMaskProvider = await detectEthereumProvider();

        if (!metaMaskProvider) {
            alert('Please install MetaMask!');
            return;
        }

        const slaId = Math.floor(new Date().getTime() / 1000);

        try {
            const responseFromSLACreation = await apiCreateSLA({
                id: slaId,
                customer: customer.ethAddress,
                company: company.cif,
                price: price
            });
            if (responseFromSLACreation.status !== 200) alert(responseFromSLACreation.statusText);

            const contract = await loadMetaMaskContract();
            const sla = {
                id: slaId,
                customer: customer.ethAddress,
                startDate: startDate.getTime(),
                automaticRenewal: automaticRenewal,
                service: slinkConfigWithTranslate.services[serviceIndex].id,
                extraService: slinkConfigWithTranslate.extraServices[extraServiceIndex].id,
                serviceSpace: slinkConfigWithTranslate.serviceSpaces[serviceSpaceIndex].id,
                license: slinkConfigWithTranslate.licences[licenseIndex].id,
                revisionReport: slinkConfigWithTranslate.revisionReports[revisionReportIndex].id,
                billing: slinkConfigWithTranslate.billings[billingIndex].id,
                billingMethod: slinkConfigWithTranslate.billingMethods[billingMethodIndex].id,
                totalPrice: price,
            };
            contract.methods.addSLA(sla).send({from: customer.ethAddress})
                .on('transactionHash', (hash) => {
                    setSlaDto({
                        id: slaId,
                        transactionHash: hash
                    });
                })
                .on('receipt', (receipt) => {
                    setSlaReceiptDto(receipt);
                })
                .on('error', (error) => {
                    alert(error);
                    console.log(error);
                });
        } catch (e) {
            alert(e);
            console.log(e);
        }
    };

    return <Web3ReactProvider getLibrary={getLibrary}>
        <FormScreen
            customer={customer}
            company={company}
            companies={companies}
            isOwner={isOwner}

            loadingCheck={loadingCheck}

            slaDto={slaDto}
            slaReceiptDto={slaReceiptDto}

            customerBusinessName={customerBusinessName}
            onCustomerBusinessNameChange={setCustomerBusinessName}

            customerBusinessAddress={customerBusinessAddress}
            onCustomerBusinessAddressChange={setCustomerBusinessAddress}

            customerBusinessCIF={customerBusinessCIF}
            onCustomerBusinessCIFChange={setCustomerBusinessCIF}

            startDate={startDate}
            onDateSelected={setStartDate}

            automaticRenewal={automaticRenewal}
            onAutomaticRenewalChange={setAutomaticRenewal}

            serviceSpaces={slinkConfigWithTranslate.serviceSpaces}
            serviceSpaceIndex={serviceSpaceIndex}
            onServiceSpaceSelected={(index) => setServiceSpaceIndex(Number(index))}

            services={slinkConfigWithTranslate.services}
            serviceIndex={serviceIndex}
            onServiceSelected={(index) => setServiceIndex(Number(index))}

            extraServices={slinkConfigWithTranslate.extraServices}
            extraServiceIndex={extraServiceIndex}
            onExtraServiceSelected={(index) => setExtraServiceIndex(Number(index))}

            licenses={slinkConfigWithTranslate.licences}
            licenseIndex={licenseIndex}
            onLicenseSelected={(index) => setLicenseIndex(Number(index))}

            serviceLevels={slinkConfigWithTranslate.serviceLeves}

            revisionReports={slinkConfigWithTranslate.revisionReports}
            revisionReportIndex={revisionReportIndex}
            onRevisionReportSelected={(index) => setRevisionReportIndex(Number(index))}

            billings={slinkConfigWithTranslate.billings}
            billingIndex={billingIndex}
            onBillingSelected={(index) => setBillingIndex(Number(index))}

            billingMethods={slinkConfigWithTranslate.billingMethods}
            billingMethodIndex={billingMethodIndex}
            onBillingMethodSelected={(index) => setBillingMethodIndex(Number(index))}

            price={price}

            onSendPress={onSendPress}
        />
    </Web3ReactProvider>;
}

export default FormScreenController;
