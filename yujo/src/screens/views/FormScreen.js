import '../styles/FormScreen.style.css';
import Header from "../../components/views/Header";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useState} from "react";
import DatePicker from 'sassy-datepicker';
import React from 'react';
import FormSelect from "../../components/views/FormSelect";
import Footer from "../../components/views/Footer";
import { useTranslation } from "react-i18next";
import {Alert, AlertTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import CustomerForm from "../../components/views/CustomerForm";
import CompanyForm from "../../components/views/CompanyForm";
import {getStringFromConstantValue} from "../../config";

function FormScreen(props) {
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
        <div className="App">
            <Header isOwner={props.isOwner} />
            <section>
                {props.slaDto && (
                    <Alert severity="success">
                        <AlertTitle><strong>{t('form.slaCreatedTitle')}</strong></AlertTitle>
                        {t('form.slaCreatedMessage1') + ' '}<strong>{props.slaDto.id}</strong>
                        <br />
                        <br />
                        {t('form.slaCreatedMessage2') + ' '}<strong><a target='_blank' className="d-inline" href={'https://rinkeby.etherscan.io/tx/' + props.slaDto.transactionHash}>{props.slaDto.transactionHash}</a></strong>
                        <br />
                        <br />
                        <a className="d-inline" href='/form'>{t('form.slaCreatedMessage3')}</a>
                    </Alert>
                )}
                {props.customer && !props.slaDto && (
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Alert severity="success">
                            <AlertTitle><strong>{t('successAlerts.knownAddressTitle')}</strong></AlertTitle>
                            {t('successAlerts.knownAddressMessage') + props.customer.name + '.'}
                        </Alert>
                        <div className='p-2' />
                        <h3>{t('customerForm.information')}</h3>
                        {/*Customer*/}

                        <CustomerForm
                            darkMode

                            ethAddress={props.customer.ethAddress}
                            ethAddressDisabled
                            ethAddressReadOnly

                            dni={props.customer.dni}
                            dniDisabled
                            dniReadOnly

                            firstName={props.customer.name}
                            firstNameDisabled
                            firstNameReadOnly

                            lastName={props.customer.surname}
                            lastNameDisabled
                            lastNameReadOnly

                            gender={props.customer.gender}
                            genderDisabled
                            genderReadOnly

                            email={props.customer.email}
                            emailDisabled
                            emailReadOnly

                            phone={props.customer.phone}
                            phoneDisabled
                            phoneReadOnly

                            companies={props.companies}
                            company={props.customer.company}
                            companyDisabled
                            companyReadOnly

                            province={props.customer.province}
                            provinceDisabled
                            provinceReadOnly

                            city={props.customer.city}
                            cityDisabled
                            cityReadOnly

                            country={props.customer.country}
                            countryDisabled
                            countryReadOnly
                        />

                        <div className='p-4' />

                        {/*Company*/}
                        <h3>{t('companyForm.information')}</h3>

                        {props.company && (
                            <CompanyForm
                                darkMode

                                cif={props.company.cif}
                                cifDisabled
                                cifReadOnly

                                name={props.company.name}
                                nameDisabled
                                nameReadOnly

                                address={props.company.address}
                                addressDisabled
                                addressReadOnly

                            />
                        )}

                        <div className='p-4' />

                        <h3>{t('slaForm.specification')}</h3>
                        {/*SLA Specification*/}
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>{t('slaForm.initialDate')}</Form.Label>
                                <DatePicker value={props.startDate} onChange={props.onDateSelected}/>
                            </Form.Group>
                            {/*Second row*/}
                            <Form.Group as={Col} assName="mb-3" controlId="formCoveredService">
                                <Form.Label>{t('slaForm.autoRenewal')}</Form.Label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                            inline
                                            label={t('slaForm.autoRenewalYes')}
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-1`}
                                            value={props.automaticRenewal}
                                            onChange={() => props.onAutomaticRenewalChange(true)}
                                        />
                                        <Form.Check
                                            inline
                                            label={t('slaForm.autoRenewalNo')}
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-2`}
                                            value={!props.automaticRenewal}
                                            onChange={() => props.onAutomaticRenewalChange(false)}
                                        />
                                    </div>
                                ))}
                            </Form.Group>
                        </Row>
                        {/*Sixth row*/}
                        <Row className="mb-3">
                            {/*Related files*/}
                            <Form.Group as={Col} controlId="formFile">
                                <Form.Label>{t('slaForm.relatedFiles')}</Form.Label>
                                <Form.Control type="file"/>
                            </Form.Group>
                        </Row>
                        {/*Seventh row*/}
                        <Row className="g-2 mb-3">
                            <Col md>
                                {/*Service hours*/}
                                <FloatingLabel className="text-dark" controlId="formServiceHours" label={t('slaForm.serviceHours')} htmlFor='first'>
                                    <FormSelect
                                        index={props.serviceSpaceIndex}
                                        options={props.serviceSpaces}
                                        defaultLabel={t('slaForm.chooseServiceHours')}
                                        renderLabel={(serviceSpace) => serviceSpace.name + ' (' + serviceSpace.startTime + '-' + serviceSpace.endTime + ') ' + serviceSpace.price + '€/' + getStringFromConstantValue(serviceSpace.pricePeriodicity, t)}
                                        onOptionSelected={props.onServiceSpaceSelected}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel className="text-dark" controlId="formCoveredServices" label={t('slaForm.coveredServices')} htmlFor='third'>
                                    <FormSelect
                                        index={props.serviceIndex}
                                        options={props.services}
                                        defaultLabel={t('slaForm.chooseCoveredServices')}
                                        renderLabel={(service) => service.name + ' ' + service.price + '€/' + getStringFromConstantValue(service.pricePeriodicity, t)}
                                        onOptionSelected={props.onServiceSelected}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        {/*Eighth row*/}
                        <Row className="g-2">
                            <Col md>
                                <FloatingLabel className="text-dark" controlId="formCoveredExtraServices" label={t('slaForm.extraServices')}>
                                    <FormSelect
                                        index={props.extraServiceIndex}
                                        options={props.extraServices}
                                        defaultLabel={t('slaForm.chooseExtraServices')}
                                        renderLabel={(extraService) => extraService.name + ' ' + extraService.price + '€/' + getStringFromConstantValue(extraService.pricePeriodicity, t)}
                                        onOptionSelected={props.onExtraServiceSelected}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                {/*Licences*/}
                                <FloatingLabel className="text-dark" controlId="formLicences" label={t('slaForm.licences')}>
                                    <FormSelect
                                        index={props.licenseIndex}
                                        options={props.licenses}
                                        defaultLabel={t('slaForm.chooseLicences')}
                                        renderLabel={(license) => license}
                                        onOptionSelected={props.onLicenseSelected}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        {/*Service level*/}
                        <Form.Group className="mt-3" controlId="formServiceLevel">
                            <Form.Label>{t('slaForm.serviceLevel')}</Form.Label>
                            <Form.Control as="textarea" rows={3} value={props.serviceLevels} />
                        </Form.Group>
                        {/*Revision report*/}
                        <Form.Label className="mt-3">{t('slaForm.assuranceReport')}</Form.Label>
                        <Row className="g-2">
                            {/*Report Period*/}
                            <Col md>
                                <FloatingLabel className="text-dark" controlId="formReportPeriod" label="Report Period" htmlFor='second'>
                                    <FormSelect
                                        index={props.revisionReportIndex}
                                        options={props.revisionReports}
                                        defaultLabel={t('slaForm.assuranceChoosePeriod')}
                                        renderLabel={(revisionReport) => {
                                            const periodicity = getStringFromConstantValue(revisionReport.pricePeriodicity, t);
                                            return periodicity.charAt(0).toUpperCase() + periodicity.slice(1) + ' (' + revisionReport.price + '€)';
                                        }}
                                        onOptionSelected={props.onRevisionReportSelected}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel className="text-dark" controlId="floatingReportContent" label="Report Content">
                                    <Form.Control type="text"/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        {/*Eighth row*/}
                        <Form.Label className="mt-3">{t('slaForm.assuranceServiceBilling')}</Form.Label>
                        <Row className="g-2">
                            {/*Service Billing*/}
                            <Col md>
                                <FloatingLabel className="text-dark" controlId="formBillingPeriod" label="Billing Period">
                                    <FormSelect
                                        index={props.billingIndex}
                                        options={props.billings}
                                        defaultLabel={t('slaForm.assuranceSelectServiceBilling')}
                                        renderLabel={(billing) => {
                                            const periodicity = getStringFromConstantValue(billing, t);
                                            return periodicity.charAt(0).toUpperCase() + periodicity.slice(1);
                                        }}
                                        onOptionSelected={props.onBillingSelected}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col md>
                                <FloatingLabel className="text-dark" controlId="formBillingMethod" label="Billing Method">
                                    <FormSelect
                                        index={props.billingMethodIndex}
                                        options={props.billingMethods}
                                        defaultLabel={t('slaForm.assuranceSelectBillingMethod')}
                                        renderLabel={(billing) => billing}
                                        onOptionSelected={props.onBillingMethodSelected}
                                    />
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Form.Group className="mt-3" controlId="formBasicCheckbox">
                            <Form.Check required type="checkbox" label={t('slaForm.assurancePrivacidad')}/>
                            <p>{t('slaForm.assuranceRead')}<a className="d-inline" href="/form/policy"
                                                              target="_blank">{t('slaForm.assuranceLegalNotice')}</a>.
                            </p>
                        </Form.Group>
                        {/*SLA Price*/}
                        <label className="d-inline text-warning" htmlFor='sum'>{t('form.price')}</label>
                        <label className="d-inline mt-3 w-100 text-warning">
                            {props.price.toLocaleString('es-ES') + "€/year"}
                        </label>
                        <p className="text-danger mt-3">{t('form.fieldsAreMandatory')}</p>
                        <Button className="mb-3" variant="primary" type="submit">
                            {t('form.submit')}
                        </Button>
                    </Form>
                )}
                {!props.customer && (
                    <Alert severity="error">
                        <AlertTitle><strong>{t('errorAlerts.unknownAddressTitle')}</strong></AlertTitle>
                        {t('errorAlerts.unknownAddressMessage1')}
                        <br />
                        <br />
                        {t('errorAlerts.unknownAddressMessage2')}
                        <a className="d-inline" href="/knowus">{t('errorAlerts.unknownAddressMessage3')}</a>
                    </Alert>
                )}
            </section>
        </div>
    );
}

export default FormScreen;
