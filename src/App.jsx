import "./App.css";


function CardComponent(props) {
  if(props.number < 10) {
    return null;
  }
  else if(props.number > 50) {
    return (
      <div>
        <h1>Big Number</h1>
        <p>{props.number}</p>
      </div>
    )
  }
  else return (
  <div>
    <h3>{props.title}</h3>
    <h5>{props.subtitle}</h5>
    <p>{props.content}</p>
    <br />
    <button>{props.buttonText}</button>
  </div>
  );
}


function App() {
  return (
  <div>
    <CardComponent
    title={"Title 1"}
    subtitle={"Subtitle 1"}
    content={"Content 1"}
    buttonText={"Button Text 1"}
    number={11}
    >
    </CardComponent>
    <CardComponent
    title={"Title 2"}
    subtitle={"Subtitle 2"}
    content={"Content 2"}
    buttonText={"Button Text 2"}
    number={9}
    >
    </CardComponent>
    <CardComponent
    title={"Title 3"}
    subtitle={"Subtitle 3"}
    content={"Content 3"}
    buttonText={"Button Text 3"}
    number={51}
    >
    </CardComponent>
  </div>
  );
}

export default App;

