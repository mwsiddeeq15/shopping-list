import React from "react";
import { Button } from "reactstrap";
import MyButton from "./Button";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const VARIABLE = VALUE
  const initialState = ["Cheese"];
  // const [VARIABLE, ANOTHERVARIABLE] = VALUE
  const [shoppingList, setShoppingList] = React.useState(initialState);
  // const shoppingState = React.useState(initialState);
  // const shoppingList = shoppingState[0]
  // const setShoppingList = shoppingState[1]

  const [input, setInput] = React.useState("");

  // function VARIABLE
  function addToList() {
    const newList = [...shoppingList, input];
    setShoppingList(newList);
  }

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <input onChange={(event) => setInput(event.target.value)} />{" "}
      <button onClick={addToList}>Add</button>
      <ol>
        {shoppingList.map((listItem) => (
          <li>{listItem}</li>
        ))}
      </ol>
    </div>
  );
}

/*
Data/Variables
Events
State
Functions
Component (Render)
*/

export default App;
