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
            <Route path="/dashboard" element={<EntitiesListScreenController />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
