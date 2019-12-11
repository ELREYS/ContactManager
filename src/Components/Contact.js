import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa";

const Contact = ({ contact }) => {
  const [show, setShow] = useState();

  const showDetail = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <Card>
      <Card.Body className="mb-3">
        <h4>
          {contact.name}
          <FaAngleDown onClick={() => showDetail()} />
        </h4>
        {show ? (
          <ListGroup>
            <ListGroup.Item>
              <div>email: {contact.email}</div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div>Phone: {contact.phone}</div>
            </ListGroup.Item>
          </ListGroup>
        ) : null}
      </Card.Body>
    </Card>
  );
};

const title = {
  fontSize: 20
};

export default Contact;
