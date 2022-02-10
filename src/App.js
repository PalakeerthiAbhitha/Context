import React from 'react';
import './Style.css';
import { Context1 } from './Context';
import Counter1 from './Counter1';

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleReset=()=>{
    setCounter(0)
  }
  return (
    <div>
      <h3> App Component </h3>
      Initial Value : {counter} <br /> <br />
      <button onClick={() => handleIncrement()}> Increment </button> &nbsp;
      <button onClick={() => handleDecrement()}> Decrement </button> &nbsp;
      <button onClick={() => handleReset()}> Reset </button>
      <Context1.Provider
        value={{
          initialValue: counter,
          handleIncrement: handleIncrement,
          handleDecrement: handleDecrement,
          handleReset:handleReset,
        }}
      >
        <Counter1 />
      </Context1.Provider>
    </div>
  );
}