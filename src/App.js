import React from "react";
import Header from "./Components/Header";
import Contacts from "./Components/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Header title="Contact Manager"></Header>
      <Container>
        <Contacts
          name="Giuseppe"
          email="gdilisa@hotmail.com"
          phone="+417678945613"
        ></Contacts>
        <Contacts
          name="Sarah"
          email="sfenton@hotmail.com"
          phone="+417678945613"
        ></Contacts>
      </Container>
    </div>
  );
}

export default App;
