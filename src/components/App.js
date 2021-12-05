import {useState, useEffect} from 'react'
import logo from "../images/logo.jpg";
// import sun from "../images/icons8-sun-50.png";
import sun from "../images/icon-sun.svg";
// import moon from "../images/icons8-crescent-moon-50.png";
import moon from "../images/icon-moon.svg";
import Register from "./register/Register";
import PersonCard from "./PersonCard/PersonCard";
import RegisteredCardList from "./RegisteredCardList/RegisteredCardList";
import "./App.scss";

function App() {

  const[peopleDetailsArr, setpeopleDetailsArr] = useState([]);
  const LOCAL_STORAGE_KEY = "peopleDetailsArr";
  const personRegistered = (person) =>{
    setpeopleDetailsArr([
      {id:new Date(), ...person},
      ...peopleDetailsArr
    
    ])
    console.log(person)
  }
  const deletePerson = (ID) =>{
    const personID = peopleDetailsArr.filter(person  =>{
      return person.id !== ID;
    })
    setpeopleDetailsArr(personID)
  }
  // console.log(peopleDetailsArr)
  useEffect(() => {
  const receivedPeopleArr =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(receivedPeopleArr) setpeopleDetailsArr(receivedPeopleArr)
   }, [])
  useEffect(() => {
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(peopleDetailsArr))
  }, [peopleDetailsArr])
  return (
    <div className="App">
      <input className="inputCheckBox" type="checkbox" id="toggleIcon" />
      <header className="App-header">
        <img src={logo} className="App-header--logo" alt="logo" />
        <h1>online registration system</h1>
        <label htmlFor="toggleIcon" className="icons">
          <img src={moon} alt="sun logo" />
          <img src={sun} alt="sun logo" />
        </label>
      </header>
      <main className="App-main">
        <Register personRegistered={personRegistered}/>
        <RegisteredCardList peopleDetailsArr={peopleDetailsArr} getRegisteredCardID={deletePerson} />
        {/* <RegisteredCardList/>
        <PersonCard /> */}
      </main>
    </div>
  );
}

export default App;
