import React, { useState } from "react";
import ContentBox from "./ContentBox";

const MainSection = () => {
  const items = [
    { text: "item1", id: 1 },
    { text: "item2", id: 2 },
    { text: "item3", id: 3 },
    { text: "item4", id: 4 },
  ];

  const mores = [
    { text: "item5", id: 5 },
    { text: "item6", id: 6 },
    { text: "item7", id: 7 },
    { text: "item8", id: 8 },
  ];

  const [show, setShow] = useState(false);

  return (
    <section>
      <h3 className="main_title">Section Title</h3>
      <div className="content">
        {items.map((item) => (
          <ContentBox text={item.text} key={item.id.toString()} />
        ))}
      </div>
      <button className="main_btn" onClick={() => setShow((show) => (show = !show))}>
        Call to Action
      </button>
      {show && (
        <div className="content">
          {mores.map((more) => (
            <ContentBox text={more.text} key={more.id.toString()} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MainSection;
