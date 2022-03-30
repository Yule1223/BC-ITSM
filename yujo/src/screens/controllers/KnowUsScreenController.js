import KnowUsScreen from "../views/KnowUsScreen";
import {useEffect, useState} from "react";
import {isMetaMaskConnected} from "../../Contract";
import {apiGetCustomer, apiGetProvider} from "../../API";

function KnowUsScreenController() {
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

    return <KnowUsScreen isOwner={isOwner} />;
}

export default KnowUsScreenController;
