import React from 'react';
import { Context1 } from './Context';
import Counter2 from './Counter2';

function Counter1() {
  const getValuesFromProvider = React.useContext(Context1);
  return (
    <>
      <h3> Counter 1 Component </h3>
      Initial Value :{getValuesFromProvider.initialValue} <br /> <br />
      <button onClick={getValuesFromProvider.handleIncrement}>
        {' '}
        Increment{' '}
      </button>{' '}
      &nbsp;
      <button onClick={getValuesFromProvider.handleDecrement}>
        {' '}
        Decrement{' '}
      </button>{' '}
      &nbsp;
      <button onClick={getValuesFromProvider.handleReset}>
                {' '}
               Reset{' '}
              </button>{' '}
      <Counter2 />
    </>
  );
}

export default Counter1;
