import {useEffect, useState} from "react";
import {isMetaMaskConnected} from "../../Contract";
import {apiGetCustomer, apiGetProvider, apiGetSLAsByDateRange} from "../../API";
import {useTranslation} from "react-i18next";
import DashboardScreen from "../views/DashboardScreen";

function DashboardScreenController() {
    const [customer, setCustomer] = useState();
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        const checkMetaMaskConnection = async () => {
            const ethAddresses = await isMetaMaskConnected();
            if (ethAddresses.length > 0) {
                const customer = await apiGetCustomer(ethAddresses[0]);
                setCustomer(customer.data);
            }
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

    return (
        <DashboardScreen isOwner={isOwner} />
    );
}

export default DashboardScreenController;
