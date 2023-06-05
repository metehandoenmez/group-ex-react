import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");

  const updateItem = (index, text) => {
    let toUpdateItems = [...items];
    toUpdateItems[index] = text;
    setItems(toUpdateItems);
  };

  const deleteItem = (index) => {
    // needs to delete the item in the items array
    let toUpdateItems = [...items];
    toUpdateItems.splice(index, 1);
    setItems(toUpdateItems);
  };

  return (
    <div>
      <input
        onChange={(ev) => {
          let text = ev.target.value;
          setInputText(text);
        }}
        type="text"
      />
      <button
        onClick={() => {
          let itemsNew = [...items, inputText];
          setItems(itemsNew);
        }}
      >
        Add Item
      </button>
      {items.map((item, index) => (
        <CardComponent
          updateItem={updateItem}
          deleteItem={deleteItem}
          index={index}
          content={item}
        ></CardComponent>
      ))}
    </div>
  );
}

export default App;
