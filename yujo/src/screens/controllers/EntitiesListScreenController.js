import {useCallback, useEffect, useState} from "react";
import {
    apiCreateCompany,
    apiCreateCustomer, apiCreateSLA,
    apiDeleteCompany,
    apiDeleteCustomer, apiDeleteSLA,
    apiGetCompanies,
    apiGetCustomer,
    apiGetCustomers, apiGetProvider,
    apiGetSLAs, apiUpdateCompany,
    apiUpdateCustomer, apiUpdateSLA
} from "../../API";
import EntitiesListScreen from "../views/EntitiesListScreen";
import {COMPANY_ENTITY, CUSTOMER_ENTITY, SLA_ENTITY} from "../../config";
import * as React from "react";
import {isMetaMaskConnected} from "../../Contract";
import {useNavigate} from "react-router-dom";

function EntitiesListScreenController() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState();
    const [loadingCheck, setLoadingCheck] = useState(true);

    const [tabIndex, setTabIndex] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [slas, setSLAs] = useState([]);
    const [customerSelected, setCustomerSelected] = useState(-1);
    const [companySelected, setCompanySelected] = useState(-1);
    const [slaSelected, setSLASelected] = useState(-1);


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
                if (ownerAddress.data !== customer.ethAddress) {
                    navigate('/', {replace: true});
                } else {
                    setLoadingCheck(false);
                }
            };

            checkIfIsOwner();
        }
    }, [customer]);

    useEffect(() => {
        if (!loadingCheck) {
            const getData = async () => {
                setCustomers((await apiGetCustomers()).data);
                setCompanies((await apiGetCompanies()).data);
                setSLAs((await apiGetSLAs()).data);
            };
            getData();
        }
    }, [loadingCheck]);

    const onCreateCustomer = async (customer) => {
        await apiCreateCustomer(customer);
        const _customers = [...customers];
        _customers.push(customer);
        setCustomers(_customers);
    };

    const onUpdateCustomer = async (customer) => {
        if (customer) {
            await apiUpdateCustomer(customer);
            const _customers = [...customers];
            _customers[customerSelected] = customer;
            setCustomers(_customers);
        }
        setCustomerSelected(-1);
    };

    const onCreateCompany = async (company) => {
        await apiCreateCompany(company);
        const _companies = [...companies];
        _companies.push(company);
        setCompanies(_companies);
    };

    const onUpdateCompany = async (company) => {
        if (company) {
            await apiUpdateCompany(company);
            const _companies = [...companies];
            _companies[companySelected] = company;
            setCompanies(_companies);
        }
        setCompanySelected(-1);
    };

    const onCreateSLA = async (sla) => {
        await apiCreateSLA(sla);
        const _slas = [...slas];
        _slas.push(sla);
        setSLAs(_slas);
    };

    const onUpdateSLA = async (sla) => {
        console.log(sla);
        if (sla) {
            await apiUpdateSLA(sla);
            const _slas = [...slas];
            _slas[slaSelected] = sla;
            setSLAs(_slas);
        }
        setSLASelected(-1);
    };

    const onDeleteEntity = async (index) => {
        switch (tabIndex) {
            case CUSTOMER_ENTITY:
                await apiDeleteCustomer(customers[index].ethAddress);
                const _customers = [...customers];
                _customers.splice(index, 1);
                setCustomers(_customers);
                setSLAs((await apiGetSLAs()).data);
                break;
            case COMPANY_ENTITY:
                await apiDeleteCompany(companies[index].cif);
                const _companies = [...companies];
                _companies.splice(index, 1);
                setCompanies(_companies);
                setSLAs((await apiGetSLAs()).data);
                break;
            case SLA_ENTITY:
                await apiDeleteSLA(slas[index].id);
                const _slas = [...slas];
                _slas.splice(index, 1);
                setSLAs(_slas);
                break;
        }
    }

        return <EntitiesListScreen
            loadingCheck={loadingCheck}

            tabIndex={tabIndex}
            onTabIndexSelected={(index) => setTabIndex(index)}

            customers={customers}
            companies={companies}
            slas={slas}

            onCreateCustomer={onCreateCustomer}
            customerSelected={customerSelected}
            onCustomerPress={setCustomerSelected}
            onUpdateCustomer={onUpdateCustomer}

            onCreateCompany={onCreateCompany}
            companySelected={companySelected}
            onCompanyPress={setCompanySelected}
            onUpdateCompany={onUpdateCompany}

            onCreateSLA={onCreateSLA}
            slaSelected={slaSelected}
            onSLAPress={setSLASelected}
            onUpdateSLA={onUpdateSLA}

            onDeleteEntity={onDeleteEntity}
        />;
    }

export default EntitiesListScreenController;
