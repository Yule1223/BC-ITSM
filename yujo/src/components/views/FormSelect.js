import '../styles/Header.style.css';
import {Form} from "react-bootstrap";
import React from "react";

function FormSelect(props) {
    return (
        <Form.Select
            onChange={(e) => props.onOptionSelected(e.target.value)}
            value={props.index}
            debounceTimeout={300}
            name='c'
        >
            <option key={-1} value={-1}>{props.defaultLabel}</option>
            {props.options.map((option, index) =>
                <option key={index} value={index}>{props.renderLabel(option)}</option>
            )}
        </Form.Select>
    );
}

export default FormSelect;
