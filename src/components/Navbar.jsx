import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#16161d] text-gray-300 md:text-sm">
      <div className="hidden md:flex">
        <img src={Logo} alt="Logo-Img" className="logo" />
      </div>
      <div>
        <ul className="hidden md:flex">
          <li className="hover:text-[#F53803] ">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="hover:text-[#F53803] md:text-md">
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className="hover:text-[#F53803] md:text-md">
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="hover:text-[#F53803] md:text-md">
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
          <li className="hover:text-[#F53803] md:text-md">
            <Link to="contact" smooth={true} duration={500}>
              Contact Me
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#16161d] flex flex-col justify-center items-center z-20"
          }
        >
          <li className="py-6 hover:text-[#F53803] text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 hover:text-[#F53803] text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className="py-6 hover:text-[#F53803] text-4xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>

          <li className="py-6 hover:text-[#F53803] text-4xl">
            <Link
              onClick={handleClick}
              to="resume"
              smooth={true}
              duration={500}
            >
              Resume
            </Link>
          </li>
          <li className="py-6 hover:text-[#F53803] text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
