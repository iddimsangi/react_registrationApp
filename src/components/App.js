import logo from "../images/logo.jpg";
import Register from "./register/Register";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-header--logo" alt="logo" />
      </header>
      <main className="App-main">
        <Register />
      </main>
    </div>
  );
}

export default App;
