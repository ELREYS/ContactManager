import React, { useReducer, createContext } from "react";

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

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      console.log(`Delete in UserContext this id:${action.payload}`);
      console.log(state);

      return {
        ...state,
        people: state.people.filter(contact => contact.id !== action.payload)
      };

    case "ADD_CONTACT":
      console.log(action.payload);

      return {
        ...state,
        people: [action.payload, ...state.people]
      };

    default:
      return state;
  }
};

export const StateContext = createContext();
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { people });
  console.log(state.people);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
