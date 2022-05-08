import React, { useState , useEffect } from "react";
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResults(data.results)
      });
  }, []);
    
  return(
    <div>
      {contacts.map((result, index)=> {
        return(
          <ContactCard 
            key = {index}
            heroPic= {result.picture.large}
            name= {result.first}
            email= {result.email} 
            age={result.dob.age}/>
        )
      })};      
    </div>    
  )
}
export default App;