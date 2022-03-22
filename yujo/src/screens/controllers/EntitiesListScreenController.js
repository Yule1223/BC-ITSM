import {useEffect, useState} from "react";
import {
    apiCreateCustomer,
    apiDeleteCompany,
    apiDeleteCustomer, apiDeleteSLA,
    apiGetCompanies,
    apiGetCustomer,
    apiGetCustomers,
    apiGetSLAs,
    apiUpdateCustomer
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

    useEffect(() => {
        const getData = async () => {
            setCustomers((await apiGetCustomers()).data);
            setCompanies((await apiGetCompanies()).data);
            setSLAs((await apiGetSLAs()).data);
        };
        getData();
    }, []);

    const onCustomerPress = async (index) => {
        setCustomerSelected(index);
    }

    const onCreateCustomer = async (customer) => {
        await apiCreateCustomer(customer);
        const _customers = [...customers];
        _customers.push(customer);
        setCustomers(_customers);
    } ;

    const onUpdateCustomer = async (customer) => {
        if (customer) {
            await apiUpdateCustomer(customer);
            const _customers = [...customers];
            _customers[customerSelected] = customer;
            setCustomers(_customers);
        }
        setCustomerSelected(-1);
    } ;

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
            onCustomerPress={onCustomerPress}
            onUpdateCustomer={onUpdateCustomer}

            onDeleteEntity={onDeleteEntity}
        />;
    }

export default EntitiesListScreenController;
