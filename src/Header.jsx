import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import SideNav from './SideNav';
import { GiAbstract027 } from "react-icons/gi";

function Header() {
  let [myNav, setMyNav] = useState(false);

  function showNav() {
    setMyNav(!myNav);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 shadow-2xl border-b-4 border-blue-300/40 backdrop-blur-lg">
      {/* Neon border and animated background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-r from-blue-900/70 via-blue-700/60 to-blue-500/70 blur-xl animate-pulse"></div>
        <div className="absolute inset-0 border-t-4 border-b-4 border-blue-400/40 rounded-b-3xl animate-borderGlow"></div>
      </div>
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 py-4 z-10">
        <h1 className="flex items-center gap-4 text-3xl md:text-5xl font-extrabold tracking-widest drop-shadow-xl animate-pulse">
          <span className="bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-900 p-3 rounded-full shadow-2xl border-4 border-blue-200 animate-spin-slow">
            <GiAbstract027 className="text-4xl md:text-5xl text-blue-100" />
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-white to-blue-400 animate-gradientText">
            EUVOLA
          </span>
        </h1>
        <nav className="hidden md:flex gap-8 font-semibold text-lg">
          {[
            { href: "#home", label: "HOME" },
            { href: "#about", label: "ABOUT" },
            { href: "#service", label: "SERVICE" },
            { href: "#portfolio", label: "PORTFOLIO" },
            { href: "#pages", label: "PAGES" },
            { href: "#blog", label: "BLOG" },
            { href: "#contact", label: "CONTACT" },
          ].map((item, idx) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group px-2"
            >
              <span className="cursor-pointer text-white hover:text-cyan-300 transition duration-200 tracking-wider drop-shadow-lg">
                {item.label}
              </span>
              {/* Neon underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 rounded-full group-hover:w-full transition-all duration-300"></span>
              {/* Glow on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-60 rounded-lg blur-md bg-cyan-400/30 transition duration-300"></span>
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={showNav} className="text-white text-4xl p-2 rounded-full bg-blue-700/70 hover:bg-blue-900/90 shadow-2xl border-2 border-cyan-200 animate-bounce transition">
            <RiMenu3Line />
          </button>
        </div>
      </div>
      <SideNav myNav={myNav} onClose={() => setMyNav(false)} />
      <style>
        {`
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
          @keyframes borderGlow {
            0%, 100% { box-shadow: 0 0 24px 4px #38bdf8, 0 0 48px 8px #2563eb44; }
            50% { box-shadow: 0 0 48px 8px #38bdf8, 0 0 96px 16px #2563eb88; }
          }
          .animate-borderGlow {
            animation: borderGlow 2.5s ease-in-out infinite;
          }
          @keyframes gradientText {
            0%,100% { filter: hue-rotate(0deg);}
            50% { filter: hue-rotate(40deg);}
          }
          .animate-gradientText {
            animation: gradientText 3s linear infinite;
          }
        `}
      </style>
    </header>
  );
}

export default Header;