import React, { useState } from "react";
import './Room.css'

function Room() {
    let [isLit, setLit] = useState(false);
    let [Temprature , setTemprature] = useState(24);
    

    return (
    <div className={`room ${isLit? "lit": "dark"}`}> 
        This Room is {!isLit? "Lit": "dark"}
        <br/>
        Temprature: {Temprature}
        <br/>
        <button className="button1" onClick={()=> setLit(false) } >LightMode</button>
        <button className="button2" onClick={()=> setLit(true) } >darkMode</button>
        <br/>
        <button id="button3" onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setTemprature(++Temprature);
                        }}>
            +
        </button>
        <button id="button4" onClick={ ()=> {
                        console.log("Increase age arrow function");
                        setTemprature(--Temprature);
                        }}>
            -
        </button>
    </div>
    );
}

export default Room;