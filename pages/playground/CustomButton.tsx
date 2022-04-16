import React, { useState } from 'react';

const CustomButton = () => {
 const [count, setCount] = useState(0);

 const countIncrement = () => setCount((prevCount) => prevCount + 1);
 const countDecrement = () => setCount((prevCount) => prevCount - 1);
 const countReset = () => setCount(0);

 return (
  <div>
   <p>Current Number {count}</p>
   <button onClick={countIncrement} className="ui button basic">
    <i className="plus icon"></i>
    Increment
   </button>
   <button onClick={countDecrement} className="ui button basic">
    <i className="minus icon"></i>
    Decrement
   </button>
   <button onClick={countReset} className="ui button basic">
    <i className="redo icon"></i>
    Reset
   </button>
  </div>
 );
};

export default CustomButton;
