import React from "react";
import { Link, useLocation } from "react-router-dom"
import "./PersonCard.scss";
import userImage from "../../images/man-1605445-1360765.png";
import arrowright from "../../images/icons8-right-arrow-60.png";
function PersonCard(props) {
  const location = useLocation()
  console.log(location.state.fullName);
  return (
    <div className="personal">
      {/* <a href="#" className="btn-back"></a> */}
      <div className="personal-card">
        <img src={userImage} alt="userImage" />
        <h1>
          {location.state.fullName} <span>{location.state.emailAddress}</span>
        </h1>
      </div>
      <Link to="/RegisteredList">
      
      <a href="#" className="btn-back">
        list
        <img src={arrowright} alt="arrow-left" />
      </a>
      </Link>

    </div>
  );
}

export default PersonCard;
