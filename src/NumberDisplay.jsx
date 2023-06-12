import React, {useState, useEffect} from "react";

export default function NumberDisplay () {
    
    const [number, setNumber] = useState(0);

    const API_URL = "https://www.random.org/integers/?num=1&min=1&max=200&col=1&base=10&format=plain&rnd=new"

    useEffect(() => {
        fetch(API_URL).then((result) => {
            return result.json();})
            .then((data) => {
                setNumber(data)
            })
        }, [])

    const saveStorage = () => {
        localStorage.setItem("Stored Number",number)
    }

    const loadStorage = () => {
        let stored = JSON.parse(localStorage.getItem("Stored Number"));
        setNumber(stored);
    }
    
    const newRandom = () => {
            fetch(API_URL).then((result) => {
                return result.json();})
                .then((data) => {
                    setNumber(data)
                })
    }

    const resetNumber = () => {
        setNumber(0);
    }

    const startCounter = () => {
        setInterval(() => {
            setNumber(number+1);
        }, 1000);
    }
    
    
    
    return (
        <div>
            <p>{number}</p> <br />
            <button onClick={() => {
                setNumber(number+1);
            }}>Increment</button>
            <button onClick={() => {saveStorage()}}>Save to Storage</button>
            <button onClick={() => {loadStorage()}}>Load from Storage</button> <br />
            <button onClick={() => {newRandom()}}>New Random Number</button>
            <button onClick={() => {resetNumber()}}>Reset Number</button>
            <button onClick={() => {startCounter()}}>Start Counter</button>
        </div>
    )
}