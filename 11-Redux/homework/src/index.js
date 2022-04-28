import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import Counter from './components/Counter';
import counter from './reducers';

// Esta línea instancia nuestro store central de Redux.
// La función `createStore` recibe el reducer
// que es responsable de la actualización del store , junto
//con cualquier estado inicial con el que queramos que
//empiece el store (que en este caso es ninguno).

const store=configureStore({reducer:counter})

// Aquí, envolvemos nuestro componente principal React dentro de las etiquetas del Provider,
// que vienen del paquete react-redux.
// Esto es necesario porque el store necesita saber hacia dónde está pasando su estado. 
// El componente Provider es dond{} "vive" el store.
ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
  document.getElementById('root')
);