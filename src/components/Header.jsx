import React from "react";
import logo from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header>
      <div id="header">
        <img src={logo} />
        <h1>React Investment Calculator</h1>
      </div>
    </header>
  );
}

export default Header;
