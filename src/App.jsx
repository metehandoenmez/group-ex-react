import React, { useState } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

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

  

    if(!loggedIn) {
      return (
        <div>
          <h1>Login Screen</h1>
          Username :<input type="text" onChange={(event) => {
            let text = event.target.value;
            setInputText(text)
          }} />
          <button onClick={(event) => {
            setUsername(event.target.value)
            setLoggedIn(true)
            setUsername(inputText)
          }}>Login</button>
        </div>
      )
    }
      else if(loggedIn) {
        return (
          <div>
            Welcome, {username}! <br />
            <button onClick={() => {
              setLoggedIn(false)
            }}>Logout</button>
            <br />
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
        )
    }
    
}

export default App;
