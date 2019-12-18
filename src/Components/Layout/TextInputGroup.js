import React from "react";
import { FormGroup, Form } from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";
import TextInputValidation from "./TextInputValidation";
//import PropTypes from "prop-types";

const TextInputGroup = ({ content, type, onChange, Label, error }) => {
  return (
    <FormGroup controlId={"formBasicEmail"}>
      <Form.Label name={Label}>{Label}</Form.Label>
      <TextInputValidation
        content={content}
        type={type}
        onChange={onChange}
        Label={Label}
        error={error}
      ></TextInputValidation>
    </FormGroup>
  );
};

export default TextInputGroup;
