import FormScreen from "../views/FormScreen";
import {Web3ReactProvider} from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider) {
    return new Web3(provider)
}

function FormScreenController() {
    return <Web3ReactProvider getLibrary={getLibrary}>
        <FormScreen/>
    </Web3ReactProvider>;
}

export default FormScreenController;
