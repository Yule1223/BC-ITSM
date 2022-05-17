import {useEffect, useState} from "react";
import {isMetaMaskConnected} from "../../Contract";
import {apiGetCustomer} from "../../API";
import DashboardScreen from "../views/DashboardScreen";
import {useNavigate} from "react-router-dom";
import {slinkConfig} from "../../config";

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
                const ownerAddress = slinkConfig.provider;
                if (ownerAddress !== customer.ethAddress) {
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
