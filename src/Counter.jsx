import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [numberToAdd, setNumberToAdd] = useState(0);

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <form>
        <label htmlFor="number">Add Alot</label>
        <input id="number" type="number" />
        <button>Add it</button>
      </form>
    </>
  );
};

export default Counter;
