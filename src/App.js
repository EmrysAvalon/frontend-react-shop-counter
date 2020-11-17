import React, {Fragment, useState} from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(0);

    const increment = () => {
        console.log(`Incremented ${count} by 1`);
        setCount(count + 1);
    }

    const reduce = () => {
        console.log(`Reduced ${count} by 1`);
        setCount(count - 1)
    }

    const reset = () => {
        console.log(`Reset ${count} to 0`);
        setCount(0);
    }

  return (
      <Fragment>
          <div className="current_value">
              <h2 className="value">There are {count} people in the store.</h2>
          </div>
          <div className="counters">
              <button type="button" onClick={() => reduce()}>-</button>
              <button type="button" onClick={() => increment()}>+</button>
          </div>
          <div className="reset">
              <button type="button" onClick={() => reset()}>Reset</button>
          </div>
      </Fragment>
  );
}

export default App;
