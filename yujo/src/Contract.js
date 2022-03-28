import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "automaticRenewal",
                "type": "bool"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePeriodicity",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SlinkV1.Service",
                "name": "service",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePeriodicity",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SlinkV1.Service",
                "name": "extraService",
                "type": "tuple"
            },
            {
                "internalType": "string",
                "name": "serviceLevel",
                "type": "string"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "startTime",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "endTime",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePeriodicity",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SlinkV1.ServiceSpace",
                "name": "serviceSpace",
                "type": "tuple"
            },
            {
                "internalType": "string",
                "name": "license",
                "type": "string"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "pricePeriodicity",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SlinkV1.RevisionReport",
                "name": "revisionReport",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "periodicity",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SlinkV1.Billing",
                "name": "billing",
                "type": "tuple"
            },
            {
                "internalType": "uint256",
                "name": "billingMethod",
                "type": "uint256"
            }
        ],
        "name": "addSLA",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            }
        ],
        "name": "getSLA",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "customer",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "startDate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "automaticRenewal",
                        "type": "bool"
                    },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "pricePeriodicity",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct SlinkV1.Service",
                        "name": "service",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "description",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "pricePeriodicity",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct SlinkV1.Service",
                        "name": "extraService",
                        "type": "tuple"
                    },
                    {
                        "internalType": "string",
                        "name": "serviceLevel",
                        "type": "string"
                    },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "startTime",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "endTime",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "pricePeriodicity",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct SlinkV1.ServiceSpace",
                        "name": "serviceSpace",
                        "type": "tuple"
                    },
                    {
                        "internalType": "string",
                        "name": "license",
                        "type": "string"
                    },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "price",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "pricePeriodicity",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct SlinkV1.RevisionReport",
                        "name": "revisionReport",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "periodicity",
                                "type": "uint256"
                            }
                        ],
                        "internalType": "struct SlinkV1.Billing",
                        "name": "billing",
                        "type": "tuple"
                    },
                    {
                        "internalType": "uint256",
                        "name": "billingMethod",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct SlinkV1.SLA",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "provider",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = '0x82248cf479bcAB822d83F29276fc20A06EB88469';

const web3Infura = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/81180162079b4ba49d02599e949fff5a"));

const infuraContract = new web3Infura.eth.Contract(abi, contractAddress);

const isMetaMaskConnected = async () => {
    const metaMaskProvider = await detectEthereumProvider({mustBeMetaMask: true});
    return await metaMaskProvider.request({method: 'eth_accounts'});
}

const connectMetaMask = async () => {
    const metaMaskProvider = await detectEthereumProvider({mustBeMetaMask: true});

    if (metaMaskProvider) {
        try {
            return await metaMaskProvider.request({ method: 'eth_requestAccounts'});
        } catch(e) {
            return [];
        }
    } else {
        alert('Please install MetaMask!');
        return [];
    }
}

const loadMetaMaskContract = async () => {
    const metaMaskProvider = await detectEthereumProvider({mustBeMetaMask: true});

    if (metaMaskProvider) {
        const web3MetaMask = new Web3(window.ethereum);

        return new web3MetaMask.eth.Contract(abi, contractAddress);
    }
};

export {
    infuraContract,
    isMetaMaskConnected,
    connectMetaMask,
    loadMetaMaskContract
};
