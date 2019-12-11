import React from "react";
import Header from "./Components/Header";
import Contact from "./Components/Contact";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div className="App">
      <Header title="Contact Manager"></Header>
      <Container>
        <Contacts />
      </Container>
    </div>
  );
}

export default App;
