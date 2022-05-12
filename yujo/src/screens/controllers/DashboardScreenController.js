import {useEffect, useState} from "react";
import {isMetaMaskConnected} from "../../Contract";
import {apiGetCustomer, apiGetProvider, apiGetSLAsByDateRange} from "../../API";
import {useTranslation} from "react-i18next";
import DashboardScreen from "../views/DashboardScreen";
import {useNavigate} from "react-router-dom";

function DashboardScreenController() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [loadingCheck, setLoadingCheck] = useState(true);

    useEffect(() => {
        const checkMetaMaskConnection = async () => {
            const ethAddresses = await isMetaMaskConnected();
            if (ethAddresses.length > 0) {
                try {
                    const customer = await apiGetCustomer(ethAddresses[0]);
                    setCustomer(customer.data);
                } catch (e) {
                    navigate('/', {replace: true});
                }
            }
        };
        checkMetaMaskConnection();
    }, []);

    useEffect(() => {
        if (customer) {
            const checkIfIsOwner = async () => {
                const ownerAddress = await apiGetProvider();
                if (ownerAddress.data !== customer.ethAddress) {
                    navigate('/', {replace: true});
                } else {
                    setLoadingCheck(false);
                }
            };

            checkIfIsOwner();
        }
    }, [customer]);

    return (
        <DashboardScreen loadingCheck={loadingCheck} />
    );
}

export default DashboardScreenController;
