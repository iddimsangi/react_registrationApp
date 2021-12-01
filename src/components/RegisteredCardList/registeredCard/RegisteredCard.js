import React from "react";
import "./RegisteredCard.scss";
import user from "../../../images/icons8-user-100.png";
import trash from "../../../images/icons8-trash.svg";
function RegisteredCard() {
  return (
    <div className="card">
      <div>
        <img src={user} alt="user" />
        <h3>
          full Name
          <span>email Address</span>
        </h3>
      </div>
      <img src={trash} alt="trush" />
    </div>
  );
}

export default RegisteredCard;
