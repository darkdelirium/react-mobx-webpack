import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("CounterStore")
@observer
export default class App extends Component {
  handleIncrease() {
    console.log("Increase button clicked");
    this.props.CounterStore.increaseCounter();
  }
  handleDecrease() {
    console.log("Decrease button clicked");
    this.props.CounterStore.decreaseCounter();
  }
  render() {
    const { counter } = this.props.CounterStore;
    console.log(counter);
    return (
      <React.Fragment>
        <h1>Hellow World</h1>
        <h1>{counter}</h1>
        <button onClick={() => this.handleIncrease()}>Increase</button>
        <button onClick={() => this.handleDecrease()}>Decrease</button>
      </React.Fragment>
    );
  }
}
