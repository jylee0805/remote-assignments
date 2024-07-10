import React from "react";

const Counter = ({ id, scoreChange, quantity }) => {
  return (
    <div>
      <button onClick={() => scoreChange(id)}>+1</button>
      <span>{quantity}</span>
    </div>
  );
};

export default Counter;
