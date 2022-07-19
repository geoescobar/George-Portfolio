import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#16161d] text-gray-300">
      <div>
        <img src={Logo} alt="Logo-Img" className="logo" />
      </div>
      <div>
        <ul className="flex">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
