import KnowUsScreen from "../views/KnowUsScreen";
import {useCallback, useEffect, useState} from "react";
import {isMetaMaskConnected} from "../../Contract";
import {apiCreateContactRequest, apiGetCustomer, apiGetProvider} from "../../API";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

function KnowUsScreenController() {
    const [contactRequestCreated, setContactRequestCreated] = useState(false);
    const [customer, setCustomer] = useState();
    const [isOwner, setIsOwner] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [ethAddress, setEthAddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

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

    const onSendPress = async () => {
        const responseFromContactRequestCreation = await apiCreateContactRequest({firstName: firstName, lastName: lastName, email: email, ethAddress: ethAddress, subject: subject, message: message});
        if (responseFromContactRequestCreation.status !== 200) alert(responseFromContactRequestCreation.statusText);
        else {
            setContactRequestCreated(true);
            setFirstName('');
            setLastName('');
            setEmail('');
            setEthAddress('');
            setSubject('');
            setMessage('');
        }
    };

    return <KnowUsScreen
        isOwner={isOwner}

        contactRequestCreated={contactRequestCreated}

        firstName={firstName}
        setFirstName={setFirstName}

        lastName={lastName}
        setLastName={setLastName}

        email={email}
        setEmail={setEmail}

        ethAddress={ethAddress}
        setEthAddress={setEthAddress}

        subject={subject}
        setSubject={setSubject}

        message={message}
        setMessage={setMessage}

        onSendPress={onSendPress}
    />;
}

export default KnowUsScreenController;
