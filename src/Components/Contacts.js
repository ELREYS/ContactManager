import React from "react";
import { Card, ListGroup } from "react-bootstrap";

const Contacts = ({ name, email, phone }) => {
  return (
    <Card>
      <Card.Body className="mb-3">
        <h4>{name}</h4>
        <ListGroup>
          <ListGroup.Item>
            <div>{email}</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>{phone}</div>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

const title = {
  fontSize: 20
};

export default Contacts;
