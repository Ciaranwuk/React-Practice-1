import React from "react";
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  const contacts = [
    {
      heroPic:"https://via.placeholder.com/150",
      name: "Jenny Han",
      email: "jenny.han@notreal.com",
      age: 25
    },
    {
      heroPic:"https://via.placeholder.com/150",
      name: "Paul Jones",
      email: "paul.jones@notreal.com",
      age: 30      
    },
    {
      heroPic:"https://via.placeholder.com/150",
      name: "Peter Pan",
      email: "peter.pan@notreal.com",
      age: 80      
    }
  ];
  
  return(
    <div>
      {contacts.map((contact, index)=> {
        return(
          <ContactCard 
            key = {index}
            heroPic= {contact.heroPic}
            name= {contact.name}
            email= {contact.email} 
            age={contact.age}/>
        )
      })}
      {/*<ContactCard 
      heroPic="https://via.placeholder.com/150"
      name="Jenny Han" 
      email="jenny.han@notreal.com" 
      age={25}/>
      <ContactCard
      heroPic="https://via.placeholder.com/150"
      name="Paul Jones" 
      email="Paul.jones@notreal.com" 
      age={30}/>
      <ContactCard
      heroPic="https://via.placeholder.com/150"
      name="Peter Pan" 
      email="peter.pan@notreal.com" 
    age={80}/> */}
    </div>
    
  )
}

export default App;