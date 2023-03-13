import store from "../store";

export default function useCounter() {
  function increment() {
    store.dispatch("increment");
  }

  function decrement() {
    store.dispatch("decrement");
  }

  function reset() {
    store.dispatch("reset");
  }

  function setValue(value) {
    store.dispatch("setValue", value);
  }

  return {
    count: store.state.count,
    increment,
    decrement,
    reset,
    setValue,
  };
}
