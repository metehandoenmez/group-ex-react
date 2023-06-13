import "./App.css";
import CardComponent from "./CardComponent";


function App() {
  return (
  <div>
    <CardComponent 
    title="Title 1"
    subtitle="Subtitle 1"
    content="Content 1"
    number={11}
    />
    <CardComponent 
    title="Title 2"
    subtitle="Subtitle 2"
    content="Content 2"
    number={51}
    />
    <CardComponent 
    title="Title 3"
    subtitle="Subtitle 3"
    content="Content 3"
    number={9}
    />
  </div>
  );
}

export default App;

