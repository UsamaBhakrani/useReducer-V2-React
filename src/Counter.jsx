import { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [numberToAdd, setNumberToAdd] = useState(0);

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCount(count + numberToAdd);
          setNumberToAdd(0);
        }}
      >
        <label htmlFor="number">Add Alot</label>
        <input
          value={numberToAdd || ""}
          id="number"
          type="number"
          onChange={(e) => setNumberToAdd(parseInt(e.target.value))}
        />
        <button>Add it</button>
      </form>
    </>
  );
};

export default Counter;
