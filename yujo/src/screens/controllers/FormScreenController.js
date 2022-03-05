import FormScreen from "../views/FormScreen";
import {Web3ReactProvider} from "@web3-react/core";
import Web3 from 'web3'
import {slinkConfig} from "../../config";
import {useState} from "react";

function getLibrary(provider) {
    return new Web3(provider)
}

function FormScreenController() {
    const [serviceSpaceIndex, setServiceSpaceIndex] = useState(-1);
    const [serviceIndex, setServiceIndex] = useState(-1);
    const [extraServiceIndex, setExtraServiceIndex] = useState(-1);
    const [licenseIndex, setLicenseIndex] = useState(-1);
    const [revisionReportIndex, setRevisionReportIndex] = useState(-1);
    const [billingIndex, setBillingIndex] = useState(-1);
    const [billingMethodIndex, setBillingMethodIndex] = useState(-1);

    return <Web3ReactProvider getLibrary={getLibrary}>
        <FormScreen
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
