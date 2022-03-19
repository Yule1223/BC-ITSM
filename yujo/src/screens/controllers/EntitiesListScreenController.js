import {useEffect, useState} from "react";
import {
    deleteCompany,
    deleteCustomer, deleteSLA,
    getCompanies,
    getCustomer,
    getCustomers,
    getSLAs,
    updateCustomer
} from "../../API";
import EntitiesListScreen from "../views/EntitiesListScreen";
import {COMPANY_ENTITY, CUSTOMER_ENTITY, SLA_ENTITY} from "../../config";
import * as React from "react";

function EntitiesListScreenController() {
    const [tabIndex, setTabIndex] = useState(0);
    const [customers, setCustomers] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [slas, setSLAs] = useState([]);

    useEffect(() => {
        const getData = async () => {
            setCustomers((await getCustomers()).data);
            setCompanies((await getCompanies()).data);
            setSLAs((await getSLAs()).data);
        };
        getData();
    }, []);

    const onDeleteEntity = async (index) => {
        switch (tabIndex) {
            case CUSTOMER_ENTITY:
                await deleteCustomer(customers[index].ethAddress);
                const _customers = [...customers];
                _customers.splice(index, 1);
                setCustomers(_customers);
                setSLAs((await getSLAs()).data);
                break;
            case COMPANY_ENTITY:
                await deleteCompany(companies[index].cif);
                const _companies = [...companies];
                _companies.splice(index, 1);
                setCompanies(_companies);
                setSLAs((await getSLAs()).data);
                break;
            case SLA_ENTITY:
                await deleteSLA(slas[index].id);
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

            onDeleteEntity={onDeleteEntity}
        />;
    }

export default EntitiesListScreenController;
