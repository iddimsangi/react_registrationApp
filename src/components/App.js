import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import Register from "./register/Register";
import PersonCard from "./PersonCard/PersonCard"
import RegisteredCardList from "./RegisteredCardList/RegisteredCardList";
import axios from "axios"
import "./App.scss";

function App() {
  const [peopleDetailsArr, setpeopleDetailsArr] = useState([]);
  const LOCAL_STORAGE_KEY = "peopleDetailsArr";
  const personRegistered = (person) => {
    const request = {
      id:new Date(),
      ...person
    }
    axios.post("http://localhost:3006/peopleDetailsArr", request)
    .then(response => {
      setpeopleDetailsArr([response.data, ...peopleDetailsArr]);
    })
   
    console.log(person);
  };
  const deletePerson = (ID) => {
    axios.delete(`http://localhost:3006/peopleDetailsArr${ID}`)
    const personID = peopleDetailsArr.filter((person) => {
      return person.id !== ID;
    });
    setpeopleDetailsArr(personID);
  };

  const receivedData = () =>{
    axios.get("http://localhost:3006/peopleDetailsArr")
    .then(response =>{
      // console.log(response.data)
      setpeopleDetailsArr(response.data);
      return response.data;
    })
  }
  useEffect(() => {
    const receivedPeopleArr = receivedData();
    if (receivedPeopleArr) setpeopleDetailsArr(receivedPeopleArr);
    // const receivedPeopleArr = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY)
    // );
    // if (receivedPeopleArr) setpeopleDetailsArr(receivedPeopleArr);
  }, []);
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(peopleDetailsArr));
  }, [peopleDetailsArr]);
  return (
    <div className="App">
      <input type="checkbox" id="toggleIcon" className="inputCheckBox"/>
      <Router>
        {/* <input className="inputCheckBox" type="checkbox" id="toggleIcon" /> */}
        <header className="App-header">
          <img src={logo} className="App-header--logo" alt="logo" />
          <h1>online registration system</h1>
          <label htmlFor="toggleIcon" className="icons">
            <img src={moon} alt="sun logo" />
            <img src={sun} alt="sun logo" />
          </label>
        </header>
        <main className="App-main">
          <Routes>
            <Route
              exact
              path="/"
              exact
              element={<Register personRegistered={personRegistered} />}
            />
            <Route
              path="/RegisteredList"
              exact
              element={
                <RegisteredCardList
                  peopleDetailsArr={peopleDetailsArr}
                  getRegisteredCardID={deletePerson}
                />
              }
            />
              <Route
              path="/RegisteredList/:id"
          
              element={
                <PersonCard/>
              }
            />
            {/* <Route exact path='/' element={<RegisteredCardList />} /> */}
            {/* <Route path="/" exact render={(props) =>( <RegisteredCardList {...props}
          peopleDetailsArr={peopleDetailsArr}
          getRegisteredCardID={deletePerson}
        />)} /> */}
          </Routes>
          {/* <Register personRegistered={personRegistered} />
        <RegisteredCardList
          peopleDetailsArr={peopleDetailsArr}
          getRegisteredCardID={deletePerson}
        /> */}
        </main>
      </Router>
    </div>
  );
}

export default App;
