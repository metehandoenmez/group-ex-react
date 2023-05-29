import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";
import { useEffect } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      <input
        type="text"
        onChange={(ev) => {
          setInputText(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          let toUpdateArray = [...items, inputText];
          setItems(toUpdateArray);
        }}
      >
        Add item
      </button>
      <br />
      <br />
      {items.map((item, index) => {
        return <CardComponent content={item}></CardComponent>;
      })}
    </div>
  );
}

export default App;
