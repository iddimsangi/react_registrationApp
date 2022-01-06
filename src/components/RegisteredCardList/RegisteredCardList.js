import React from "react";
import { Link } from "react-router-dom"
import "./RegisteredCardList.scss";
import arrow from "../../images/icons8-left-arrow-60.png";
import searchIcon from "../../images/icons8-search-64.png";
import RegisteredCard from "./registeredCard/RegisteredCard";
// import PersonCard from "../PersonCard/PersonCard"
function RegisteredCardList(props) {
  // console.log(props);
const getCardId = (id) =>{
  props.getRegisteredCardID(id)
}
  const cardList = props.peopleDetailsArr.map(personObj =>{
    return <RegisteredCard person = {personObj} key={personObj.id} RegisteredCardID={getCardId} />
  })
  return (
    <div className="card-list">
      <div className="card-list-header">
        <Link to="/">
        <a href="#" className="btn-back">
          <img src={arrow} alt="arrow-left" /> back
        </a>
        </Link>
       
        <form action="#" className="form-group">
          <input className="input" type="text"></input>
          <img src={searchIcon} alt="arrow-left"/>
        </form>
      </div>
{cardList}
    </div>
  );
}

export default RegisteredCardList;
