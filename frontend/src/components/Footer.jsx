import React from "react";
import logo from "../assets/ACMLogo.png";
import { Link } from "react-router-dom";
import linkedIn from "../assets/Icons/Linked.svg";
import mail from "../assets/Icons/mail.svg";
import x from "../assets/Icons/X.svg";
import instagram from "../assets/Icons/instagram.svg";

function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Logo */}
        <div className="flex justify-center sm:justify-start">
          <img
            src={logo}
            alt="ACM Logo"
            className="w-40 sm:w-56 lg:w-64"
          />
        </div>

        {/* Description */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-black leading-relaxed">
            ACM boosts up the potential and talent, supporting the overall
            development needs of our students to facilitate a structured path
            from education to employment by providing a safe and supported
            space where creative talent and imagination can flourish.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide 
                         bg-[#09357A33] text-[#09357A] px-3 py-1 rounded">
            Quick Links
          </h2>

          <div className="flex flex-col space-y-2 text-sm text-gray-600 text-center sm:text-left">
            <Link to="/home" className="hover:text-blue-600">Home</Link>
            <Link to="/gallery" className="hover:text-blue-600">Gallery</Link>
            <Link to="/resources" className="hover:text-blue-600">Resources</Link>
            <Link to="/team" className="hover:text-blue-600">Team</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center sm:items-start space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide 
                         bg-[#09357A33] text-[#09357A] px-3 py-1 rounded">
            Contact Us
          </h2>

          <div className="flex flex-col space-y-3 text-sm text-gray-600">

            <a
              href="https://www.linkedin.com/company/acm-student-chapter-delhi-technical-campus-ggsipu/"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <img src={linkedIn} className="w-5 h-5" />
              LinkedIn
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <img src={x} className="w-5 h-5" />
              X
            </a>

            <a
              href="https://www.instagram.com/acm_dtc/"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <img src={instagram} className="w-5 h-5" />
              Instagram
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-blue-600">
              <img src={mail} className="w-5 h-5" />
              Email
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0B3A75] py-3 text-center">
        <p className="text-xs sm:text-sm text-white">
          ©2025, DTC ACM STUDENT CHAPTER
        </p>
      </div>
    </footer>
  );
}

export default Footer;