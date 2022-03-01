import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

// Q1. Create a button, increment a counter every time when button is clicked.Log the counter value in console after every render

function App() {
    const [counter, setCounter] = useState(0);
    // console.log("counter: ", counter); // 1. Even before value is changed, counter value is logged
    function clickHandler() {
        // console.log("from click handler: counter: ", counter); // 2.not after render
        setCounter(counter => counter + 1) //setCounter is async. value is not updated right now
        // console.log("from click handler2: counter: ", counter); //3. not after render
    }

    useEffect(() => {
        console.log("after the render: ", counter);
    })

    console.log("just before render- counter", counter);
    return (<div className="App" >
        <h1> Counter with UseState and UseEffect hook </h1>
        <button id="counter" onClick={clickHandler} >+</button>
        <p id="counter-value" > {counter} </p>
    </div>
    );
}

export default App;