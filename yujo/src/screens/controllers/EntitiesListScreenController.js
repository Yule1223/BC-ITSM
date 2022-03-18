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

function EntitiesListScreenController(props) {
    const [entities, setEntities] = useState([]);

    useEffect(() => {
        const getData = async () => {
            switch (props.entity) {
                case CUSTOMER_ENTITY:
                    setEntities((await getCustomers()).data);
                    break;
                case COMPANY_ENTITY:
                    setEntities((await getCompanies()).data);
                    break;
                case SLA_ENTITY:
                    setEntities((await getSLAs()).data);
                    break;
            }
        };
        getData();
    }, []);

    const onDeleteEntity = async (index) => {
        switch (props.entity) {
            case CUSTOMER_ENTITY:
                await deleteCustomer(entities[index].ethAddress);
                break;
            case COMPANY_ENTITY:
                await deleteCompany(entities[index].cif);
                break;
            case SLA_ENTITY:
                await deleteSLA(entities[index].id);
                break;
        }
        const _entities = [...entities];
        _entities.splice(index, 1);
        setEntities(_entities);
    }

        return <EntitiesListScreen entity={props.entity} entities={entities} onDeleteEntity={onDeleteEntity} />;
    }

export default EntitiesListScreenController;
