const axios = require('axios');

const url = 'http://localhost:2000';

const customersURL = url + '/customers';
const companiesURL = url + '/companies';
const slasURL = url + '/slas';

// CRUD Customers
const createCustomer = async (customer) => {
    return await axios.post(`${customersURL}?ethAddress=${customer.ethAddress}&dni=${customer.dni}&name=${customer.name}&surname=${customer.surname}&gender=${customer.gender}&email=${customer.email}&phone=${customer.phone}&province=${customer.province}&city=${customer.city}&country=${customer.country}`);
}

const getCustomer = async (ethAddress) => {
    return await axios.get(`${customersURL}/${ethAddress}`);
}

const getCustomers = async () => {
    return await axios.get(`${customersURL}`);
}

const updateCustomer = async (customer) => {
    return await axios.put(`${customersURL}/${customer.ethAddress}?dni=${customer.dni}&name=${customer.name}&surname=${customer.surname}&gender=${customer.gender}&email=${customer.email}&phone=${customer.phone}&province=${customer.province}&city=${customer.city}&country=${customer.country}`);
}

const deleteCustomer = async (ethAddress) => {
    return await axios.delete(`${customersURL}/${ethAddress}`);
}

// CRUD Companies
const createCompany = async (company) => {
    return await axios.post(`${companiesURL}?cif=${company.cif}&name=${company.name}&address=${company.address}`);
}

const getCompany = async (cif) => {
    return await axios.get(`${companiesURL}/${cif}`);
}

const getCompanies = async () => {
    return await axios.get(`${companiesURL}`);
}

const updateCompany = async (company) => {
    return await axios.put(`${companiesURL}/${company.constructor}?name=${company.name}&address=${company.address}`);
}

const deleteCompany = async (cif) => {
    return await axios.delete(`${companiesURL}/${cif}`);
}

//CRUD SLAs
const createSLA = async (sla) => {
    return await axios.post(`${slasURL}?id=${sla.id}&customer=${sla.ethAddress}&company=${sla.cif}&price=${sla.price}`);
}

const getSLA = async (id) => {
    return await axios.get(`${slasURL}/${id}`);
}

const getSLAs = async () => {
    return await axios.get(`${slasURL}`);
}

const updateSLA = async (sla) => {
    return await axios.put(`${slasURL}/${sla.id}?customer=${sla.ethAddress}&company=${sla.cif}&price=${sla.price}`);
}

const deleteSLA = async (id) => {
    return await axios.delete(`${slasURL}/${id}`);
}

export {
    // CRUD Customers
    createCustomer,
    getCustomer,
    getCustomers,
    updateCustomer,
    deleteCustomer,

    // CRUD Companies
    createCompany,
    getCompany,
    getCompanies,
    updateCompany,
    deleteCompany,

    // CRUD SLAs
    createSLA,
    getSLA,
    getSLAs,
    updateSLA,
    deleteSLA
};
