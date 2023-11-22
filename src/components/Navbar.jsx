import React, { useState } from "react";
import Logo from "../assets/logo-main.png";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handelNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className=" sticky justify-between items-center h-16 max-w-full mx-auto bg-transparent flex flex-row px-10 md:px-16 text-[#9D9D9D] border-b border-b-slate-300 font-medium">
        <img src={Logo} alt="decooders-logo" className="w-32" />
        <ul className=" hidden md:flex ">
          <li className="px-4  hover:text-[#F02036] cursor-pointer text-sm">
            About
          </li>
          <li className="px-4 hover:text-[#F02036] cursor-pointer text-sm">
            Services
          </li>
          <li className="px-4 hover:text-[#F02036] cursor-pointer text-sm">
            Projects
          </li>
        </ul>
        <button className="hidden md:block bg-[#0E1C25] text-white p-1.5 rounded-md px-8 text-sm hover:bg-[#F02036]">
          Contact
        </button>
        <div onClick={handelNav} className="block md:hidden">
          {!nav ? <IoClose size={24} /> : <IoMenu size={24} />}
        </div>
        <div
          className={
            !nav
              ? `fixed  left-0 top-0 w-[70%] border-r border-r-gray-200 bg-[#fefefe] h-full easy-in-out duration-500`
              : `fixed easy-in-out duration-50 left-[-100%]`
          }
        >
          <img src={Logo} alt="decooders-logo" className="w-32 m-8" />
          <ul className=" uppercase m-4 font-medium text-md">
            <li className="p-6 border-b border-gray-300 ">About</li>
            <li className="p-6 border-b border-gray-300 ">Services</li>
            <li className="p-6 border-b border-gray-300">Projects</li>
          </ul>
          <button className=" bg-[#0E1C25] text-white m-8 p-1.5 rounded-md px-12 text-md">
            Contact
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
