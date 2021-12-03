import React from "react";
import "./RegisteredCard.scss";
import user from "../../../images/icons8-user-100.png";
import trash from "../../../images/icons8-trash.svg";
function RegisteredCard(props) {
  const{fullName, emailAddress} = props.person;
  console.log(fullName)
  // console.log(props)
  return (
    <div className="card">
      <div>
        <img src={user} alt="user" />
        <h3>
        {fullName}
          <span>{emailAddress}</span>
        </h3>
      </div>
      <img src={trash} alt="trush" />
    </div>
  );
}

export default RegisteredCard;
