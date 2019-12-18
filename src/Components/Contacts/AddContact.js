import React, { useContext, useReducer } from "react";
import { Card, FormGroup, Button } from "react-bootstrap";
import TextInputGroup from "../Layout/TextInputGroup";
import { StateContext } from "../../Context/UserContext";
import uuid from "uuid";

const AddContact = () => {
  const context = useContext(StateContext);

  const initialState = {
    id: "",
    name: "",
    email: "",
    phone: "",
    errors: { name: null, email: null, phone: null }
  };

  const reducer = (state, action) => {
    //console.log(value.target.name);

    switch (action.type) {
      case "Name":
        console.log(action.payload.errorStatus);

        return {
          ...state,
          name: action.payload.changedText,
          errors: { name: action.payload.errorStatus }
        };
      case "Email":
        return {
          ...state,
          email: action.payload.changedText,
          errors: { email: action.payload.errorStatus }
        };
      case "Phone":
        return {
          ...state,
          phone: action.payload.changedText,
          errors: { phone: action.payload.errorStatus }
        };
      default:
        break;
    }
  };

  const checkIfFielsEmpty = state => {
    return state.length < 1 ? true : false;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const onChange = event => {
    const state = checkIfFielsEmpty(event.currentTarget.value);
    console.log(state);

    console.log(event.currentTarget);

    dispatch({
      type: event.currentTarget.name,
      payload: { changedText: event.currentTarget.value, errorStatus: state }
    });
  };

  const submitForm = values => {
    console.log("VALUES:");
    console.log(values);

    const { name, email, phone } = values;

    if (name === "") {
      dispatch({
        type: "Name",
        payload: { changedText: "", errorStatus: true }
      });
      return;
    }
    if (email === "") {
      dispatch({
        type: "Email",
        payload: { changedText: "", errorStatus: true }
      });
      return;
    }
    if (phone === "") {
      dispatch({
        type: "Phone",
        payload: { changedText: "", errorStatus: true }
      });
      return;
    } else {
      const newContact = {
        id: uuid(),
        name: values.name,
        email: values.email,
        phone: values.phone
      };
      console.log("ADD CONTACTS");
      context.dispatch({ type: "ADD_CONTACT", payload: newContact });
    }
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
            error={state.errors.name}
          ></TextInputGroup>
          <TextInputGroup
            content={state.email}
            type={"email"}
            Label={"Email"}
            onChange={onChange}
            error={state.errors.email}
          ></TextInputGroup>
          <TextInputGroup
            content={state.phone}
            type={"text"}
            Label={"Phone"}
            onChange={onChange}
            error={state.errors.phone}
          ></TextInputGroup>
          <Button
            variant="light"
            block={true}
            type="submit"
            onClick={() => submitForm(state)}
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
