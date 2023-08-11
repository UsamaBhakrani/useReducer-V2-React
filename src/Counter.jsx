import { produce } from "immer";
import { useReducer, useState } from "react";
import reducer from "./reducer";
import { INCREMENT, DECREMENT, NUMBER_TO_ADD, ADD_FORM_INPUT } from "./actions";

const Counter = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [numberToAdd, setNumberToAdd] = useState(0);
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    numberToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: NUMBER_TO_ADD });
    // setCount(count + numberToAdd);
    // setNumberToAdd(0);
  };

  const handleOnChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: ADD_FORM_INPUT,
      payload: value,
    });
    // setNumberToAdd(parseInt(e.target.value))
  };

  return (
    <>
      <h1>Count is {state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Add Alot</label>
        <input
          value={state.numberToAdd || ""}
          id="number"
          type="number"
          onChange={handleOnChange}
        />
        <button>Add it</button>
      </form>
    </>
  );
};

export default Counter;
