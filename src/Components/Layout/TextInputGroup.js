import React from "react";
import { FormGroup, Form } from "react-bootstrap";
//import PropTypes from "prop-types";

const TextInputGroup = ({ content, type, onChange, Label }) => {
  return (
    <FormGroup controlId={Label}>
      <Form.Label name={Label}>{Label}</Form.Label>
      <Form.Control
        size="lg"
        type={type}
        name={Label}
        placeholder={`${type}`}
        value={content}
        onChange={value => onChange(value)}
      ></Form.Control>
    </FormGroup>
  );
};

export default TextInputGroup;
