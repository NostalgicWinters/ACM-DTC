import React, { useState } from "react";
import logo from "../assets/ACMLogo.png";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "About", "Events", "Gallery", "Team", "Resources"];

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Bar */}
        <div className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="ACM Logo" className="w-20 sm:w-24" />
            <p className="hidden sm:block text-black text-xs sm:text-sm font-semibold leading-tight">
              ACM-DTC
            </p>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-gray-800 hover:text-blue-600"
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link to="/joinus">
              <button className="bg-blue-800 text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-blue-900 transition">
                Join Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-medium"
                    : "text-gray-800 hover:text-blue-600"
                }
              >
                {item}
              </NavLink>
            ))}

            <Link to="/joinus" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-blue-800 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-900 transition">
                Join Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;