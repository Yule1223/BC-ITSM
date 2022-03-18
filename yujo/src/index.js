import { render } from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import FormScreenController from "./screens/controllers/FormScreenController";
import PolicyScreenController from "./screens/controllers/PolicyScreenController";
import KnowUsScreenController from "./screens/controllers/KnowUsScreenController";
import EntitiesListScreenController from "./screens/controllers/EntitiesListScreenController";
import {COMPANY_ENTITY, CUSTOMER_ENTITY, SLA_ENTITY} from "./config";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/form" element={<FormScreenController />} />
            <Route path="/form/policy" element={<PolicyScreenController />} />
            <Route path="/knowUs" element={<KnowUsScreenController />} />
            <Route path="/customers" element={<EntitiesListScreenController entity={CUSTOMER_ENTITY} />} />
            <Route path="/companies" element={<EntitiesListScreenController entity={COMPANY_ENTITY} />} />
            <Route path="/slas" element={<EntitiesListScreenController entity={SLA_ENTITY} />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
