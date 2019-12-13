import React, { useContext } from "react";
import Contact from "./Contact";

import {StateContext} from '../Context/UserContext';



const Contacts = () => {
    
  const people = useContext(StateContext); 
  console.log(people);
  
    
  return (
    
    <div>
     {
       people.map(p =>(
        <Contact key={p.id} contact={p}/>
       ))
       
     }
    </div>
  );
};

export default Contacts;
