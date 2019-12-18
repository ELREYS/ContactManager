import React from "react";

import { Form } from "react-bootstrap";

const TextInputValidation = ({ content, type, onChange, Label, error }) => {
  return (
    <>
      <Form.Control
        size="lg"
        type={type}
        name={Label}
        placeholder={`Enter ${Label}`}
        value={content}
        onChange={value => onChange(value)}
        isInvalid={error}
      ></Form.Control>
      <Form.Control.Feedback type={"invalid"}>
        {Label} is required
      </Form.Control.Feedback>
    </>
  );
};

export default TextInputValidation;
