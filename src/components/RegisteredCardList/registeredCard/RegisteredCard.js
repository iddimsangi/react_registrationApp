import React from "react";
import { Link } from "react-router-dom"
import "./RegisteredCard.scss";
import user from "../../../images/icons8-user-100.png";
import trash from "../../../images/icons8-trash.svg";
function RegisteredCard(props) {
  const{fullName, emailAddress, id} = props.person;
  console.log(fullName);
  return (
    <div className="card" >
      <Link to={{pathname:`/RegisteredList${id}`, state: {person: props.person}}} >
      <div>
        <img src={user} alt="user" />
        <h3>
        {fullName}
          <span>{emailAddress}</span>
        </h3>
      </div>
      </Link>
    
      <img src={trash} alt="trush" onClick={() => props.RegisteredCardID(id)} />
    </div>
  );
}

export default RegisteredCard;
