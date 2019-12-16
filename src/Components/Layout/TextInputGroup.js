import React from "react";
import { FormGroup, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const TextInputGroup = ({ type, defaultValue, onChange }) => {
  return (
    <FormGroup controlId="formName">
      <Form.Label name="name">{type}</Form.Label>
      <Form.Control
        size="lg"
        type={type}
        name={type}
        placeholder={`${type}`}
        value={defaultValue}
        onChange={value => onChange(value)}
      ></Form.Control>
    </FormGroup>
  );
};

TextInputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextInputGroup;
