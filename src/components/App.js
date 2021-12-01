import logo from "../images/logo.jpg";
import sun from "../images/icons8-sun-50.png";
import moon from "../images/icons8-crescent-moon-50.png";
import Register from "./register/Register";
import PersonCard from "./PersonCard/PersonCard"
import RegisteredCardList from './RegisteredCardList/RegisteredCardList'
import "./App.scss";

function App() {
  return (
    <div className="App">
      <input className="inputCheckBox" type="checkbox" id="toggleIcon" />
      <header className="App-header">
        <img src={logo} className="App-header--logo" alt="logo" />
        <h1>online registration system</h1>
        <label htmlFor="toggleIcon" className="icons">
          <img src={sun} alt="sun logo" />
          <img src={moon} alt="sun logo" />
        </label>
      </header>
      <main className="App-main">
        {/* <Register /> */}
        {/* <RegisteredCardList/> */}
       <PersonCard />
      </main>
    </div>
  );
}

export default App;
