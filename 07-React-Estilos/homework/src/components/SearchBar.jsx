import React from 'react';
import s from "./search.module.css"

export default function SearchBar(props) {
  // acá va tu código
  return <div className={s.div}>
    <input type="text" placeholder='ingresar ciudad'></input>
    <button onClick={props.onSearch} className={s.button}>search</button>
  </div>
};