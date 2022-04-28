import React from 'react';
import Card from './Card';

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return <>{
    props.cities.map(a=><Card 
      max={a.main.temp_max}
      min={a.main.temp_min}
      name={a.name}
      img={a.weather[0].icon}
      onClose={() => alert(a.name)}
      />)
    }</>
};

