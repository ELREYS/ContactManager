import React, { createRef, useContext } from "react";
import { Card, FormGroup, Form, Button } from "react-bootstrap";
import { StateContext } from "../../Context/UserContext";
import uuid from "uuid";

const defaultProps = {
  name: "Giuseppe Di Lisa",
  email: "gdilisa@homail.com",
  phone: "+4176845786"
};

const AddContact = () => {
  const context = useContext(StateContext);

  const { dispatch } = context;

  const { name, email, phone } = defaultProps;

  const nameInput = createRef(null);
  const emailInput = createRef(null);
  const phoneInput = createRef(null);

  const submitForm = () => {
    const newContact = {
      id: uuid(),
      name: nameInput.current.value,
      email: emailInput.current.value,
      phone: phoneInput.current.value
    };
    console.log(newContact);

    dispatch({ type: "ADD_CONTACT", payload: newContact });
  };

  return (
    <Card className="mb-3">
      <Card.Header>Add Contact</Card.Header>
      <Card.Body>
        <FormGroup controlId="formName">
          <Form.Label name="name">Name</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            name="name"
            placeholder="Enter  Name .."
            defaultValue={name}
            ref={nameInput}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Label name="email">Email</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            name="email"
            placeholder="Enter  Email .."
            defaultValue={email}
            ref={emailInput}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Label name="phone">Phone</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            name="phone"
            placeholder="Enter  Phone .."
            defaultValue={phone}
            ref={phoneInput}
          ></Form.Control>
          <Button
            variant="light"
            block={true}
            type="submit"
            onClick={result => submitForm()}
            value="Add Contact"
          >
            Add Contact
          </Button>
        </FormGroup>
      </Card.Body>
    </Card>
  );
};

export default AddContact;
