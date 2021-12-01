import '../styles/FormScreen.style.css';
import Header from "../../components/views/Header";
import TabsFormScreen from "./TabsFormScreen";
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {useState} from "react";

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

    return (
        <div className="App">
            <Header/>
            <section>
                <TabsFormScreen tabs={[
                    {
                        title: "Client Information",
                        content: <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/*First row*/}
                            <Row className="mb-3">
                                {/*DNI*/}
                                <Form.Group as={Col} controlId="formDNI">
                                    <Form.Label>DNI*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter DNI card number"/>
                                    <Form.Text className="text-muted">
                                        We'll never share this with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid DNI.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*FirstName*/}
                                <Form.Group as={Col} controlId="formFirstName">
                                    <Form.Label>First name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the first name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid first name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*LastName*/}
                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Label>Last name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the last name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid last name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            {/*Second row*/}
                            <Row className="g-2">
                                {/*Nationality*/}
                                <Col md>
                                    <FloatingLabel controlId="formNationality" label="Country of nationality">
                                        <Form.Select autoComplete={"country-name"}>
                                            <option>Choose ...</option>
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
                                            <option>Choose ...</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            {/*Third row*/}
                            <Row className="mb-3 mt-3">
                                {/*City*/}
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the city name"/>
                                </Form.Group>
                                {/*Province*/}
                                <Form.Group as={Col} controlId="formProvince">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the province name"/>
                                </Form.Group>
                            </Row>
                            {/*Fourth row*/}
                            <Row className="mb-3">
                                {/*Company name*/}
                                <Form.Group as={Col} controlId="formCompanyName">
                                    <Form.Label>Company name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the company name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid company name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*Company direction*/}
                                <Form.Group as={Col} controlId="formCompanyDirection">
                                    <Form.Label>Company direction*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the company direction"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid company direction.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*Company fiscal number*/}
                                <Form.Group as={Col} controlId="formFiscalNumber">
                                    <Form.Label>Company fiscal number*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the fiscal number"/>
                                    <Form.Text className="text-muted">
                                        We'll never share this with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid fiscal number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <p class="text-danger mt-3">Fields with * are mandatory in this form</p>
                        </Form>,
                    },
                    {
                        title: "Service Provider Information",
                        content: <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/*First row*/}
                            <Row className="mb-3">
                                {/*DNI*/}
                                <Form.Group as={Col} controlId="formDNI">
                                    <Form.Label>DNI*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter DNI card number"/>
                                    <Form.Text className="text-muted">
                                        We'll never share this with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid DNI.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*FirstName*/}
                                <Form.Group as={Col} controlId="formFirstName">
                                    <Form.Label>First name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the first name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid first name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*LastName*/}
                                <Form.Group as={Col} controlId="formLastName">
                                    <Form.Label>Last name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the last name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid last name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            {/*Second row*/}
                            <Row className="g-2">
                                {/*Nationality*/}
                                <Col md>
                                    <FloatingLabel controlId="formNationality" label="Country of nationality">
                                        <Form.Select aria-label="Floating label select example"
                                                     autoComplete={"country-name"}>
                                            <option>Choose ...</option>
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
                                            <option>Choose ...</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            {/*Third row*/}
                            <Row className="mb-3 mt-3">
                                {/*City*/}
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the city name"/>
                                </Form.Group>
                                {/*Province*/}
                                <Form.Group as={Col} controlId="formProvince">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control type="text" placeholder="Enter the province name"/>
                                </Form.Group>
                            </Row>
                            {/*Fourth row*/}
                            <Row className="mb-3">
                                {/*Company name*/}
                                <Form.Group as={Col} controlId="formCompanyName">
                                    <Form.Label>Company name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the company name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid company name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*Company direction*/}
                                <Form.Group as={Col} controlId="formCompanyDirection">
                                    <Form.Label>Company direction*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the company direction"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid company direction.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*Company fiscal number*/}
                                <Form.Group as={Col} controlId="formFiscalNumber">
                                    <Form.Label>Company fiscal number*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the fiscal number"/>
                                    <Form.Text className="text-muted">
                                        We'll never share this with anyone else.
                                    </Form.Text>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid fiscal number.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <p class="text-danger mt-3">Fields with * are mandatory in this form</p>
                        </Form>,
                    },
                    {
                        title: "SLA Specification",
                        content: <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/*First row*/}
                            <>
                                <Form.Label>SLA Duration</Form.Label>
                                <Form.Range min={0} max={100}/>
                            </>
                            {/*Second row*/}
                            <Form.Group className="mb-3" controlId="formCoveredService">
                                <Form.Label>Covered services</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            {/*Third row*/}
                            <Row className="mb-3">
                                <Form.Label>Client Contact</Form.Label>
                                {/*FirstName*/}
                                <Form.Group as={Col} controlId="formContactFirstName">
                                    <Form.Label>First name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the first name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid first name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*LastName*/}
                                <Form.Group as={Col} controlId="formContactLastName">
                                    <Form.Label>Last name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the last name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid last name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formContactEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formContactPhone">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="text" placeholder="+34600111222" />
                                </Form.Group>
                            </Row>
                            {/*Fourth row*/}
                            <Row className="mb-3">
                                <Form.Label>Service Provider Contact</Form.Label>
                                {/*FirstName*/}
                                <Form.Group as={Col} controlId="formContactFirstName">
                                    <Form.Label>First name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the first name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid first name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                {/*LastName*/}
                                <Form.Group as={Col} controlId="formContactLastName">
                                    <Form.Label>Last name*</Form.Label>
                                    <Form.Control required type="text" placeholder="Enter the last name"/>
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Please provide a valid last name.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            {/*Fifth row*/}
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formContactEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formContactPhone">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="text" placeholder="+34600111222" />
                                </Form.Group>
                            </Row>
                            {/*Sixth row*/}
                            <Row className="mb-3">
                                {/*Related files*/}
                                <Form.Group as={Col} controlId="formFile" className="mb-3">
                                    <Form.Label>SLA Related Files</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                            </Row>
                            {/*Seventh row*/}
                            <Row className="g-2">
                                {/*Initial Hour*/}
                                <Col md>
                                    <FloatingLabel controlId="formInitialHour" label="Service Initial Hour">
                                        <Form.Select>
                                            <option>Choose ...</option>
                                            <option value="1"> 0:00</option>
                                            <option value="2"> 0:30</option>
                                            <option value="3"> 1:00</option>
                                            <option value="4"> 1:30</option>
                                            <option value="5"> 2:00</option>
                                            <option value="6"> 2:30</option>
                                            <option value="7"> 3:00</option>
                                            <option value="8"> 3:30</option>
                                            <option value="9"> 4:00</option>
                                            <option value="10"> 4:30</option>
                                            <option value="11"> 5:00</option>
                                            <option value="12"> 5:30</option>
                                            <option value="13"> 6:00</option>
                                            <option value="14"> 6:30</option>
                                            <option value="15"> 7:00</option>
                                            <option value="16"> 7:30</option>
                                            <option value="17"> 8:00</option>
                                            <option value="18"> 8:30</option>
                                            <option value="19"> 9:00</option>
                                            <option value="20"> 9:30</option>
                                            <option value="21"> 10:00</option>
                                            <option value="22"> 10:30</option>
                                            <option value="23"> 11:00</option>
                                            <option value="24"> 11:30</option>
                                            <option value="25"> 12:00</option>
                                            <option value="26"> 12:30</option>
                                            <option value="27"> 13:00</option>
                                            <option value="28"> 13:30</option>
                                            <option value="29"> 14:00</option>
                                            <option value="30"> 14:30</option>
                                            <option value="31"> 15:00</option>
                                            <option value="32"> 15:30</option>
                                            <option value="33"> 16:00</option>
                                            <option value="34"> 16:30</option>
                                            <option value="35"> 17:00</option>
                                            <option value="36"> 17:30</option>
                                            <option value="37"> 18:00</option>
                                            <option value="38"> 18:30</option>
                                            <option value="39"> 19:00</option>
                                            <option value="40"> 19:30</option>
                                            <option value="41"> 20:00</option>
                                            <option value="42"> 20:30</option>
                                            <option value="43"> 21:00</option>
                                            <option value="44"> 21:30</option>
                                            <option value="45"> 22:00</option>
                                            <option value="46"> 22:30</option>
                                            <option value="47"> 23:00</option>
                                            <option value="48"> 23:30</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                {/*Final Hour*/}
                                <Col md>
                                    <FloatingLabel controlId="formFinalHour" label="Service Final Hour">
                                        <Form.Select>
                                            <option>Choose ...</option>
                                            <option value="1"> 0:00</option>
                                            <option value="2"> 0:30</option>
                                            <option value="3"> 1:00</option>
                                            <option value="4"> 1:30</option>
                                            <option value="5"> 2:00</option>
                                            <option value="6"> 2:30</option>
                                            <option value="7"> 3:00</option>
                                            <option value="8"> 3:30</option>
                                            <option value="9"> 4:00</option>
                                            <option value="10"> 4:30</option>
                                            <option value="11"> 5:00</option>
                                            <option value="12"> 5:30</option>
                                            <option value="13"> 6:00</option>
                                            <option value="14"> 6:30</option>
                                            <option value="15"> 7:00</option>
                                            <option value="16"> 7:30</option>
                                            <option value="17"> 8:00</option>
                                            <option value="18"> 8:30</option>
                                            <option value="19"> 9:00</option>
                                            <option value="20"> 9:30</option>
                                            <option value="21"> 10:00</option>
                                            <option value="22"> 10:30</option>
                                            <option value="23"> 11:00</option>
                                            <option value="24"> 11:30</option>
                                            <option value="25"> 12:00</option>
                                            <option value="26"> 12:30</option>
                                            <option value="27"> 13:00</option>
                                            <option value="28"> 13:30</option>
                                            <option value="29"> 14:00</option>
                                            <option value="30"> 14:30</option>
                                            <option value="31"> 15:00</option>
                                            <option value="32"> 15:30</option>
                                            <option value="33"> 16:00</option>
                                            <option value="34"> 16:30</option>
                                            <option value="35"> 17:00</option>
                                            <option value="36"> 17:30</option>
                                            <option value="37"> 18:00</option>
                                            <option value="38"> 18:30</option>
                                            <option value="39"> 19:00</option>
                                            <option value="40"> 19:30</option>
                                            <option value="41"> 20:00</option>
                                            <option value="42"> 20:30</option>
                                            <option value="43"> 21:00</option>
                                            <option value="44"> 21:30</option>
                                            <option value="45"> 22:00</option>
                                            <option value="46"> 22:30</option>
                                            <option value="47"> 23:00</option>
                                            <option value="48"> 23:30</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            {/*Service level*/}
                            <Form.Group className="mb-3 mt-3" controlId="formServiceLevel">
                                <Form.Label>Service Level</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            {/*Exclusions*/}
                            <Form.Group className="mb-3" controlId="formServiceExclusion">
                                <Form.Label>Service Exclusions</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button className="mt-3" variant="primary" type="submit">
                                Submit
                            </Button>
                            <p class="text-danger mt-3">Fields with * are mandatory in this form</p>
                        </Form>,
                    },
                    {
                        title: "Service Assurance",
                        content: <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/*First row*/}
                            <Form.Group className="mb-3" controlId="formComplaintProcedure">
                                <Form.Label>Complaint Procedure</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            {/*Second row*/}
                            <Form.Group className="mb-3" controlId="formPerformancePenalty">
                                <Form.Label>Performance Penalty</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            {/*Third row*/}
                            <Form.Group className="mb-3" controlId="formOperatingSafety">
                                <Form.Label>Operating Safety</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            {/*Fourth row*/}
                            <Form.Label>Report</Form.Label>
                            <Row className="g-2">
                                {/*Report Period*/}
                                <Col md>
                                    <FloatingLabel controlId="formReportPeriod" label="Report Period">
                                        <Form.Select>
                                            <option>Choose ...</option>
                                            <option value="1"> 1 month</option>
                                            <option value="2"> 1 trimester</option>
                                            <option value="3"> 6 months</option>
                                            <option value="4"> 1 year</option>
                                            <option value="5"> 2 years</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingReportContent" label="Report Content">
                                        <Form.Control type="text" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Form.Floating className="mt-3 mb-3">
                                <Form.Control
                                    id="floatingReportEmail"
                                    type="email"
                                    placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputCustom">Report Recipient Email</label>
                            </Form.Floating>
                            {/*Fifth row*/}
                            <Form.Group className="mb-3" controlId="formIncidentManagement">
                                <Form.Label>Incident Management</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            {/*Sixth row*/}
                            <Form.Group className="mb-3" controlId="formConfidentiality">
                                <Form.Label>Confidentiality</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            {/*Seventh row*/}
                            <Form.Label>Service Monitoring</Form.Label>
                            <Row className="g-2">
                                {/*Service Monitoring*/}
                                <Col md>
                                    <FloatingLabel controlId="formMonitoring" label="Monitoring Period">
                                        <Form.Select>
                                            <option>Choose ...</option>
                                            <option value="0"> 1 week</option>
                                            <option value="1"> 2 weeks</option>
                                            <option value="2"> 1 month</option>
                                            <option value="3"> 1 trimester</option>
                                            <option value="4"> 6 months</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                                <Col md>
                                    <FloatingLabel controlId="floatingMonitoringMethod" label="Monitoring Method">
                                        <Form.Control type="text" />
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            {/*Eighth row*/}
                            <Form.Label>Service Billing</Form.Label>
                            <Row className="g-2">
                                {/*Service Billing*/}
                                <Col md>
                                    <FloatingLabel controlId="formBillingPeriod" label="Billing Period">
                                        <Form.Select>
                                            <option>Choose ...</option>
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
                                            <option>Choose ...</option>
                                            <option value="1"> Cash</option>
                                            <option value="2"> Bank transfer</option>
                                            <option value="3"> Bank check</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Button className="mt-3" variant="primary" type="submit">
                                Submit
                            </Button>
                            <p class="text-danger mt-3">Fields with * are mandatory in this form</p>
                        </Form>,
                    },
                ]}/>
            </section>
        </div>
    );
}

export default FormScreen;
