import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  
  const [inputText, setInputText] = useState("")
  const [items, setItems] = useState([])
  
  
  return (
    <div>
      <input onChange={(ev) => {
      let text = ev.target.value;
      setInputText(text);
    }
      } type="text" />
      <button onClick={() => {
      let itemsArr = [...items, inputText]
      setItems(itemsArr) }
      }>Add Text</button>
      {items.map((el) => <CardComponent content={el}>
    </CardComponent>) }
    </div>
  );
}

export default App;
