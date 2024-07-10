import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";

import "./css/App.css";

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Banner />
      <Main />
    </div>
  );
};

export default App;
