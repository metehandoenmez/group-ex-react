import React from "react";
import "./App.css";
import CardComponent from "./CardComponent.jsx";

function App() {
  return (
    <div>
      <CardComponent
        cardId={"card1"}
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
      ></CardComponent>
      <CardComponent
        cardId={"card2"}
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
      ></CardComponent>

      <CardComponent
        cardId={"card3"}
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
