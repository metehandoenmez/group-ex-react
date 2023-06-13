export default function CardComponent(props) {
    if(props.number > 10 && props.number <50) {
    return ( 
        <div>
            <h3>{props.title}</h3>
            <h5>{props.subtitle}</h5>
            <p>{props.content}</p>
            <br />
            <button>Press me</button>
        </div>
    )
} else if(props.number > 50) {
    return ( 
        <div>
            <h1>Big Number</h1> <br />
            <p>{props.number}</p>
        </div>
    )
}
else if(props.number < 10) {
    return ( 
        null
    )
}
}