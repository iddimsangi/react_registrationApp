import React from "react";
import "./PersonCard.scss";
import userImage from "../../images/man-1605445-1360765.png";
import arrowright from "../../images/icons8-right-arrow-60.png";
function PersonCard() {
  return (
    <div className="personal">
      {/* <a href="#" className="btn-back"></a> */}
      <div className="personal-card">
        <img src={userImage} alt="userImage" />
        <h1>
          Full Name <span>Email</span>
        </h1>
      </div>
      <a href="#" className="btn-back">
        list
        <img src={arrowright} alt="arrow-left" />
      </a>
    </div>
  );
}

export default PersonCard;
