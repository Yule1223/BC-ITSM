import '../styles/PolicyScreen.style.css';
import {Button, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import strings from "../../strings";
import FormScreen from "./FormScreen";

function PolicyScreen() {
    return (
        <div className="w-75 m-lg-auto">
            <h2 className="text-center">Legal notice and privacy policy</h2>
            <h3 className="text-center">Legal notice</h3>
            <p>The defect duration of our SLA is of 1 year, you have 3 months since the initial date to cancel it for free.
                Also you can cancel whenever you want the next year's service until 2 months before the next renovation date.
                <br/>The automatic renewal is totally up to you.
                <br/>All the prices showed on our website are general prices, if you have specific request, do not hesitate to contact us.
                Also the service hours are general hours, we can change them to fit your needs.
            </p>
            <h3 className="text-center">Privacy policy</h3>
            <p>We will never share your sensitive data with anyone else</p>
            <h5 className="d-inline">Sensitive data </h5>
            <p className="d-inline">
                includes: DNI, First name and last name, email address, phone number, company information
            </p>

        </div>
    )
}

export default PolicyScreen;
