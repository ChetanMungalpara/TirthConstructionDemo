import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';

// A simple logo component - you can replace this with your SVG or an <img> tag
const Logo = () => (
  <img
    src={logo}
    alt="Tirth Logo"
    className="absolute h-[80px] top-[-10px]"
  />
);

const Navbar = () => {
  const activeLinkStyle = {
    color: 'black',
    fontWeight: '600',
  };
  const pasiveLinkStyle = {
    color: 'inherit',
    transition: 'color 0.3s ease',
    ':hover': {
      color: 'black',
    },
  }
  return (
    <nav className="position-absolute flex justify-center mb-7">
      <div className="w-[100%] flex items-center justify-between bg-white rounded-[0px_0px_9.6px_9.6px] shadow-[0px_3px_36.8px_8px_#00000040] px-6 py-2">
        <NavLink to="/" className="flex items-center w-28">
          <Logo />
        </NavLink>
        <div className="flex gap-8 text-sm text-[#6B6B6B] font-medium">
          <NavLink to="/" style={({ isActive }) => isActive ? activeLinkStyle : pasiveLinkStyle}>Home</NavLink>
          <NavLink to="/contractors" style={({ isActive }) => isActive ? activeLinkStyle : pasiveLinkStyle}>Contractors</NavLink>
          <NavLink to="/projects" style={({ isActive }) => isActive ? activeLinkStyle : pasiveLinkStyle}>Projects</NavLink>
          <NavLink to="/contact" style={({ isActive }) => isActive ? activeLinkStyle : pasiveLinkStyle}>Contact Us</NavLink>
        </div>
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <div className="relative">
            <select className="appearance-none bg-gray-200 text-sm text-black px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-white transition">
              <option>English</option>
              <option>ગુજરાતી</option>
            </select>
          </div>

          {/* Login / Register Button */}
          <button className="bg-gray-800 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 transition">
            Login / Register
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;