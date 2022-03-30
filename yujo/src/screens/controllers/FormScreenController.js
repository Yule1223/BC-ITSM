import FormScreen from "../views/FormScreen";
import {Web3ReactProvider} from "@web3-react/core";
import Web3 from 'web3'
import {constantsValues, slinkConfig} from "../../config";
import {useEffect, useState} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import {isMetaMaskConnected, loadMetaMaskContract} from "../../Contract";
import {apiCreateCompany, apiCreateCustomer, apiCreateSLA, apiGetCustomer, apiGetProvider} from "../../API";
import * as React from "react";

function getLibrary(provider) {
    return new Web3(provider)
}

function FormScreenController() {
    const [customer, setCustomer] = useState();
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
                const ownerAddress = await apiGetProvider();
                setIsOwner(ownerAddress.data === customer.ethAddress);
            };

            checkIfIsOwner();
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

    if (serviceIndex !== -1) {
        price += getPriceFromPeriodicity(slinkConfig.services[serviceIndex].price, slinkConfig.services[serviceIndex].pricePeriodicity);
    }

    if (extraServiceIndex !== -1) {
        price += getPriceFromPeriodicity(slinkConfig.extraServices[extraServiceIndex].price, slinkConfig.extraServices[extraServiceIndex].pricePeriodicity);
    }

    if (serviceSpaceIndex !== -1) {
        price += getPriceFromPeriodicity(slinkConfig.serviceSpaces[serviceSpaceIndex].price, slinkConfig.serviceSpaces[serviceSpaceIndex].pricePeriodicity);
    }

    if (revisionReportIndex !== -1) {
        price += getPriceFromPeriodicity(slinkConfig.revisionReports[revisionReportIndex].price, slinkConfig.revisionReports[revisionReportIndex].pricePeriodicity);
    }

    const onSendPress = async () => {
        /*
        const metaMaskProvider = await detectEthereumProvider();

        if (!metaMaskProvider) {
            alert('Please install MetaMask!');
            return;
        }

        const web3 = new Web3(window.ethereum);
        const ethAddress = (await web3.eth.getAccounts())[0];
        const slaId = Math.floor(new Date().getTime() / 1000);
        console.log(slaId);

        const responseFromCustomerCreation = await apiCreateCustomer({ethAddress: ethAddress, dni: customerDNI, name: customerName, surname: customerSurname, email: customerEmail, phone: customerPhone, province: customerProvince, city: customerCity});
        if (responseFromCustomerCreation.status !== 200) alert(responseFromCustomerCreation.statusText);

        const responseFromCompanyCreation = await apiCreateCompany({cif: customerBusinessCIF, name: customerBusinessName, address: customerBusinessAddress});
        if (responseFromCompanyCreation.status !== 200) alert(responseFromCompanyCreation.statusText);

        const responseFromSLACreation = await apiCreateSLA({id: slaId, ethAddress: ethAddress, cif: customerBusinessCIF, price: price});
        if (responseFromSLACreation.status !== 200) alert(responseFromSLACreation.statusText);

        const contract = await loadMetaMaskContract();
        contract.methods.addSLA(
            slaId,
            startDate.getTime(),
            automaticRenewal,
            [`${slinkConfig.services[serviceIndex].name}`, `${slinkConfig.services[serviceIndex].description}`, slinkConfig.services[serviceIndex].price, slinkConfig.services[serviceIndex].pricePeriodicity],
            [`${slinkConfig.extraServices[extraServiceIndex].name}`, `${slinkConfig.extraServices[extraServiceIndex].description}`, slinkConfig.extraServices[extraServiceIndex].price, slinkConfig.extraServices[extraServiceIndex].pricePeriodicity],
            `${slinkConfig.serviceLeves}`,
            [`${slinkConfig.serviceSpaces[serviceSpaceIndex].name}`, `${slinkConfig.serviceSpaces[serviceSpaceIndex].startTime}`, `${slinkConfig.serviceSpaces[serviceSpaceIndex].endTime}`, slinkConfig.serviceSpaces[serviceSpaceIndex].price, slinkConfig.serviceSpaces[serviceSpaceIndex].pricePeriodicity],
            `${slinkConfig.licences[licenseIndex]}`,
            [`${slinkConfig.revisionReports[revisionReportIndex].name}`, slinkConfig.revisionReports[revisionReportIndex].price, slinkConfig.revisionReports[revisionReportIndex].pricePeriodicity],
            [`${slinkConfig.billings[billingIndex].name}`, slinkConfig.billings[billingIndex].periodicity],
            billingMethodIndex,
        ).send({from: ethAddress}, (error, result) => {
            if (error) {
                alert(error);
                console.log(error);
            }
            else {
                alert('SLA con id: ' + slaId + '\nTransacción con hash: ' + result);
                console.log('SLA con id: ' + slaId + '\nTransacción con hash: ' + result);
            }
        });*/
    };

    return <Web3ReactProvider getLibrary={getLibrary}>
        <FormScreen
            customer={customer}
            isOwner={isOwner}

            loadingCheck={loadingCheck}

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

            serviceSpaces={slinkConfig.serviceSpaces}
            serviceSpaceIndex={serviceSpaceIndex}
            onServiceSpaceSelected={(index) => setServiceSpaceIndex(Number(index))}

            services={slinkConfig.services}
            serviceIndex={serviceIndex}
            onServiceSelected={(index) => setServiceIndex(Number(index))}

            extraServices={slinkConfig.extraServices}
            extraServiceIndex={extraServiceIndex}
            onExtraServiceSelected={(index) => setExtraServiceIndex(Number(index))}

            licenses={slinkConfig.licences}
            licenseIndex={licenseIndex}
            onLicenseSelected={(index) => setLicenseIndex(Number(index))}

            serviceLevels={slinkConfig.serviceLeves}

            revisionReports={slinkConfig.revisionReports}
            revisionReportIndex={revisionReportIndex}
            onRevisionReportSelected={(index) => setRevisionReportIndex(Number(index))}

            billings={slinkConfig.billings}
            billingIndex={billingIndex}
            onBillingSelected={(index) => setBillingIndex(Number(index))}

            billingMethods={slinkConfig.billingMethods}
            billingMethodIndex={billingMethodIndex}
            onBillingMethodSelected={(index) => setBillingMethodIndex(Number(index))}

            price={price}

            onSendPress={onSendPress}
        />
    </Web3ReactProvider>;
}

export default FormScreenController;
