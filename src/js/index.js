//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

// Aqui va la logica del codigo.

// Contador de 0 9

// let timer = document.getElementById("timer");


let count = -1;
let seconds = 0;
let seconds2 = 0;
let seconds3 = 0;
let seconds4 = 0;
let seconds5 = 0;

setInterval(function() {
count++; 
if (count === 10) {
    count = 0;
    seconds++; 
    if (seconds ===10){
        seconds = 0
        seconds2++;
    } if (seconds2 ===10){
            seconds2 = 0
            seconds3++;
        }if (seconds3 ===10){
            seconds3 = 0
            seconds4++;
            }if (seconds4 ===10){
                seconds4 = 0
                seconds5++;
        }
    }
    
ReactDOM.render(<SecondsCounter segundos={count} segundos2={seconds} segundos3={seconds2} segundos4={seconds3} segundos5={seconds4} segundos6={seconds5}/>, document.querySelector("#app"));
}, 1000);

//render your react application
