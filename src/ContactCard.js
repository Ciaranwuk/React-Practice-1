import React, { useState } from 'react';

const ContactCard = (props) => {
    const [showAge, setShowAge] = useState(false);

    return(
        <div className="contact-card">
        <img src={props.heroPic} 
        alt="profile"></img>
        <div className="user-details">
          <p>Name: {props.name}</p>
          <p>Email: {props.email}</p>
          <button onClick={()=> setShowAge(!showAge)}>Show Age</button>
          {showAge ? <p>Age: {props.age}</p> : null}
        </div>
      </div>
    )
}

export default ContactCard