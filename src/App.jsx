import React from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  return (
    <div>
      <CardComponent
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
      ></CardComponent>
    </div>
  );
}

export default App;
