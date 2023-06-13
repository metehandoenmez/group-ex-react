import "./App.css";
import CardComponent from "./CardComponent";


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
        titleId={"title1"}
        inputId="input1"
        buttonText={"Press Me"}
      ></CardComponent>
      <CardComponent
        cardId={"card2"}
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        titleId={"title2"}
        inputId={"input2"}
        buttonText={"Press Me"}
      ></CardComponent>

      <CardComponent
        cardId={"card3"}
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        titleId={"title3"}
        inputId={"input3"}
        buttonText={"Press Me"}
      ></CardComponent>
  </div>
  );
}

export default App;
