const axios = require('axios');

const url = 'http://localhost:2000';

const blockchainURL = url + '/bc';
const customersURL = url + '/customers';
const companiesURL = url + '/companies';
const slasURL = url + '/slas';
const contactRequestsURL = url + '/contactRequests';
const theGraphURL = url + '/theGraph';

// CRUD Customers
const apiCreateCustomer = async (customer) => {
    return await axios.post(`${customersURL}?ethAddress=${customer.ethAddress}&dni=${customer.dni}&name=${customer.name}&surname=${customer.surname}&gender=${customer.gender}&email=${customer.email}&phone=${customer.phone}&province=${customer.province}&city=${customer.city}&country=${customer.country}&company=${customer.company}`);
}

const apiGetCustomer = async (ethAddress) => {
    return await axios.get(`${customersURL}/${ethAddress}`);
}

const apiGetCustomers = async () => {
    return await axios.get(`${customersURL}`);
}

const apiUpdateCustomer = async (customer) => {
    return await axios.put(`${customersURL}/${customer.ethAddress}?dni=${customer.dni}&name=${customer.name}&surname=${customer.surname}&gender=${customer.gender}&email=${customer.email}&phone=${customer.phone}&province=${customer.province}&city=${customer.city}&country=${customer.country}&company=${customer.company}`);
}

const apiDeleteCustomer = async (ethAddress) => {
    return await axios.delete(`${customersURL}/${ethAddress}`);
}

// CRUD Companies
const apiCreateCompany = async (company) => {
    return await axios.post(`${companiesURL}?cif=${company.cif}&name=${company.name}&address=${company.address}`);
}

const apiGetCompany = async (cif) => {
    return await axios.get(`${companiesURL}/${cif}`);
}

const apiGetCompanies = async () => {
    return await axios.get(`${companiesURL}`);
}

const apiUpdateCompany = async (company) => {
    return await axios.put(`${companiesURL}/${company.cif}?name=${company.name}&address=${company.address}`);
}

const apiDeleteCompany = async (cif) => {
    return await axios.delete(`${companiesURL}/${cif}`);
}

//CRUD SLAs
const apiCreateSLA = async (sla) => {
    return await axios.post(`${slasURL}?id=${sla.id}&customer=${sla.customer}&company=${sla.company}&price=${sla.price}`);
}

const apiGetSLA = async (id) => {
    return await axios.get(`${slasURL}/${id}`);
}

const apiGetSLAs = async () => {
    return await axios.get(`${slasURL}`);
}

//CRUD Contact requests
const apiCreateContactRequest = async (contactRequest) => {
    return await axios.post(`${contactRequestsURL}?firstName=${contactRequest.firstName}&lastName=${contactRequest.lastName}&email=${contactRequest.email}&ethAddress=${contactRequest.ethAddress}&subject=${contactRequest.subject}&message=${contactRequest.message}`);
}

const apiGetContactRequests = async () => {
    return await axios.get(`${contactRequestsURL}`);
}

const apiDeleteContactRequest = async (id) => {
    return await axios.delete(`${contactRequestsURL}/${id}`);
}

//THE GRAPH
const apiGetSLAByID = async (id) => {
    return await axios.get(`${theGraphURL}/slas/${id}`);
}

const apiGetSLAsByDateRange = async (start, end) => {
    if (start && end) return await axios.get(`${theGraphURL}/slas?start=${start?.getTime()}&end=${end?.getTime()}`);
    else if (start) return await axios.get(`${theGraphURL}/slas?start=${start?.getTime()}`);
    else if (end) return await axios.get(`${theGraphURL}/slas?end=${end?.getTime()}`);
    else return await axios.get(`${theGraphURL}/slas`);
}

const apiGetSLAsWithFeatureBySLADateRange = async (feature, id, start, end) => {
    if (start && end) return await axios.get(`${theGraphURL}/${feature}s/${id}?start=${start?.getTime()}&end=${end?.getTime()}`);
    else if (start) return await axios.get(`${theGraphURL}/${feature}s/${id}?start=${start?.getTime()}`);
    else if (end) return await axios.get(`${theGraphURL}/${feature}s/${id}?end=${end?.getTime()}`);
    else return await axios.get(`${theGraphURL}/${feature}s/${id}`);
}

const apiGetFeaturesBySLADateRange = async (feature, start, end) => {
    if (start && end) return await axios.get(`${theGraphURL}/${feature}s/?start=${start?.getTime()}&end=${end?.getTime()}`);
    else if (start) return await axios.get(`${theGraphURL}/${feature}s/?start=${start?.getTime()}`);
    else if (end) return await axios.get(`${theGraphURL}/${feature}s/?end=${end?.getTime()}`);
    else return await axios.get(`${theGraphURL}/${feature}s/`);
}

export {
    // CRUD Customers
    apiCreateCustomer,
    apiGetCustomer,
    apiGetCustomers,
    apiUpdateCustomer,
    apiDeleteCustomer,

    // CRUD Companies
    apiCreateCompany,
    apiGetCompany,
    apiGetCompanies,
    apiUpdateCompany,
    apiDeleteCompany,

    // CRUD SLAs
    apiCreateSLA,
    apiGetSLA,
    apiGetSLAs,

    // CRUD Contact requests
    apiCreateContactRequest,
    apiGetContactRequests,
    apiDeleteContactRequest,

    //THE GRAPH
    apiGetSLAByID,
    apiGetSLAsByDateRange,
    apiGetSLAsWithFeatureBySLADateRange,
    apiGetFeaturesBySLADateRange,
};
