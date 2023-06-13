import React, { useState, useEffect } from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {

  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("")

useEffect(() => {
  console.log(items)
},[items])
useEffect(() => {
  console.log(inputText)
},[inputText])


let handleInputChange = (event) => {
  setInputText(event.target.value)
}



  return (
    <div>
      <input type="text" onChange={handleInputChange}/>
      <button onClick={() => {
        let updateArray = [...items, inputText];
        setItems(updateArray)
      }}>Add item</button>
      <br />
      {items.map((item, index) => {
        return <CardComponent content={item}/>
      })
    }
    </div>

  )
}
export default App;
