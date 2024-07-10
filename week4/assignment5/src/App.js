import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  //設定初始狀態
  const [items, setItems] = useState([
    { quantity: 0, id: 1 },
    { quantity: 0, id: 2 },
    { quantity: 0, id: 3 },
  ]);

  const handlerAddCounter = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        quantity: 0,
        id: prevItems.length + 1,
      },
    ]);
  };

  const handlerChangeAll = () => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        return {
          quantity: item.quantity + 1,
          id: item.id,
        };
      })
    );
  };

  const handlerScore = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        //判斷點擊的id與遍歷到的id相同+1
        if (item.id === id) {
          return {
            quantity: item.quantity + 1,
            id: item.id,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="wrap">
      <button onClick={handlerChangeAll}>All +1</button>

      {items.map((item) => (
        <Counter id={item.id} key={item.id.toString()} quantity={item.quantity} scoreChange={handlerScore} />
      ))}

      <button onClick={handlerAddCounter} className="addCounter">
        {" "}
        Add a Counter
      </button>
    </div>
  );
};

export default App;
