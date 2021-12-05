import React from "react";
import "./RegisteredCard.scss";
import user from "../../../images/icons8-user-100.png";
import trash from "../../../images/icons8-trash.svg";
function RegisteredCard(props) {
  const{fullName, emailAddress, id} = props.person;
  console.log(fullName);

  return (
    <div className="card">
      <div>
        <img src={user} alt="user" />
        <h3>
        {fullName}
          <span>{emailAddress}</span>
        </h3>
      </div>
      <img src={trash} alt="trush" onClick={() => props.RegisteredCardID(id)} />
    </div>
  );
}

export default RegisteredCard;
