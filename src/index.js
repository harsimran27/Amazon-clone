import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
import { StateProvider } from "./StateProvider"
import Reducer, { initialState } from './Reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={Reducer}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);


