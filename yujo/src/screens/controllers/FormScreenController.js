import FormScreen from "../views/FormScreen";
import {Web3ReactProvider} from "@web3-react/core";
import Web3 from 'web3'
import {slinkConfig} from "../../config";
import {useState} from "react";

function getLibrary(provider) {
    return new Web3(provider)
}

function FormScreenController() {
    const [customerDNI, setCustomerDNI] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [customerSurname, setCustomerSurname] = useState('');
    const [customerEmail, setCustomerEmail] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerCity, setCustomerCity] = useState('');
    const [customerProvince, setCustomerProvince] = useState('');

    //TODO Falta implementación de índice de país y de género
    //const [customerCountry, setCustomerCountry] = useState(-1);
    //const [customerGender, setCustomerGender] = useState(-1);

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

    return <Web3ReactProvider getLibrary={getLibrary}>
        <FormScreen
            customerDNI={customerDNI}
            onCustomerDNIChange={setCustomerDNI}

            customerName={customerName}
            onCustomerNameChange={setCustomerName}

            customerSurname={customerSurname}
            onCustomerSurnameChange={setCustomerSurname}

            customerEmail={customerEmail}
            onCustomerEmailChange={setCustomerEmail}

            customerPhone={customerPhone}
            onCustomerPhoneChange={setCustomerPhone}

            customerCity={customerCity}
            onCustomerCityChange={setCustomerCity}

            customerProvince={customerProvince}
            onCustomerProvinceChange={setCustomerProvince}

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
            onServiceSpaceSelected={(index) => setServiceSpaceIndex(index)}

            services={slinkConfig.services}
            serviceIndex={serviceIndex}
            onServiceSelected={(index) => setServiceIndex(index)}

            extraServices={slinkConfig.extraServices}
            extraServiceIndex={extraServiceIndex}
            onExtraServiceSelected={(index) => setExtraServiceIndex(index)}

            licenses={slinkConfig.licences}
            licenseIndex={licenseIndex}
            onLicenseSelected={(index) => setLicenseIndex(index)}

            serviceLevels={slinkConfig.serviceLeves}

            revisionReports={slinkConfig.revisionReports}
            revisionReportIndex={revisionReportIndex}
            onRevisionReportSelected={(index) => setRevisionReportIndex(index)}

            billings={slinkConfig.billings}
            billingIndex={billingIndex}
            onBillingSelected={(index) => setBillingIndex(index)}

            billingMethods={slinkConfig.billingMethods}
            billingMethodIndex={billingMethodIndex}
            onBillingMethodSelected={(index) => setBillingMethodIndex(index)}
        />
    </Web3ReactProvider>;
}

export default FormScreenController;
