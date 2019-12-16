import React, { createRef, useContext, forwardRef } from "react";
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

  const nameInput = forwardRef();

  const submitForm = () => {
    const newContact = {
      id: uuid(),
      name: "nameInput.current.value,",
      email: "emailInput.current.value,",
      phone: "phoneInput.current.value"
    };
    console.log(newContact);
  };

  return (
    <Card className="mb-3">
      <Card.Header>Add Contact</Card.Header>
      <Card.Body>
        <Button variant="light" block={true} type="submit" value="Add Contact">
          Add Contact
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AddContact;
