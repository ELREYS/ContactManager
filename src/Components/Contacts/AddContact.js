import React, { useContext, useReducer } from "react";
import { Card, FormGroup, Button } from "react-bootstrap";
import TextInputGroup from "../Layout/TextInputGroup";
import { StateContext } from "../../Context/UserContext";
import uuid from "uuid";

const AddContact = () => {
  const context = useContext(StateContext);

  const initialState = {
    id: "",
    name: "Giuseppe Di Lisa",
    email: "gdilisa@hotmail.com",
    phone: "+41787945646546546"
  };

  const reducer = (state, action) => {
    //console.log(value.target.name);

    switch (action.type) {
      case "Name":
        return { ...state, name: action.payload };
      case "Email":
        return { ...state, email: action.payload };
      case "Phone":
        return { ...state, phone: action.payload };
      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = event => {
    dispatch({
      type: event.currentTarget.name,
      payload: event.currentTarget.value
    });
  };

  const submitForm = values => {
    console.log("VALUES:" + { values });
    const newContact = {
      id: uuid(),
      name: values.name,
      email: values.email,
      phone: values.phone
    };
    console.log(newContact);
    context.dispatch({ type: "ADD_CONTACT", payload: newContact });
  };

  console.log("INIT_______INIT");
  console.log(state.name, state.email, state.phone);

  return (
    <Card className="mb-3">
      <Card.Header>Add Contact</Card.Header>
      <Card.Body>
        <FormGroup>
          <TextInputGroup
            content={state.name}
            type={"text"}
            Label={"Name"}
            onChange={onChange}
          ></TextInputGroup>
          <TextInputGroup
            content={state.email}
            type={"text"}
            Label={"Email"}
            onChange={onChange}
          ></TextInputGroup>
          <TextInputGroup
            content={state.phone}
            type={"text"}
            Label={"Phone"}
            onChange={onChange}
          ></TextInputGroup>
          <Button
            variant="light"
            block={true}
            type="submit"
            onClick={result => submitForm(state)}
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
