import React from "react";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#16161d] text-gray-300">
      <div>
        <img src={Logo} alt="Logo-Img" className="logo" />
      </div>
      <div>
        <ul className="flex">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact Me</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
