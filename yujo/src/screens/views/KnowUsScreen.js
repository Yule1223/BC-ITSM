import {Button, Col, Form, Row} from "react-bootstrap";
import {BsBuilding, BsHeadset, BsHouseFill, BsShop, BsTelephone} from "react-icons/bs";
import strings from "../../strings";
import React from "react";
import Header from "../../components/views/Header";
import '../styles/KnowUsScreen.style.css';

function KnowUsScreen() {
    return (
        <div>
            <Header/>
            <div className="Contact-content">
                <Form className="w-75 m-lg-auto">
                    {/*First row*/}
                    <Row>
                        <Form.Group as={Col} controlId="formProviderFirstColumn">
                            <Form.Label className='d-block mb-3'>
                                <BsHouseFill style={{fontSize: '4vh'}}/>
                                <h6 className="d-inline">{strings.knowUsSLink}</h6>
                            </Form.Label>
                            {/*Central office*/}
                            <Form.Label className='mb-3'>
                                <BsBuilding style={{fontSize: '3vh'}}/>
                                <h5 style={{textDecorationLine: 'underline'}}
                                    className="d-inline p-lg-1">{strings.knowUsCentralOffice}</h5>
                                <span className='d-block mt-1'>Av. del Partenón, 4, 28042 Madrid</span>
                                <span className='d-block'><b>Tel.</b> 902 884 834</span>
                            </Form.Label>
                            {/*technical support service*/}
                            <Form.Label className='d-block mb-3'>
                                <BsHeadset style={{fontSize: '3vh'}}/>
                                <h5 style={{textDecorationLine: 'underline'}} className="d-inline p-lg-1">{strings.knowUsTechnicalSupport}</h5>
                                <span className='d-block mt-1'><b>Tel.</b> 911 460 032</span>
                                <b>Email: </b><a href='mailto:david.pascual@slink.com'>supportTeam@slink.com</a>
                            </Form.Label>
                            {/*Operation Centre*/}
                            <Form.Label className='d-block mb-3'>
                                <BsShop style={{fontSize: '3vh'}}/>
                                <h5 style={{textDecorationLine: 'underline'}} className="d-inline p-lg-1">{strings.knowUsOperationCenter}</h5>
                                <span className='d-block mt-1'>C/ Gran Vía, 34, 28013 Madrid</span>
                                <span className='d-block'><b>Tel.</b> 949 870 186</span>
                            </Form.Label>
                            {/*Commercial Attention*/}
                            <Form.Label className='d-block mb-3'>
                                <BsTelephone style={{fontSize: '3vh'}}/>
                                <h5 style={{textDecorationLine: 'underline'}} className="d-inline p-lg-1">{strings.knowUsCommercialAttention}</h5>
                                <span className='d-block mt-1'><b>Tel.</b> 949 870 186 (<b>{strings.knowUsNot}</b> {strings.knowUsClient})</span>
                                <span className='d-block'><b>Tel.</b> 949 870 000 ({strings.knowUsForClient})</span>
                            </Form.Label>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formProviderSecondColumn">
                            <h3>{strings.formInformationContactUs}</h3>
                            {/*FirstName*/}
                            <Form.Label>{strings.formInformationFirstName}*</Form.Label>
                            <Form.Control required type="text"
                                          placeholder={strings.formInformationFirstNamePlaceHolder}/>
                            {/*LastName*/}
                            <Form.Label className="mt-3">{strings.formInformationLastName}*</Form.Label>
                            <Form.Control required type="text"
                                          placeholder={strings.formInformationLastNamePlaceHolder}/>
                            {/*Email*/}
                            <Form.Label
                                className="mt-3">{strings.formSLASpecificationContactEmail}*</Form.Label>
                            <Form.Control required type="text"
                                          placeholder={strings.formSLASpecificationContactEmailPlaceHolder}/>
                            {/*Subject*/}
                            <Form.Label className="mt-3">{strings.formInformationSubject}*</Form.Label>
                            <Form.Control required type="text"
                                          placeholder={strings.formInformationSubjectPlaceHolder}/>
                            {/*Message*/}
                            <Form.Label className="mt-3">{strings.formInformationMessage}*</Form.Label>
                            <Form.Control required as="textarea" rows={5}/>
                            <Form.Check className="mt-3" required type="checkbox"
                                        label={strings.formServiceAssurancePrivacidad}/>
                            <p>{strings.formServiceAssuranceRead}<a className="d-inline" href="/form/policy"
                                                                    target="_blank">{strings.formServiceAssuranceLegalNotice}</a>.
                            </p>
                            <Button className="mb-3" variant="primary" type="submit">
                                {strings.formSubmit}
                            </Button>
                        </Form.Group>
                    </Row>
                </Form>
            </div>
        </div>
    )
}

export default KnowUsScreen;