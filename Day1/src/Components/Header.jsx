import React from "react";
import { LOGO_URL } from "../utils/common_url";

const Header = () => {
  return (
    <div>
      <div className="headerBar">
        <img src={LOGO_URL} alt="" />
        <div className="navItems">
          <ul className="navLists">
            <li>Home</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
