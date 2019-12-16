import React, { useState } from "react";
import { Card, FormGroup, Form, Button } from "react-bootstrap";

const AddContact = () => {
  const [name, setName] = useState("Hans Muster");
  const [email, setEmail] = useState("hmuster@gmail.com");
  const [phone, setPhone] = useState("+4176888888");

  return (
    <Card className="mb-3">
      <Card.Header>Add Contact</Card.Header>
      <Card.Body>
        <FormGroup controlId="formName">
          <Form.Label name="name">Name</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            name="Name"
            placeholder="Enter  Name .."
            value={name}
            onChange={value => setName(value.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Label name="email">Email</Form.Label>
          <Form.Control
            size="lg"
            type="email"
            name="email"
            placeholder="Enter  Email .."
            value={email}
            isValid={false}
            onChange={value => setEmail(value.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup>
          <Form.Label name="phone">Phone</Form.Label>
          <Form.Control
            size="lg"
            type="text"
            name="phone"
            placeholder="Enter  Phone .."
            value={phone}
            onChange={value => setPhone(value.target.value)}
          ></Form.Control>
          <Button
            variant="light"
            block={true}
            type="submit"
            onClick={result => {}}
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
