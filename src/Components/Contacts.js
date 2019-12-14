import React, { useContext } from "react";
import Contact from "./Contact";
import { StateContext } from "../Context/UserContext";



const Contacts = () => {
    

  
  
  const{state} = useContext(StateContext);
  console.log(`From Contacts:${state.people}`);
  
    
  return (
    
    <div>
     {
       state.people.map(p =>(
        <Contact key={p.id} contact={p}/>
       ))
       
     }
    </div>
  );
};

export default Contacts;
