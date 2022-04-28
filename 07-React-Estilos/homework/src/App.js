import React from 'react';
import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import s from "./components/card.module.css"
import data, { Cairns } from './data.js';

function App() {
  return (
    <div className="App">
      <div className={s.divt}>
        <Card
          max={25}
          min={10}
          name={"tokio"}
          img={""}
          onClose={() => alert("tokio")}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div className={s.divg}>
        <SearchBar
          onSearch={() => alert("hola")}
        />
      </div>
    </div>
  );
}

export default App;
