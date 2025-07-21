import React from 'react';
import logo from '../assets/logo.svg';
import './components.css';
import {Link, useLocation} from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const linkClasses = (path) => 
    location.pathname === path 
      ? "text-black font-semibold" 
      : "hover:text-black";
  return (
    <div className="myapp-navbar-wrapper position-absolute flex justify-center mb-7">
      <div className="myapp-navbar-container w-[100%] flex items-center justify-between bg-white rounded-[0px_0px_9.6px_9.6px] shadow-[0px_3px_36.8px_8px_#00000040] px-6 py-2">
        
        {/* Logo */}
        <div className="myapp-navbar-logo flex items-center w-28">
          <Link to={"/"}><img
            src={logo}
            alt="Tirth Logo"
            className="absolute h-[60px] top-[-5px]"
          /></Link>
        </div>
        <div className="myapp-navbar-links flex gap-8 text-sm text-[#6B6B6B] font-medium">
          <Link to="/" className={linkClasses("/")}>Home</Link>
          <Link to="/Contractors" className={linkClasses("/Contractors")}>Contractors</Link>
          <Link to="/Projects" className={linkClasses("/Projects")}>Projects</Link>
          <Link to="/ContactUs" className={linkClasses("/ContactUs")}>Contact Us</Link>
        </div>

        {/* Dropdowns */}
        <div className="myapp-navbar-controls flex items-center gap-3">
          <select className="bg-[#e6e6e6] text-sm px-3 py-[6px] rounded shadow-inner text-black focus:outline-none">
            <option>English</option>
            <option>ગુજરાતી</option>
          </select>
          <Link to="/login" className="bg-[#e6e6e6] text-sm px-3 py-[6px] rounded shadow-inner text-black focus:outline-none">
           Login / Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
