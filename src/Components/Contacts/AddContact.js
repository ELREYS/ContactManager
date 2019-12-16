import React, { useState, useContext } from "react";
import { Card, FormGroup, Form, Button } from "react-bootstrap";
import TextInputGroup from "../Layout/TextInputGroup";
import { StateContext } from "../../Context/UserContext";
import uuid from "uuid";

const AddContact = () => {
  const context = useContext(StateContext);

  const [name, setName] = useState("Hans Muster");
  const [email, setEmail] = useState("test@gmail.com");
  const [phone, setPhone] = useState("+4178974565");

  const onChange = value => {
    console.log(value.target.name);

    switch (value.target.name) {
      case "Name":
        setName(value.target.value);
        break;
      case "Email":
        setEmail(value.target.value);
        break;
      case "Phone":
        setPhone(value.target.value);
        break;

      default:
        break;
    }
  };

  const submitForm = values => {
    console.log(values);
    const newContact = {
      id: uuid(),
      name: values.name,
      email: values.email,
      phone: values.phone
    };
    console.log(newContact);

    context.dispatch({ type: "ADD_CONTACT", payload: newContact });
  };

  return (
    <Card className="mb-3">
      <Card.Header>Add Contact</Card.Header>
      <Card.Body>
        <FormGroup>
          <TextInputGroup
            type={"Name"}
            defaultValue={name}
            onChange={onChange}
          ></TextInputGroup>
          <TextInputGroup
            value={email}
            type={"Email"}
            defaultValue={email}
            onChange={onChange}
          ></TextInputGroup>
          <TextInputGroup
            value={name}
            type={"Phone"}
            defaultValue={phone}
            onChange={onChange}
          ></TextInputGroup>
          <Button
            variant="light"
            block={true}
            type="submit"
            onClick={result => submitForm({ name, email, phone })}
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
