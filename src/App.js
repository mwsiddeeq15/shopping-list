import { Button } from "reactstrap";
import MyButton from "./Button";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton hello={() => alert("Hello")} yolo={{ background: "red" }}>
          My New Button
        </MyButton>
      </header>
    </div>
  );
}

export default App;
