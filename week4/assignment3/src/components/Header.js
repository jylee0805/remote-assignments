import React, { useState } from "react";
import Nav from "./Nav";
import FloatNav from "./FloatNav";

const Header = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="header">
      <h1 className="header_title">
        <a href="#">Website Title / Logo</a>
      </h1>

      <nav>
        <Nav />
        {show && <FloatNav />}
        <button className="menu_btn" onClick={() => setShow((show) => (show = !show))}>
          <span className={show ? "material-symbols-outlined close" : "material-symbols-outlined menu"}>{show ? "close" : "menu"}</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
