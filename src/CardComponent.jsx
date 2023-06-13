export default function CardComponent(props) {
  return ( 
      <div id={props.cardId}> 
          <h3 id={props.titleId}>{props.title}</h3>
          <input type="text" id={props.inputId}/>
          <h5>{props.subtitle}</h5>
          <p>{props.content}</p>
          <br />
          <button onClick={() => {
            let text = document.querySelector("#" + props.inputId).value;
            document.querySelector("#" + props.titleId).textContent = text;
          }
          }>Press me</button>
          <button onClick={() => {
            document.querySelector("#" + props.cardId).remove()
          }
          }>Delete me</button>
      </div>
  )

}