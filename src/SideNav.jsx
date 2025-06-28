import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { GiAbstract027 } from "react-icons/gi";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#service", label: "SERVICE" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#pages", label: "PAGES" },
  { href: "#blog", label: "BLOG" },
  { href: "#contact", label: "CONTACT" },
];

function SideNav({ myNav, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-500 ${
        myNav ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Solid Overlay */}
      <div
        className={`absolute inset-0 bg-blue-900 transition-all duration-500 ${
          myNav ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      {/* Side Drawer */}
      <aside
        className={`absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 shadow-2xl border-l-4 border-cyan-300/40 rounded-l-3xl transform transition-transform duration-500 ${
          myNav ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "#1e293b" }} // Ensures solid background, not transparent
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-blue-300/30">
            <span className="flex items-center gap-3 text-2xl font-extrabold tracking-widest text-cyan-200 drop-shadow-lg">
              <span className="bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-900 p-2 rounded-full shadow-lg border-2 border-cyan-200 animate-spin-slow">
                <GiAbstract027 className="text-3xl text-blue-100" />
              </span>
              EUVOLA
            </span>
            <button
              onClick={onClose}
              className="text-cyan-200 text-3xl p-2 rounded-full hover:bg-blue-800/60 transition shadow-lg"
              aria-label="Close menu"
            >
              <RiCloseLine />
            </button>
          </div>
          {/* Nav Links */}
         {/* // ...existing code... */}
          <nav className="flex-1 flex flex-col gap-4 px-8 py-10">
            {navLinks.map((item, idx) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="relative group py-3 px-4 rounded-xl text-lg font-bold tracking-wider text-white hover:text-cyan-300 transition-all duration-200 overflow-hidden
                  bg-blue-800/80 hover:bg-cyan-700/80 shadow-md"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Neon Glow */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-60 rounded-xl blur-md bg-cyan-400/30 transition duration-300"></span>
                {/* Animated Underline */}
                <span className="absolute left-4 bottom-2 w-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-700 rounded-full group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-8 py-6 border-t border-blue-300/30 text-center">
            <span className="text-cyan-200 font-semibold text-sm tracking-widest">
              © {new Date().getFullYear()} EUVOLA. All Rights Reserved.
            </span>
          </div>
        </div>
      </aside>
      <style>
        {`
          .animate-spin-slow {
            animation: spin 3s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default SideNav;