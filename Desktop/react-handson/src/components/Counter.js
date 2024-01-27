import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  function incrementCounter() {
    setCounter(counter + 1);
    console.log("counter incremented");
  }
  function decrementCounter() {
    setCounter(counter - 1);
    console.log("counter decremented");
  }
  function resetCounter() {
    setCounter(0);
    console.log("counter reset");
  }
  return (
    <div className="counter">
      <h1>Counter App</h1>
      <p>{counter}</p>
      <div className="buttons">
        <button className="button1" onClick={incrementCounter}>
          Increment
        </button>
        <button className="button2" onClick={decrementCounter}>
          Decrement
        </button>
        <button className="button3" onClick={resetCounter}>
          Reset
        </button>
      </div>
      <p>
        {counter > 5
          ? "The counter value is greater than 5"
          : "The counter value is less or equal to 5"}
      </p>
    </div>
  );
}

export default Counter;
