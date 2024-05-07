import React, { useState } from "react";
import Logo from "../assets/pjlogonew.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import scrollTo from "../utils/scrollTo";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0c3014] text-gray-300">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      <ul className="hidden md:flex">
        <li  onClick={()=> scrollTo("home")}>
          Home
        </li>
        <li onClick={()=> scrollTo("about")}> 
          About
        </li>
        <li onClick={()=> scrollTo("skills")}>
          Skills
        </li>
        <li onClick={()=> scrollTo("experience")}>
          Experience
        </li>
        <li  onClick={()=> scrollTo("projects")}>
          Projects and Achievements
        </li>
        <li  onClick={()=> scrollTo("contact")}>
         Contact
        </li>
      </ul>

      {/* Mobile Menu hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0c3014] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="#home">Home</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#about">About</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#skills">Skills</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#experience">Experience</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#projects">Projects and Achievements</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#204491]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/prannat-jain/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.github.com/prannat-jain/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hver:ml-[-10px] duration-300 bg-[#ff4f4f]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:prannatj@dal.ca"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#204491]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/prannat-jain/"
            >
              Contact for Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
