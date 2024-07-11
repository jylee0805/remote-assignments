import React, { useState } from "react";

const Banner = () => {
  const [changes, setChange] = useState("Welcome Message");

  const handlerBanner = (prevChange) => {
    setChange((prevChange) => {
      if (prevChange === "Welcome Message") {
        return (prevChange = "Have a Good Time!");
      } else {
        return (prevChange = "Welcome Message");
      }
    });
  };

  return (
    <div className="banner">
      <h2 className="banner_title" onClick={() => handlerBanner(changes)}>
        {changes}
      </h2>
    </div>
  );
};

export default Banner;
