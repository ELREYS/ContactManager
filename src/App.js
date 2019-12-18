import React from "react";
import Header from "./Components/Layout/Header";
import Contacts from "./Components/Contacts/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

import { StateProvider } from "../src/Context/UserContext";
import AddContact from "./Components/Contacts/AddContact";
import About from "./Components/pages/About";

function App() {
  return (
    <StateProvider>
      <Router>
        <div className="App">
          <Header title="Contact Manager"></Header>
          <Container>
            <Switch>
              <Route exact path="/" component={Contacts}></Route>
              <Route exact path="/contact/add" component={AddContact}></Route>
              <Route exact path="/About" component={About}></Route>
            </Switch>
          </Container>
        </div>
      </Router>
    </StateProvider>
  );
}

export default App;
