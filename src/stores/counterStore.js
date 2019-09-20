import { observable, action, computed } from "mobx";

class CounterStore {
  @observable counter = 0;

  @action increaseCounter = () => {
    this.counter++;
  };
  @action decreaseCounter = () => {
    this.counter--;
  };

  @computed get currentValue() {
    return this.counter;
  }
}

const store = new CounterStore();
export default store;
