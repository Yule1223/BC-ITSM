import {Button, Col, Form, Row} from "react-bootstrap";
import {BsBuilding, BsHeadset, BsHouseFill, BsShop, BsTelephone} from "react-icons/bs";
import {strings} from "../../strings";
import React, {useState} from "react";
import Header from "../../components/views/Header";
import '../styles/KnowUsScreen.style.css';
import {useTranslation} from "react-i18next";
import {Alert} from "@mui/material";

function KnowUsScreen(props) {
    const [validated, setValidated] = useState(false);
    const { t } = useTranslation();

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
        props.onSendPress();
    };

    return (
        <div>
            <Header isOwner={props.isOwner} />
            <div className="Contact-content">
                <Form className="w-75 m-lg-auto" onSubmit={handleSubmit}>
                    {/*First row*/}
                    <Row>
                        <Form.Group as={Col} controlId="formProviderFirstColumn">
                            <Form.Label className='d-block mb-3'>
                                <BsHouseFill style={{fontSize: '4vh'}}/>
                                <h6 className="d-inline">{t('knowUs.sLink')}</h6>
                            </Form.Label>
                            {/*Central office*/}
                            <Form.Label className='mb-3'>
                                <BsBuilding style={{fontSize: '3vh'}}/>
                                <h5 style={{textDecorationLine: 'underline'}}
                                    className="d-inline p-lg-1">{t('knowUs.centralOffice')}</h5>
                                <span className='d-block mt-1'>Av. del Partenón, 4, 28042 Madrid</span>
                                <span className='d-block'><b>Tel.</b> 902 884 834</span>
                            </Form.Label>
                            {/*technical support service*/}
                            <Form.Label className='d-block mb-3'>
                                <BsHeadset style={{fontSize: '3vh'}}/>
                                <h5 style={{textDecorationLine: 'underline'}} className="d-inline p-lg-1">{t('knowUs.technicalSupport')}</h5>
                                <span className='d-block mt-1'><b>Tel.</b> 911 460 032</span>
                                <b>Email: </b><a href='mailto:david.pascual@slink.com'>supportTeam@slink.com</a>
                            </Form.Label>
                            {/*Operation Centre*/}
                            <Form.Label className='d-block mb-3'>
                                <BsShop style={{fontSize: '3vh'}}/>
                                <h5 style={{textDecorationLine: 'underline'}} className="d-inline p-lg-1">{t('knowUs.operationCenter')}</h5>
                                <span className='d-block mt-1'>C/ Gran Vía, 34, 28013 Madrid</span>
                                <span className='d-block'><b>Tel.</b> 949 870 186</span>
                            </Form.Label>
                            {/*Commercial Attention*/}
                            <Form.Label className='d-block mb-3'>
                                <BsTelephone style={{fontSize: '3vh'}}/>
                                <h5 style={{textDecorationLine: 'underline'}} className="d-inline p-lg-1">{t('knowUs.commercialAttention')}</h5>
                                <span className='d-block mt-1'><b>Tel.</b> 949 870 186 (<b>{t('knowUs.not')}</b> {t('knowUs.client')})</span>
                                <span className='d-block'><b>Tel.</b> 949 870 000 ({t('knowUs.forClient')})</span>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formProviderSecondColumn">
                            <h3>{t('contact.contactUs')}</h3>
                            {/*FirstName*/}
                            <Form.Label>{t('contact.firstName')} *</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={t('contact.firstNamePlaceHolder')}
                                value={props.firstName}
                                onChange={event => props.setFirstName(event.target.value)}
                            />
                            {/*LastName*/}
                            <Form.Label className="mt-3">{t('contact.lastName')} *</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={t('contact.lastNamePlaceHolder')}
                                value={props.lastName}
                                onChange={event => props.setLastName(event.target.value)}
                            />
                            {/*Email*/}
                            <Form.Label
                                className="mt-3">{t('contact.email')} *</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={t('contact.emailPlaceHolder')}
                                value={props.email}
                                onChange={event => props.setEmail(event.target.value)}
                            />
                            {/*Ethereum address*/}
                            <Form.Label
                                className="mt-3">{t('contact.ethAddress')}</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={t('contact.ethAddressPlaceHolder')}
                                value={props.ethAddress}
                                onChange={event => props.setEthAddress(event.target.value)}
                            />
                            {/*Subject*/}
                            <Form.Label className="mt-3">{t('contact.subject')} *</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder={t('contact.subjectPlaceHolder')}
                                value={props.subject}
                                onChange={event => props.setSubejct(event.target.value)}
                            />
                            {/*Message*/}
                            <Form.Label className="mt-3">{t('contact.message')} *</Form.Label>
                            <Form.Control
                                required
                                as="textarea"
                                rows={5}
                                placeholder={t('contact.messagePlaceHolder')}
                                value={props.message}
                                onChange={event => props.setMessage(event.target.value)}
                            />

                            <Form.Check className="mt-3" required type="checkbox"
                                        label={t('slaForm.assurancePrivacidad')}/>
                            <p>{t('slaForm.assuranceRead')}<a className="d-inline" href="/form/policy"
                                                                    target="_blank">{t('slaForm.assuranceLegalNotice')}</a>.
                            </p>
                            <Button className="mb-3" variant="primary" type="submit">
                                {t('contact.submit')}
                            </Button>
                            {props.contactRequestCreated && (
                                <Alert severity="success">{t('contact.requestCreated')}</Alert>
                            )}
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default KnowUsScreen;
