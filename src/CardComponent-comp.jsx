export default function CardComponent(props) {
    return (
      <div id={props.cardId}>
        <h3 id="titleH3">{props.title}</h3>
        <input id="inputId" type="text" />
        <h5>{props.subtitle}</h5>
        <p>{props.content}</p>
        <br />
        <button onClick={() => {
            let text = document.querySelector("#inputId").value;
            document.querySelector("#titleH3").textContent = text;
        }
        }>{props.buttonText}</button>
        <button onClick={() => {
            document.querySelector("#" + props.cardId).remove()
        }
        }>{"Delete me"}</button>
      </div>
    );
  }