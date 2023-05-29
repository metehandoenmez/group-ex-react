import React from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  return (
    <div>
      <CardComponent
        cardId={"here_is_my_id"}
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
      ></CardComponent>
    </div>
  );
}

export default App;
