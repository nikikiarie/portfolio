import React from "react";
import { Link } from "react-scroll";
import { navItems } from "../constants";

const Navbar = () => {
  return (
    <div className="z-10 flex items-center justify-between sticky top-0 bg-[#000000] px-4 md:px-24 ">
      <div className="py-2">
        <span className="font-bold leading-8 text-[#b9b9b9] hover:text-[18px] hover:text-[#27AE60] text-2xl">Nick</span>
      </div>
      <div className="py-2 hidden md:flex">
        <ul className="flex gap-6 py-3">
          {navItems.map((link) => (
            <Link key={link.id} to={link.to}  spy={true} smooth={true} duration={500} >
            <li  className=" cursor-pointer text-[#b9b9b9] text-sm font-titleFont  hover:text-[12px] rounded-sm leading-1 px-2 py-0.5  hover:bg-[#27AE60] hover:animate-pop hover:text-black hover:font-semibold">{link.item}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex md:hidden">
        n
      </div>
    </div>
  );
};

export default Navbar;
