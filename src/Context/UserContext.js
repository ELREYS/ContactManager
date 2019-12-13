import React, { useReducer, createContext, useContext } from 'react';


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



export const  StateContext = createContext();
export const  StateProvider = ({reducer,initialState,children}) =>{

   return( <StateContext.Provider value={people}>
        {children}
    </StateContext.Provider>)
}

export const useStateValue = () => useContext(StateContext);