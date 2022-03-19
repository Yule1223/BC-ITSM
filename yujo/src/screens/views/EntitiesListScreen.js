/*import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../components/views/Header";
import { BsFillXCircleFill as DeleteIcon, BsPenFill as UpdateIcon } from "react-icons/bs";
import {COMPANY_ENTITY, CUSTOMER_ENTITY, SLA_ENTITY} from "../../config";
import * as React from 'react';

function EntitiesListScreen(props) {
    const header = () => {
        switch (props.entity) {
            case CUSTOMER_ENTITY:
                return (
                    <Row className='fw-bold text-center'>
                        <Col>Ethereum address</Col>
                        <Col>DNI</Col>
                        <Col>Name</Col>
                        <Col>Surname</Col>
                        <Col>Email</Col>
                        <Col>Phone</Col>
                        <Col>Update</Col>
                        <Col>Delete</Col>
                    </Row>
                );

            case COMPANY_ENTITY:
                return (
                    <Row className='fw-bold text-center'>
                        <Col>CIF</Col>
                        <Col>Name</Col>
                        <Col>Address</Col>
                        <Col>Update</Col>
                        <Col>Delete</Col>
                    </Row>
                );

            case SLA_ENTITY:
                return (
                    <Row className='fw-bold text-center'>
                        <Col>ID</Col>
                        <Col>Customer</Col>
                        <Col>Company</Col>
                        <Col>Price</Col>
                        <Col>Update</Col>
                        <Col>Delete</Col>
                    </Row>
                );
        }
    };

    const render = (entity, index) => {
        switch (props.entity) {
            case CUSTOMER_ENTITY:
                return (
                    <Row key={index} className={'text-center ' + (index % 2 === 0 ? 'bg-secondary' : 'bg-dark')}>
                        <Col className='overflow-hidden'>{entity.ethAddress}</Col>
                        <Col className='overflow-hidden'>{entity.dni}</Col>
                        <Col className='overflow-hidden'>{entity.name}</Col>
                        <Col className='overflow-hidden'>{entity.surname}</Col>
                        <Col className='overflow-hidden'>{entity.email}</Col>
                        <Col className='overflow-hidden'>{entity.phone}</Col>
                        <Col className='overflow-hidden'><UpdateIcon color='#BBBBBB'/></Col>
                        <Col className='overflow-hidden'><DeleteIcon color='#FF0000' onClick={() => props.onDeleteEntity(index)} /></Col>
                    </Row>
                );

            case COMPANY_ENTITY:
                return (
                    <Row key={index} className={'text-center ' + (index % 2 === 0 ? 'bg-secondary' : 'bg-dark')}>
                        <Col className='overflow-hidden'>{entity.cif}</Col>
                        <Col className='overflow-hidden'>{entity.name}</Col>
                        <Col className='overflow-hidden'>{entity.address}</Col>
                        <Col className='overflow-hidden'><UpdateIcon color='#BBBBBB'/></Col>
                        <Col className='overflow-hidden'><DeleteIcon color='#FF0000' onClick={() => props.onDeleteEntity(index)} /></Col>
                    </Row>
                );

            case SLA_ENTITY:
                return (
                    <Row key={index} className={'text-center ' + (index % 2 === 0 ? 'bg-secondary' : 'bg-dark')}>
                        <Col className='overflow-hidden'>{entity.id}</Col>
                        <Col className='overflow-hidden'>{entity.customer}</Col>
                        <Col className='overflow-hidden'>{entity.company}</Col>
                        <Col className='overflow-hidden'>{entity.price}</Col>
                        <Col className='overflow-hidden'><UpdateIcon color='#BBBBBB'/></Col>
                        <Col className='overflow-hidden'><DeleteIcon color='#FF0000' onClick={() => props.onDeleteEntity(index)} /></Col>
                    </Row>
                );
        }
    };

    return (
        <>
            <Header />
            <section>
                <Container fluid>
                    {header()}
                    {props.entities.map((customer, index) => render(customer, index))}
                </Container>
            </section>
        </>
    );
}


export default EntitiesListScreen;
*/
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
import {useState} from "react";

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
    const handleChange = (event, newValue) => {
        props.onTabIndexSelected(newValue);
    };

    const header = () => {
        switch (props.tabIndex) {
            case 0:
                return (
                    <TableRow>
                        <StyledTableCell>Ethereum address</StyledTableCell>
                        <StyledTableCell align="right">DNI</StyledTableCell>
                        <StyledTableCell align="right">Surname</StyledTableCell>
                        <StyledTableCell align="right">Email</StyledTableCell>
                        <StyledTableCell align="right">Phone</StyledTableCell>
                        <StyledTableCell align="right" />
                    </TableRow>
                );

            case 1:
                return (
                    <TableRow>
                        <StyledTableCell>CIF</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Address</StyledTableCell>
                        <StyledTableCell align="right" />
                    </TableRow>
                );

            case 2:
                return (
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">Customer</StyledTableCell>
                        <StyledTableCell align="right">Company</StyledTableCell>
                        <StyledTableCell align="right">Price</StyledTableCell>
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
                    <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">{customer.ethAddress}</StyledTableCell>
                        <StyledTableCell align="right">{customer.dni}</StyledTableCell>
                        <StyledTableCell align="right">{customer.surname}</StyledTableCell>
                        <StyledTableCell align="right">{customer.email}</StyledTableCell>
                        <StyledTableCell align="right">{customer.phone}</StyledTableCell>
                        <StyledTableCell align="right"><DeleteIcon color='error' onClick={() => props.onDeleteEntity(index)} /></StyledTableCell>
                    </StyledTableRow>
                );

            case 1:
                const company = props.companies[index];
                return (
                    <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">{company.cif}</StyledTableCell>
                        <StyledTableCell align="right">{company.name}</StyledTableCell>
                        <StyledTableCell align="right">{company.address}</StyledTableCell>
                        <StyledTableCell align="right"><DeleteIcon color='error' onClick={() => props.onDeleteEntity(index)} /></StyledTableCell>
                    </StyledTableRow>
                );

            case 2:
                const sla = props.slas[index];
                return (
                    <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">{sla.id}</StyledTableCell>
                        <StyledTableCell align="right">{sla.customer}</StyledTableCell>
                        <StyledTableCell align="right">{sla.company}</StyledTableCell>
                        <StyledTableCell align="right">{sla.price}</StyledTableCell>
                        <StyledTableCell align="right"><DeleteIcon color='error' onClick={() => props.onDeleteEntity(index)} /></StyledTableCell>
                    </StyledTableRow>
                );
        }
    };

    return (
        <>
            <Header />
            <Container maxWidth='lg'>
                <Tabs value={props.tabIndex} onChange={handleChange} centered>
                    <Tab icon={<PersonIcon />} label="Customers" />
                    <Tab icon={<BusinessIcon />} label="Companies" />
                    <Tab icon={<ArticleIcon />} label="SLAs" />
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
        </>
    );
}
