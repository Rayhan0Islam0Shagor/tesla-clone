import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className="App">
      <Header burgerStatus={burgerStatus} setBurgerStatus={setBurgerStatus} />
      <Home setBurgerStatus={setBurgerStatus} />
    </div>
  );
}

export default App;
