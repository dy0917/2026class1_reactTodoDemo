import { useState } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (
    action.type // switch statements are common in reducers
  ) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "customValue":
      return action.value;
    default:
      return state;
  }
};

export default function ReducerCounter() {
  // useReducer takes a reducer function and the initial state value;
  // returns array with the state variable and a dispatch function
  const [counter, dispatch] = useReducer(reducer, 0);
  //   const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    // we call the dispatch function to make all state updates
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to reducer;
    dispatch({ type: "decrement" });
  };
  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>

      <button onClick={() => dispatch({ type: "customValue", value: 12 })}>
        SetRandom value
      </button>
    </div>
  );
}
