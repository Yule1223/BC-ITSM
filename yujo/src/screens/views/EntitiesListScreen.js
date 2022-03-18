import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from "react-bootstrap";
import Header from "../../components/views/Header";
import { BsFillXCircleFill as DeleteIcon, BsPenFill as UpdateIcon } from "react-icons/bs";
import {COMPANY_ENTITY, CUSTOMER_ENTITY, SLA_ENTITY} from "../../config";

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
