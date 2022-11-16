import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from "../../img/default-logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <img className='logo' src={logo} alt='' />
      <Navbar />
    </header>
  );
};

export default Header;
