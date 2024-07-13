import React, { useState } from "react";

const Banner = () => {
  const [changes, setChange] = useState("Welcome Message");

  const handlerBanner = () => {
    setChange((prevChange) => {
      return prevChange === "Welcome Message" ? "Have a Good Time!" : "Welcome Message";
    });
  };

  return (
    <div className="banner">
      <h2 className="banner_title" onClick={handlerBanner}>
        {changes}
      </h2>
    </div>
  );
};

export default Banner;
