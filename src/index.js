import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import reportWebVitals from './reportWebVitals';
const element = <h1>hello word</h1>
const rootElement = document.getElementById("root");//We call this a “root” DOM node because everything inside it will be managed by React DOM.
ReactDOM.render(<App />,rootElement);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
