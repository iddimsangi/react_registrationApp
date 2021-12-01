import React from "react";
import "./RegisteredCardList.scss";
import arrow from "../../images/icons8-left-arrow-60.png";
import searchIcon from "../../images/icons8-search-64.png";
import RegisteredCard from "./registeredCard/RegisteredCard";
function RegisteredCardList() {
  return (
    <div className="card-list">
      <div className="card-list-header">
        <a href="#" className="btn">
          <img src={arrow} alt="arrow-left" /> back
        </a>
        <form action="#" className="form-group">
        <input className="input" type="text" ></input>
        <img src={searchIcon} alt="arrow-left" /> 
        </form>
        
      </div>
 
      <RegisteredCard />
    </div>
  );
}

export default RegisteredCardList;
