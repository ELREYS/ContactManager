import React from "react";
import Header from "./Components/Header";
import Contacts from "./Components/Contacts";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import {StateProvider} from '../src/Context/UserContext';

function App() {
  return (
    <StateProvider>
    <div className="App">
      <Header title="Contact Manager"></Header>
      <Container>
        <Contacts />
      </Container>
    </div>
    </StateProvider>
  );
}

export default App;
