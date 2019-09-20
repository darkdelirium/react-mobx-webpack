import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import CounterStore from "./stores/counterStore.js";
import App from "./components/app.js";
console.log("react-mobx-webpack-template");

const element = (
  <Provider CounterStore={CounterStore}>
    <App />
  </Provider>
);

console.log(element);

ReactDOM.render(element, document.getElementById("app"));
