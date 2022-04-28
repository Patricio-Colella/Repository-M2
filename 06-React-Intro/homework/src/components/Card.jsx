import React from 'react';

export default function Card(props) {
  // acá va tu código
  var txt="http://openweathermap.org/img/wn/"+props.img+"@2x.png"
  return (<div>Card Component
        <h1> {props.max} </h1>
        <h2> {props.min}</h2>
        <h3> {props.name}</h3>
        <img src={txt} alt="no hay imagen"></img>
        <button onClick={props.onClose}></button>
      </div>)
};