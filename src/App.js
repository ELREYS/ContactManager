import React from "react";
import Header from "./Components/Layout/Header";
import Contacts from "./Components/Contacts/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { StateProvider } from "../src/Context/UserContext";
import AddContact from "./Components/Contacts/AddContact";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Header title="Contact Manager"></Header>
        <Container>
          <AddContact />
          <Contacts />
        </Container>
      </div>
    </StateProvider>
  );
}

export default App;
