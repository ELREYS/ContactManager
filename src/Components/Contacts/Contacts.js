import React, { useContext, Fragment } from "react";
import Contact from "../Contacts/Contact";
import { StateContext } from "../../Context/UserContext";
import { FormLabel } from "react-bootstrap";

const Contacts = () => {
  const { state } = useContext(StateContext);
  console.log(`From Contacts:${state.people}`);

  return (
    <Fragment>
      <FormLabel className={"display-4 mb-2"}>
        <span className={"text-danger"}>Contact </span>
        <FormLabel>List</FormLabel>
      </FormLabel>

      {state.people.map(p => (
        <Contact key={p.id} contact={p} />
      ))}
    </Fragment>
  );
};

export default Contacts;
