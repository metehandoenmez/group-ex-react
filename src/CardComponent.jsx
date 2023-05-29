export default function CardComponent(props) {
  return (
    <div id={props.cardId}>
      <h3 id="titleH3">{props.title}</h3>
      <input id="inputTag" type="text" />
      <h5>{props.subtitle}</h5>
      <p>{props.content}</p>
      <br />
      <button
        onClick={() => {
          let inputTag = document.querySelector("#inputTag");
          let h3Tag = document.querySelector("#titleH3");
          let text = inputTag.value;
          h3Tag.textContent = text;
        }}
      >
        {props.buttonText}
      </button>
      <button
        onClick={() => {
          document.querySelector("#" + props.cardId).remove();
        }}
      >
        Delete Me
      </button>
    </div>
  );
}
