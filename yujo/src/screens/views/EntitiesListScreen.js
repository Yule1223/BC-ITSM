import '../../globals.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import Header from "../../components/views/Header";
import {Container} from "@mui/material";
import CustomerFormDialog from "../../components/views/CustomerFormDialog";
import CompanyFormDialog from "../../components/views/CompanyFormDialog";
import SLAFormDialog from "../../components/views/SLAFormDialog";
import Footer from "../../components/views/Footer";
import {useTranslation} from "react-i18next";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

export default function EntitiesListScreen(props) {
    const { t } = useTranslation();

    const handleChange = (event, newValue) => {
        props.onTabIndexSelected(newValue);
    };

    const header = () => {
        switch (props.tabIndex) {
            case 0:
                return (
                    <TableRow>
                        <StyledTableCell>{t('customerForm.ethereumAddress')}</StyledTableCell>
                        <StyledTableCell align="right">{t('customerForm.dni')}</StyledTableCell>
                        <StyledTableCell align="right">{t('customerForm.lastName')}</StyledTableCell>
                        <StyledTableCell align="right">{t('customerForm.email')}</StyledTableCell>
                        <StyledTableCell align="right">{t('customerForm.phone')}</StyledTableCell>
                        <StyledTableCell align="right" />
                    </TableRow>
                );

            case 1:
                return (
                    <TableRow>
                        <StyledTableCell>{t('companyForm.cif')}</StyledTableCell>
                        <StyledTableCell align="right">{t('companyForm.name')}</StyledTableCell>
                        <StyledTableCell align="right">{t('companyForm.direction')}</StyledTableCell>
                        <StyledTableCell align="right" />
                    </TableRow>
                );

            case 2:
                return (
                    <TableRow>
                        <StyledTableCell>{t('slaForm.id')}</StyledTableCell>
                        <StyledTableCell align="right">{t('slaForm.customer')}</StyledTableCell>
                        <StyledTableCell align="right">{t('slaForm.company')}</StyledTableCell>
                        <StyledTableCell align="right">{t('slaForm.price')}</StyledTableCell>
                        <StyledTableCell align="right" />
                    </TableRow>
                );
        }
    };

    const renderRow = (index) => {
        switch (props.tabIndex) {
            case 0:
                const customer = props.customers[index];
                return (
                    <StyledTableRow key={index} role='button'>
                        <StyledTableCell component="th" scope="row" onClick={() => props.onCustomerPress(index)}>{customer.ethAddress}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onCustomerPress(index)}>{customer.dni}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onCustomerPress(index)}>{customer.surname}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onCustomerPress(index)}>{customer.email}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onCustomerPress(index)}>{customer.phone}</StyledTableCell>
                        <StyledTableCell align="right"><DeleteIcon color='error' onClick={() => props.onDeleteEntity(index)} /></StyledTableCell>
                    </StyledTableRow>
                );

            case 1:
                const company = props.companies[index];
                return (
                    <StyledTableRow key={index} role='button'>
                        <StyledTableCell component="th" scope="row" onClick={() => props.onCompanyPress(index)}>{company.cif}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onCompanyPress(index)}>{company.name}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onCompanyPress(index)}>{company.address}</StyledTableCell>
                        <StyledTableCell align="right"><DeleteIcon color='error' onClick={() => props.onDeleteEntity(index)} /></StyledTableCell>
                    </StyledTableRow>
                );

            case 2:
                const sla = props.slas[index];
                return (
                    <StyledTableRow key={index} role='button'>
                        <StyledTableCell component="th" scope="row" onClick={() => props.onSLAPress(index)}>{sla.id}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onSLAPress(index)}>{sla.customer}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onSLAPress(index)}>{sla.company}</StyledTableCell>
                        <StyledTableCell align="right" onClick={() => props.onSLAPress(index)}>{sla.price}</StyledTableCell>
                        <StyledTableCell align="right"><DeleteIcon color='error' onClick={() => props.onDeleteEntity(index)} /></StyledTableCell>
                    </StyledTableRow>
                );
        }
    };

    return (
        <div style={{paddingTop: '60px'}}>
            {props.customerSelected !== -1 &&
                <CustomerFormDialog
                    open={true}
                    customer={props.customers[props.customerSelected]}
                    onSave={props.onUpdateCustomer}
                    onCancel={props.onUpdateCustomer}
                />
            }
            {props.companySelected !== -1 &&
                <CompanyFormDialog
                    open={true}
                    company={props.companies[props.companySelected]}
                    onSave={props.onUpdateCompany}
                    onCancel={props.onUpdateCompany}
                />
            }
            {props.slaSelected !== -1 &&
                <SLAFormDialog
                    customers={props.customers}
                    companies={props.companies}
                    open={true}
                    sla={props.slas[props.slaSelected]}
                    onSave={props.onUpdateSLA}
                    onCancel={props.onUpdateSLA}
                />
            }
            <Header />
            {!props.loadingCheck && (
                <>
                    <Container maxWidth='lg'>
                        <Tabs value={props.tabIndex} onChange={handleChange} centered>
                            <Tab icon={<PersonIcon />} label={t('dashboard.customers')} />
                            <Tab icon={<BusinessIcon />} label={t('dashboard.companies')} />
                            <Tab icon={<ArticleIcon />} label={t('dashboard.slas')} />
                        </Tabs>
                    </Container>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                {header()}
                            </TableHead>
                            <TableBody>
                                {props.tabIndex === 0 && props.customers.map((customer, index) => {
                                    return renderRow(index);
                                })}
                                {props.tabIndex === 1 && props.companies.map((customer, index) => {
                                    return renderRow(index);
                                })}
                                {props.tabIndex === 2 && props.slas.map((customer, index) => {
                                    return renderRow(index);
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <CustomerFormDialog
                        isButton
                        onSave={props.onCreateCustomer}
                    />
                    <CompanyFormDialog
                        isButton
                        onSave={props.onCreateCompany}
                    />
                    <SLAFormDialog
                        customers={props.customers}
                        companies={props.companies}
                        isButton
                        onSave={props.onCreateSLA}
                    />
                </>
            )}
            <Footer />
        </div>
    );
}
