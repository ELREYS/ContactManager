import React, { useState } from "react";
import Contact from "./Contact";

const Contacts = () => {
  const people = [
    {
      id: 1,
      name: "Giuseppe Di Lisa",
      email: "gdilisa@hotmail.com",
      phone: "14885"
    },

    {
      id: 2,
      name: "Sarah Fenton",
      email: "sarah@hotmail.com",
      phone: "4751411"
    },

    {
      id: 3,
      name: "Bob Marley",
      email: "bob@hotmail.com",
      phone: "1242"
    }
  ];

  return (
    <div>
      {people.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
