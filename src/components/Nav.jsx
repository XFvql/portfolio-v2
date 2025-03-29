import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Service", link: "/service" },
    { name: "Contacts", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-transparent shadow-sm rounded-full shadow-white py-4 md:px-10 px-7">
        {/* Logo Section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-white">
          <span className="w-7 h-7">
            {/* Book Icon (SVG) */}
            <span className="text-blue-500 text-2xl relative bottom-1">&lt;/&gt;</span>
          </span>
          <span className="mx-5">XFazz</span>
        </div>
        
        {/* Menu Icon */}
        <div onClick={() => setOpen(!open)} className="absolute bg-white right-8 top-6 cursor-pointer md:hidden w-7 h-7 flex items-center justify-center p-1 rounded">
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>

        {/* Links */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"}`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
              <Link to={link.link} className="text-gray-200 hover:scale-110 transition-all hover:text-blue-400 duration-500">
                {link.name}
              </Link>
            </li>
          ))}
          <button className="bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;