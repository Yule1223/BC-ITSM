import {useEffect, useState} from "react";
import {
    apiCreateCompany,
    apiCreateCustomer, apiCreateSLA,
    apiDeleteCompany,
    apiDeleteCustomer, apiDeleteSLA,
    apiGetCompanies,
    apiGetCustomer,
    apiGetCustomers,
    apiGetSLAs, apiUpdateCompany,
    apiUpdateCustomer, apiUpdateSLA
} from "../../API";
import EntitiesListScreen from "../views/EntitiesListScreen";
import {COMPANY_ENTITY, CUSTOMER_ENTITY, SLA_ENTITY} from "../../config";
import * as React from "react";

function EntitiesListScreenController() {
    const [tabIndex, setTabIndex] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [slas, setSLAs] = useState([]);
    const [customerSelected, setCustomerSelected] = useState(-1);
    const [companySelected, setCompanySelected] = useState(-1);
    const [slaSelected, setSLASelected] = useState(-1);

    useEffect(() => {
        const getData = async () => {
            setCustomers((await apiGetCustomers()).data);
            setCompanies((await apiGetCompanies()).data);
            setSLAs((await apiGetSLAs()).data);
        };
        getData();
    }, []);

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
