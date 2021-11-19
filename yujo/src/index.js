import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import FormScreenController from "./screens/controllers/FormScreenController";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/form" element={<FormScreenController />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
