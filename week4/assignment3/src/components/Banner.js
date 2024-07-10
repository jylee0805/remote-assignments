import React from "react";
const handlerBanner = (event) => {
  const text = event.target.innerText;
  if (text === "Welcome Message") {
    event.target.innerText = "Have a Good Time!";
  } else {
    event.target.innerText = "Welcome Message";
  }
};
const Banner = () => {
  return (
    <div className="banner">
      <h2 className="banner_title" onClick={handlerBanner}>
        Welcome Message
      </h2>
    </div>
  );
};

export default Banner;
