import '../styles/FormScreen.style.css';
import Header from "../../components/views/Header";
import TabsFormScreen from "./TabsFormScreen";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useState} from "react";
import strings from "../../strings";
import DatePicker from 'sassy-datepicker';
import {BsHouseFill, BsBuilding, BsHeadset, BsShop, BsTelephone} from "react-icons/bs";

function FormScreen() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const onChangeDate = (date) => {
        console.log(date.toString());
    };

    return (
        <div className="App">
            <Header/>
            <section>
                <TabsFormScreen tabs={[
                    {
                        title: strings.formClientInformation,
                        content: <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/*First row*/}
                            <Row>
                                {/*DNI*/}
                                <Form.Group as={Col} controlId="formDNI">
                                    <Form.Label>{strings.formInformationDNI}*</Form.Label>
                                    <Form.Control required type="text"
                                                  placeholder={strings.formInformationDNIPlaceHolder}/>
                                    <Form.Control.Feedback>{strings.formLooksGood}</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {strings.formInformationDNIError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*FirstName*/}
                                <Form.Group as={Col} controlId="formFirstName">
                                    <Form.Label>{strings.formInformationFirstName}*</Form.Label>
                                    <Form.Control required type="text"
                                                  placeholder={strings.formInformationFirstNamePlaceHolder}/>
                                    <Form.Control.Feedback>{strings.formLooksGood}</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {strings.formInformationFirstNameError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*LastName*/}
                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Label>{strings.formInformationLastName}*</Form.Label>
                                    <Form.Control required type="text"
                                                  placeholder={strings.formInformationLastNamePlaceHolder}/>
                                    <Form.Control.Feedback>{strings.formLooksGood}</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {strings.formInformationLastNameError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            {/*Email and phone*/}
                            <Row className="mb-3 mt-3">
                                <Form.Group as={Col} controlId="formContactEmail">
                                    <Form.Label>{strings.formSLASpecificationContactEmail}*</Form.Label>
                                    <Form.Control required type="email"
                                                  placeholder={strings.formSLASpecificationContactEmailPlaceHolder}/>
                                    <Form.Control.Feedback type="invalid">
                                        {strings.formInformationEmailError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formContactPhone">
                                    <Form.Label>{strings.formSLASpecificationContactPhone}</Form.Label>
                                    <Form.Control type="text"
                                                  placeholder={strings.formSLASpecificationContactPhonePlaceHolder}/>
                                </Form.Group>
                            </Row>
                            {/*Second row*/}
                            <Row className="g-2 mt-3">
                                {/*Nationality*/}
                                <Col md>
                                    <FloatingLabel controlId="formNationality" label="Country of nationality">
                                        <Form.Select autoComplete={"country-name"}>
                                            <option>{strings.formInformationCountryChoose}</option>
                                            <option value="401"> AFGANISTAN</option>
                                            <option value="102"> ALBANIA</option>
                                            <option value="103"> GERMANY</option>
                                            <option value="133"> ANDORRA</option>
                                            <option value="301"> ANGOLA</option>
                                            <option value="258"> ANGUILLA</option>
                                            <option value="255"> ANTIGUA AND BARBUDA</option>
                                            <option value="200"> ANTILLES NL.</option>
                                            <option value="600"> STATELESS</option>
                                            <option value="403"> SAUDI ARABIA</option>
                                            <option value="304"> ALGERIA</option>
                                            <option value="202"> ARGENTINA</option>
                                            <option value="142"> ARMENIA</option>
                                            <option value="257"> ARUBA</option>
                                            <option value="500"> AUSTRALIA</option>
                                            <option value="104"> AUSTRIA</option>
                                            <option value="143"> AZERBAYAN</option>
                                            <option value="203"> BAHAMAS</option>
                                            <option value="405"> BAHRAIN</option>
                                            <option value="432"> BANGLADESH</option>
                                            <option value="205"> BARBADOS</option>
                                            <option value="105"> BELGIUM</option>
                                            <option value="207"> BELIZE</option>
                                            <option value="302"> BENIN</option>
                                            <option value="407"> BHUTAN</option>
                                            <option value="144"> BELARUS OR BELARUS</option>
                                            <option value="204"> BOLIVIA</option>
                                            <option value="156"> BOSNIA-HERZEGOVINA</option>
                                            <option value="305"> BOTSWANA</option>
                                            <option value="206"> BRAZIL</option>
                                            <option value="409"> BRUNEI DARUSSALAM</option>
                                            <option value="134"> BULGARIA</option>
                                            <option value="303"> BURKINA FASO</option>
                                            <option value="321"> BURUNDI</option>
                                            <option value="315"> CAPE VERDE</option>
                                            <option value="402"> CAMBODIA</option>
                                            <option value="308"> CAMEROON</option>
                                            <option value="208"> CANADA</option>
                                            <option value="310"> CENTRAL AFRICA REPUBLIC</option>
                                            <option value="372"> CHAD</option>
                                            <option value="210"> CHILE</option>
                                            <option value="406"> CHINA</option>
                                            <option value="107"> CYPRUS</option>
                                            <option value="212"> COLOMBIA</option>
                                            <option value="311"> COMORES</option>
                                            <option value="312"> CONGO BRAZZAVILLE</option>
                                            <option value="460"> KOREA, REP. POP. DEMOC.</option>
                                            <option value="410"> KOREA, REPUBLIC</option>
                                            <option value="314"> IVORY COAST</option>
                                            <option value="214"> COSTA RICA</option>
                                            <option value="140"> CROATIA</option>
                                            <option value="216"> CUBA</option>
                                            <option value="108"> DENMARK</option>
                                            <option value="317"> DJIBOUTI</option>
                                            <option value="217"> DOMINICA</option>
                                            <option value="218"> DOMINICAN REPUBLIC</option>
                                            <option value="222"> ECUADOR</option>
                                            <option value="224"> USA</option>
                                            <option value="300"> EGYPT</option>
                                            <option value="220"> EL SALVADOR</option>
                                            <option value="136"> THE VATICAN</option>
                                            <option value="429"> UNITED ARAB EMIRATES</option>
                                            <option value="384"> ERITREA</option>
                                            <option value="158"> SLOVAKIA</option>
                                            <option value="141"> SLOVENIA</option>
                                            <option value="109"> SPAIN</option>
                                            <option value="137"> ESTONIA</option>
                                            <option value="318"> ETHIOPIA</option>
                                            <option value="550"> FIDJI</option>
                                            <option value="411"> PHILIPPINES</option>
                                            <option value="110"> FINLAND</option>
                                            <option value="111"> FRANCE</option>
                                            <option value="320"> GABON</option>
                                            <option value="323"> GAMBIA</option>
                                            <option value="145"> GEORGIA</option>
                                            <option value="322"> GHANA</option>
                                            <option value="229"> GRANADA REPUBLICA</option>
                                            <option value="113"> GREECE</option>
                                            <option value="228"> GUATEMALA</option>
                                            <option value="225"> GUAYANA</option>
                                            <option value="324"> EQUATORIAL GUINEA</option>
                                            <option value="325"> GUINEA REPUBLIC</option>
                                            <option value="328"> GUINEA-BISSAU</option>
                                            <option value="230"> HAITI</option>
                                            <option value="123"> HOLLAND</option>
                                            <option value="232"> HONDURAS</option>
                                            <option value="114"> HUNGARY</option>
                                            <option value="412"> INDIA</option>
                                            <option value="414"> INDONESIA</option>
                                            <option value="413"> IRAQ</option>
                                            <option value="415"> IRAN</option>
                                            <option value="115"> IRELAND</option>
                                            <option value="116"> ICELAND</option>
                                            <option value="520"> MARSCHALL ISLANDS</option>
                                            <option value="417"> ISRAEL</option>
                                            <option value="117"> ITALY</option>
                                            <option value="233"> JAMAICA</option>
                                            <option value="416"> JAPAN</option>
                                            <option value="419"> JORDAN</option>
                                            <option value="146"> KAZAJSTAN</option>
                                            <option value="336"> KENYA</option>
                                            <option value="147"> KYRGYSTAN</option>
                                            <option value="501"> KIRIBATI</option>
                                            <option value="421"> KUWAIT</option>
                                            <option value="418"> LAOS</option>
                                            <option value="436"> THE MALDIVES</option>
                                            <option value="337"> LESOTHO</option>
                                            <option value="138"> LATVIA</option>
                                            <option value="423"> LEBANON</option>
                                            <option value="342"> LIBERIA</option>
                                            <option value="344"> LIBYA</option>
                                            <option value="118"> LIECHTENSTEIN</option>
                                            <option value="139"> LITHUANIA</option>
                                            <option value="119"> LUXEMBOURG</option>
                                            <option value="463"> MACAO</option>
                                            <option value="159"> MACEDONIA</option>
                                            <option value="354"> MADAGASCAR</option>
                                            <option value="425"> MALAYSIA</option>
                                            <option value="900"> MALAYSIA - GREAT BRITAIN</option>
                                            <option value="346"> MALAWI</option>
                                            <option value="347"> MALI</option>
                                            <option value="120"> MALTA</option>
                                            <option value="348"> MOROCCO</option>
                                            <option value="349"> MAURICIO</option>
                                            <option value="350"> MAURITANIA</option>
                                            <option value="234"> MEJICO</option>
                                            <option value="525"> MICRONESIA</option>
                                            <option value="148"> MOLDOVA</option>
                                            <option value="121"> MONACO</option>
                                            <option value="427"> MONGOLIA</option>
                                            <option value="160"> MONTENEGRO</option>
                                            <option value="351"> MOZAMBIQUE</option>
                                            <option value="400"> MYANMAR</option>
                                            <option value="353"> NAMIBIA</option>
                                            <option value="541"> NAURU</option>
                                            <option value="420"> NEPAL</option>
                                            <option value="236"> NICARAGUA</option>
                                            <option value="360"> NIGER</option>
                                            <option value="352"> NIGERIA</option>
                                            <option value="122"> NORWAY</option>
                                            <option value="540"> NEW ZEALAND</option>
                                            <option value="444"> OMAN</option>
                                            <option value="424"> PAKISTAN</option>
                                            <option value="238"> PANAMA</option>
                                            <option value="542"> PAPUA NEW GUINEA</option>
                                            <option value="240"> PARAGUAY</option>
                                            <option value="242"> PERU</option>
                                            <option value="124"> POLAND</option>
                                            <option value="125"> PORTUGAL</option>
                                            <option value="244"> PUERTO RICO</option>
                                            <option value="431"> QATAR</option>
                                            <option value="112"> UNITED KINGDOM</option>
                                            <option value="380"> REP. DEMOCRATIC OF THE CONGO (EX-ZAIRE)</option>
                                            <option value="157"> CZECH REPUBLIC</option>
                                            <option value="355"> MEETING-AS</option>
                                            <option value="306"> RWANDA</option>
                                            <option value="127"> ROMANIA</option>
                                            <option value="149"> RUSSIA</option>
                                            <option value="551"> SALOMON</option>
                                            <option value="552"> WESTERN SAMOA</option>
                                            <option value="256"> SAN CRISTOBAL AND NEVIS</option>
                                            <option value="135"> SAN MARINO</option>
                                            <option value="254"> SAN VICENTE</option>
                                            <option value="253"> SANTA LUCIA</option>
                                            <option value="361"> SAINT TOME AND PRINCIPE</option>
                                            <option value="363"> SEICHELLES</option>
                                            <option value="362"> SENEGAL</option>
                                            <option value="366"> SENEGAMBIA</option>
                                            <option value="155"> SERBIA</option>
                                            <option value="364"> SIERRA LEONA</option>
                                            <option value="426"> SINGAPORE</option>
                                            <option value="433"> SYRIA</option>
                                            <option value="365"> SOMALIA</option>
                                            <option value="404"> SRI LANKA</option>
                                            <option value="367"> SOUTH AFRICA</option>
                                            <option value="368"> SUDAN</option>
                                            <option value="128"> SWEDEN</option>
                                            <option value="129"> SWITZERLAND</option>
                                            <option value="250"> SURINAME</option>
                                            <option value="371"> SWAZILAND</option>
                                            <option value="154"> TADJIKISTAN</option>
                                            <option value="408"> TAIWAN</option>
                                            <option value="370"> TANZANIA</option>
                                            <option value="428"> THAILAND</option>
                                            <option value="465"> EAST TIMOR</option>
                                            <option value="374"> TOGO</option>
                                            <option value="554"> TONGA</option>
                                            <option value="245"> TRINIDAD AND TOBAGO</option>
                                            <option value="378"> TUNIS</option>
                                            <option value="151"> TURKMENIA</option>
                                            <option value="130"> TURKEY</option>
                                            <option value="560"> TUVALU</option>
                                            <option value="152"> UKRAINE</option>
                                            <option value="358"> UGANDA</option>
                                            <option value="246"> URUGUAY</option>
                                            <option value="153"> UZBEKISTAN</option>
                                            <option value="565"> VANUATU</option>
                                            <option value="248"> VENEZUELA</option>
                                            <option value="430"> VIETNAM</option>
                                            <option value="434"> YEMEN</option>
                                            <option value="382"> ZAMBIA</option>
                                            <option value="357"> ZIMBABWE</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                {/*Gender*/}
                                <Col md>
                                    <FloatingLabel controlId="formGender" label="Gender">
                                        <Form.Select aria-label="Floating label select example">
                                            <option>{strings.formInformationGenderChoose}</option>
                                            <option value="1">{strings.formInformationGenderMale}</option>
                                            <option value="2">{strings.formInformationGenderFemale}</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            {/*Third row*/}
                            <Row className="mb-3 mt-3">
                                {/*City*/}
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label>{strings.formInformationCity}</Form.Label>
                                    <Form.Control type="text" placeholder={strings.formInformationCityPlaceHolder}/>
                                </Form.Group>
                                {/*Province*/}
                                <Form.Group as={Col} controlId="formProvince">
                                    <Form.Label>{strings.formInformationProvince}</Form.Label>
                                    <Form.Control type="text" placeholder={strings.formInformationProvincePlaceHolder}/>
                                </Form.Group>
                            </Row>
                            {/*Fourth row*/}
                            <Row className="mb-3">
                                {/*Company name*/}
                                <Form.Group as={Col} controlId="formCompanyName">
                                    <Form.Label>{strings.formInformationCompanyName}*</Form.Label>
                                    <Form.Control required type="text"
                                                  placeholder={strings.formInformationCompanyNamePlaceHolder}/>
                                    <Form.Control.Feedback>{strings.formLooksGood}</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {strings.formInformationCompanyNameError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*Company direction*/}
                                <Form.Group as={Col} controlId="formCompanyDirection">
                                    <Form.Label>{strings.formInformationCompanyDirection}*</Form.Label>
                                    <Form.Control required type="text"
                                                  placeholder={strings.formInformationCompanyDirectionPlaceHolder}/>
                                    <Form.Control.Feedback>{strings.formLooksGood}</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {strings.formInformationCompanyDirectionError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*Company fiscal number*/}
                                <Form.Group as={Col} controlId="formFiscalNumber">
                                    <Form.Label>{strings.formInformationCompanyNumber}*</Form.Label>
                                    <Form.Control required type="text"
                                                  placeholder={strings.formInformationCompanyNumberPlaceHolder}/>
                                    <Form.Control.Feedback>{strings.formLooksGood}</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        {strings.formInformationCompanyNumberError}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <p class="text-danger mt-3">{strings.formFieldsAreMandatory}</p>
                        </Form>,
                    },
                    {
                        title: strings.formServiceProviderInformation,
                        content: <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/*First row*/}
                            <Row>
                                <Form.Group as={Col} controlId="formProviderFirstColumn">
                                    <Form.Label className='d-block'>
                                        <BsHouseFill style={{fontSize: '4vh'}}/>
                                        <span> Slink. Professionals of Technology Solutions for SLAs</span>
                                    </Form.Label>
                                    {/*Central office*/}
                                    <Form.Label>
                                        <BsBuilding style={{fontSize: '3vh'}}/>
                                        <span style={{textDecorationLine: 'underline'}}> Central Office</span>
                                        <span className='d-block'>Av. del Partenón, 4, 28042 Madrid</span>
                                        <span className='d-block'><b>Tel.</b> 902 884 834</span>
                                    </Form.Label>
                                    {/*technical support service*/}
                                    <Form.Label className='d-block'>
                                        <BsHeadset style={{fontSize: '3vh'}}/>
                                        <span
                                            style={{textDecorationLine: 'underline'}}> Technical Support Service</span>
                                        <span className='d-block'><b>Tel.</b> 911 460 032</span>
                                        <b>Email: </b><a href='mailto:david.pascual@slink.com'>supportTeam@slink.com</a>
                                    </Form.Label>
                                    {/*Operation Centre*/}
                                    <Form.Label className='d-block'>
                                        <BsShop style={{fontSize: '3vh'}}/>
                                        <span style={{textDecorationLine: 'underline'}}> Operation Centre</span>
                                        <span className='d-block'>C/ Gran Vía, 34, 28013 Madrid</span>
                                        <span className='d-block'><b>Tel.</b> 949 870 186</span>
                                    </Form.Label>
                                    {/*Commercial Attention*/}
                                    <Form.Label className='d-block'>
                                        <BsTelephone style={{fontSize: '3vh'}}/>
                                        <span style={{textDecorationLine: 'underline'}}> Commercial Attention</span>
                                        <span className='d-block'><b>Tel.</b> 949 870 186 (<b>Not</b> client)</span>
                                        <span className='d-block'><b>Tel.</b> 949 870 000 (For client)</span>
                                    </Form.Label>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formProviderSecondColumn">
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
                                    {/*Service level*/}
                                    <Form.Label className="mt-3">{strings.formInformationMessage}*</Form.Label>
                                    <Form.Control as="textarea" rows={5}/>
                                </Form.Group>
                            </Row>
                        </Form>,
                    },
                    {
                        title: strings.formSLASpecification,
                        content: <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/*First row*/}
                            <Row className="mb-3">
                                <Form.Group as={Col}>
                                    <Form.Label className='d-block'>{strings.formSLASpecificationDuration}</Form.Label>
                                    <Form.Label>Initial date</Form.Label>
                                    <DatePicker onChange={onChangeDate}/>
                                    <Form.Label className='mt-3'><b>The defect duration of SLA is of 1 year, you have 3
                                        months since the initial date to cancel it for free.</b></Form.Label>
                                </Form.Group>
                                {/*Second row*/}
                                <Form.Group as={Col} assName="mb-3" controlId="formCoveredService">
                                    <Form.Label>{strings.formSLASpecificationClientCoveredServices}</Form.Label>
                                    {['checkbox'].map((type) => (
                                        <div key={type} className="mb-3">
                                            <Form.Check inline type={type} id={`Incidents-${type}`}>
                                                <Form.Check.Input type={type} isValid/>
                                                <Form.Check.Label
                                                    style={{marginLeft: '3px'}}>{`management of incidents`}</Form.Check.Label>
                                                <Form.Control.Feedback type='valid'>1,000€/month</Form.Control.Feedback>
                                            </Form.Check>
                                            <Form.Check inline type={type} id={`infrastructure-${type}`}>
                                                <Form.Check.Input type={type} isValid/>
                                                <Form.Check.Label
                                                    style={{marginLeft: '3px'}}>{`IT infrastructure management`}</Form.Check.Label>
                                                <Form.Control.Feedback type="valid">2,000€/month</Form.Control.Feedback>
                                            </Form.Check>
                                        </div>
                                    ))}
                                    <Form.Label>{strings.formSLASpecificationClientExtraServices}</Form.Label>
                                    {['checkbox'].map((type) => (
                                        <div key={type} className="mb-3">
                                            <Form.Check inline type={type} id={`weekendSupport-${type}`}>
                                                <Form.Check.Input type={type} isValid/>
                                                <Form.Check.Label
                                                    style={{marginLeft: '3px'}}>{`weekend/festival support`}</Form.Check.Label>
                                                <Form.Control.Feedback type='valid'>200€/day</Form.Control.Feedback>
                                            </Form.Check>
                                            <Form.Check inline type={type} id={`onsiteSupport-${type}`}>
                                                <Form.Check.Input type={type} isValid/>
                                                <Form.Check.Label
                                                    style={{marginLeft: '3px'}}>{`On-site support`}</Form.Check.Label>
                                                <Form.Control.Feedback type="valid">100€/time</Form.Control.Feedback>
                                            </Form.Check>
                                        </div>
                                    ))}
                                    <Form.Label>{strings.formSLASpecificationAutoRenewal}</Form.Label>
                                    {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                            <Form.Check
                                                inline
                                                label="Yes"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-1`}
                                            />
                                            <Form.Check
                                                inline
                                                label="No"
                                                name="group1"
                                                type={type}
                                                id={`inline-${type}-2`}
                                            />
                                        </div>
                                    ))}
                                    <Form.Label><b>You can cancel whenever you want until 2 months before the next
                                        renovation date.</b></Form.Label>
                                </Form.Group>
                            </Row>
                            {/*Sixth row*/}
                            <Row className="mb-3">
                                {/*Related files*/}
                                <Form.Group as={Col} controlId="formFile">
                                    <Form.Label>{strings.formSLASpecificationRelatedFiles}</Form.Label>
                                    <Form.Control type="file"/>
                                </Form.Group>
                            </Row>
                            {/*Seventh row*/}
                            <Row className="g-2 mb-3">
                                {/*Service hours*/}
                                <Form.Label>{strings.formSLASpecificationServiceHours}</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={type}>
                                        <Form.Check inline type={type} id={`morning-${type}`}>
                                            <Form.Check.Input type={type} isValid/>
                                            <Form.Check.Label
                                                style={{marginLeft: '3px'}}>{`morning (9h-14h)`}</Form.Check.Label>
                                            <Form.Control.Feedback type='valid'>300€</Form.Control.Feedback>
                                        </Form.Check>
                                        <Form.Check inline type={type} id={`afternoon-${type}`}>
                                            <Form.Check.Input type={type} isValid/>
                                            <Form.Check.Label
                                                style={{marginLeft: '3px'}}>{`afternoon (15h-20h)`}</Form.Check.Label>
                                            <Form.Control.Feedback type="valid">300€</Form.Control.Feedback>
                                        </Form.Check>
                                        <Form.Check inline type={type} id={`allday-${type}`}>
                                            <Form.Check.Input type={type} isValid/>
                                            <Form.Check.Label
                                                style={{marginLeft: '3px'}}>{`all day (9h-20h)`}</Form.Check.Label>
                                            <Form.Control.Feedback type="valid">600€</Form.Control.Feedback>
                                        </Form.Check>
                                    </div>
                                ))}
                            </Row>
                            {/*Eighth row*/}
                            <Row className="g-2">
                                {/*Licences*/}
                                <Form.Label>{strings.formSLASpecificationLicences}</Form.Label>
                                {['checkbox'].map((type) => (
                                    <div key={type}>
                                        <Form.Check inline type={type} id={`paidbyclient-${type}`}>
                                            <Form.Check.Input type={type} isValid/>
                                            <Form.Check.Label
                                                style={{marginLeft: '3px'}}>{`paid by client`}</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check inline type={type} id={`paidbyprovider-${type}`}>
                                            <Form.Check.Input type={type} isValid/>
                                            <Form.Check.Label
                                                style={{marginLeft: '3px'}}>{`paid by service provider (no costs for client)`}</Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check inline type={type} id={`paidbyproviderclient-${type}`}>
                                            <Form.Check.Input type={type} isValid/>
                                            <Form.Check.Label
                                                style={{marginLeft: '3px'}}>{`paid by service provider (charges for client after)`}</Form.Check.Label>
                                        </Form.Check>
                                    </div>
                                ))}
                            </Row>
                            {/*Service level*/}
                            <Form.Group className="mb-3 mt-3" controlId="formServiceLevel">
                                <Form.Label>{strings.formSLASpecificationServiceLevel}</Form.Label>
                                <Form.Control as="textarea" rows={3}/>
                            </Form.Group>
                            {/*Fourth row*/}
                            <Form.Label>{strings.formServiceAssuranceReport}</Form.Label>
                            <Row className="g-2">
                                {/*Report Period*/}
                                <Col md>
                                    <FloatingLabel controlId="formReportPeriod" label="Report Period">
                                        <Form.Select>
                                            <option>{strings.formServiceAssuranceChoosePeriod}</option>
                                            <option value="1"> every month - 500€</option>
                                            <option value="2"> every trimester - 450€</option>
                                            <option value="3"> every half year - 400€</option>
                                            <option value="4"> every year - 350€</option>
                                            <option value="5"> every 2 years - 300€</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingReportContent" label="Report Content">
                                        <Form.Control type="text"/>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            {/*Eighth row*/}
                            <Form.Label className="mt-3">{strings.formServiceAssuranceServiceBilling}</Form.Label>
                            <Row className="g-2">
                                {/*Service Billing*/}
                                <Col md>
                                    <FloatingLabel controlId="formBillingPeriod" label="Billing Period">
                                        <Form.Select>
                                            <option>{strings.formServiceAssuranceSelectServiceBilling}</option>
                                            <option value="1"> 1 month</option>
                                            <option value="2"> 1 trimester</option>
                                            <option value="3"> 6 months</option>
                                            <option value="4"> 1 year</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="formBillingMethod" label="Billing Method">
                                        <Form.Select>
                                            <option>{strings.formServiceAssuranceSelectBillingMethod}</option>
                                            <option value="1"> Cash</option>
                                            <option value="2"> Bank transfer</option>
                                            <option value="3"> Bank check</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Form.Group className="mt-3" controlId="formBasicCheckbox">
                                <Form.Check required type="checkbox" label={strings.formServiceAssurancePrivacidad} />
                                <p>Read the <a className="d-inline" href="/">legal notice and privacy policy</a>.</p>
                            </Form.Group>
                            <Button className="mt-3" variant="primary" type="submit">
                                {strings.formSubmit}
                            </Button>
                            <p class="text-danger mt-3">{strings.formFieldsAreMandatory}</p>
                        </Form>,
                    },
                ]}/>
            </section>
        </div>
    );
}

export default FormScreen;
