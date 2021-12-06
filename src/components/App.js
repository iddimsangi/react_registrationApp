import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import Register from "./register/Register";
import RegisteredCardList from "./RegisteredCardList/RegisteredCardList";
import "./App.scss";

function App() {
  const [peopleDetailsArr, setpeopleDetailsArr] = useState([]);
  const LOCAL_STORAGE_KEY = "peopleDetailsArr";
  const personRegistered = (person) => {
    setpeopleDetailsArr([{ id: new Date(), ...person }, ...peopleDetailsArr]);
    console.log(person);
  };
  const deletePerson = (ID) => {
    const personID = peopleDetailsArr.filter((person) => {
      return person.id !== ID;
    });
    setpeopleDetailsArr(personID);
  };
  useEffect(() => {
    const receivedPeopleArr = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (receivedPeopleArr) setpeopleDetailsArr(receivedPeopleArr);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(peopleDetailsArr));
  }, [peopleDetailsArr]);
  return (
    <div className="App">
      <Router>
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
