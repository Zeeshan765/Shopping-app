import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
  <div className="nav-container">
      <div className="nav-name">
          Zeeshan App
      </div>
      <ul className="nav-items">
          <li>
              <a href="#">Home</a>
          </li>
          <li>
              <a href="#">Product</a>
          </li>
          <li>
              <a href="#">About</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li>
          <div className="primary-btn">
              Get Connected
          </div>
      </ul>

  </div>
  )
};

export default Menu;
