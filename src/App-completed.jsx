import React from "react";
import "./App.css";

// class CardComponent2 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h3>Card Title</h3>
//       </div>
//     );
//   }
// }

function CardComponent(props) {
  if (props.number > 50) {
    return (
      <div>
        <h1>Big Number</h1>
        <p>{props.number}</p>
      </div>
    );
  } else if (props.number < 10) {
    return null;
  } else {
    return (
      <div>
        <h3>{props.title}</h3>
        <h5>{props.subtitle}</h5>
        <p>{props.content}</p>
        <br />
        <button>{props.buttonText}</button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <CardComponent
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
        number={0}
      ></CardComponent>

      <CardComponent
        title={"not a title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
        number={10}
      ></CardComponent>

      <CardComponent
        title={"maybe i'm a title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
        number={60}
      ></CardComponent>
    </div>
  );
}

export default App;
