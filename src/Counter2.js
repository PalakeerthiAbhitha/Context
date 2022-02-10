import React from 'react';
import { Context1 } from './Context';
import Counter3 from './Counter3';

class Counter2 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    
    return (
      <Context1.Consumer>
        {(getValuesFromProvider) => {
          return (
            <>
              <h3> Counter 2 Component </h3>
              Initial Value : {getValuesFromProvider.initialValue} <br /> <br />
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
              <Counter3 />
            </>
          );
        }}
      </Context1.Consumer>
    );
  }
}




export default Counter2;
