import React from 'react';
import c from "./card.module.css"

export default function Card(props) {
  // acá va tu código
  var txt="http://openweathermap.org/img/wn/"+props.img+"@2x.png"

  return (<div className={c.card}> 
        <div className={c.div}>
        <h1> {props.name}</h1>
        <p> MAX</p>
        <h6>{props.max} </h6>
        <p> Min</p>
        <h6>{props.min}</h6>
        </div>      
        <div className={c.div}>
        <button onClick={props.onClose}>Alerta</button>
        <img src={txt} alt="imagen´t"></img>
        </div>
      </div>)
};