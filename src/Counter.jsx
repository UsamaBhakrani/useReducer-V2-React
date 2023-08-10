import { useState } from "react";
import reducer from "./reducer";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [numberToAdd, setNumberToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + numberToAdd);
    setNumberToAdd(0);
  };

  const handleOnChange = (e) => {
    setNumberToAdd(parseInt(e.target.value));
  };

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Add Alot</label>
        <input
          value={numberToAdd || ""}
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
