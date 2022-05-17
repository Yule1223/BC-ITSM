import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

const abi = [
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "billingId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "internalType": "struct Slink.Billing",
                "name": "billing",
                "type": "tuple"
            }
        ],
        "name": "addBilling",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "billingMethodId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "internalType": "struct Slink.BillingMethod",
                "name": "billingMethod",
                "type": "tuple"
            }
        ],
        "name": "addBillingMethod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "serviceId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    }
                ],
                "internalType": "struct Slink.Service",
                "name": "extraService",
                "type": "tuple"
            }
        ],
        "name": "addExtraService",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "licenseId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "internalType": "struct Slink.License",
                "name": "license",
                "type": "tuple"
            }
        ],
        "name": "addLicense",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "revisionReportId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    }
                ],
                "internalType": "struct Slink.RevisionReport",
                "name": "revisionReport",
                "type": "tuple"
            }
        ],
        "name": "addRevisionReport",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "serviceId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                    }
                ],
                "internalType": "struct Slink.Service",
                "name": "service",
                "type": "tuple"
            }
        ],
        "name": "addService",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "serviceSpaceId",
                        "type": "uint256"
                    },
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
                    }
                ],
                "internalType": "struct Slink.ServiceSpace",
                "name": "serviceSpace",
                "type": "tuple"
            }
        ],
        "name": "addServiceSpace",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
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
                        "internalType": "uint256",
                        "name": "service",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "extraService",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "serviceSpace",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "license",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "revisionReport",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "billing",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "billingMethod",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalPrice",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Slink.SLA",
                "name": "sla",
                "type": "tuple"
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
                "internalType": "string",
                "name": "_serviceLevel",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "BillingCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "BillingMethodCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "ExtraServiceCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "LicenseCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "RevisionReportCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "slaId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "customer",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "startDate",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "automaticRenewal",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "service",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "extraService",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "serviceSpace",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "license",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "revisionReport",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "billing",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "billingMethod",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalPrice",
                "type": "uint256"
            }
        ],
        "name": "SLACreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "name": "ServiceCreated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "startTime",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "endTime",
                "type": "string"
            }
        ],
        "name": "ServiceSpaceCreated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "billingMethods",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "billingMethodId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "billings",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "billingId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "extraServices",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "serviceId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "stateMutability": "view",
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
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
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
                        "internalType": "uint256",
                        "name": "service",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "extraService",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "serviceSpace",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "license",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "revisionReport",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "billing",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "billingMethod",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "totalPrice",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct Slink.SLA",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "licenses",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "licenseId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
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
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "revisionReports",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "revisionReportId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "serviceLevel",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "services",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "serviceId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "description",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "serviceSpaces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "serviceSpaceId",
                "type": "uint256"
            },
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
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const contractAddress = '0x03eeC2cc89624169951C03d2379fefBd5fc060BB';


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

const addMetaMaskAccountsChangedObserver = async (observer) => {
    const metaMaskProvider = await detectEthereumProvider({mustBeMetaMask: true});
    metaMaskProvider.on('accountsChanged', observer);
}

const loadMetaMaskContract = async () => {
    const metaMaskProvider = await detectEthereumProvider({mustBeMetaMask: true});

    if (metaMaskProvider) {
        const web3MetaMask = new Web3(window.ethereum);

        return new web3MetaMask.eth.Contract(abi, contractAddress);
    }
};

export {
    isMetaMaskConnected,
    connectMetaMask,
    addMetaMaskAccountsChangedObserver,
    loadMetaMaskContract
};
