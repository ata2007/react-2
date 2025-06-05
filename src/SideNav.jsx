 import React from "react";
import { RiCloseLine } from "react-icons/ri";

function SideNav({ myNav, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${myNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      {/* Side Drawer */}
      <div
        className={`
          fixed top-0 right-0 z-50 h-full w-72
          bg-blue-900/95 backdrop-blur-xl shadow-2xl
          rounded-l-2xl
          transform ${myNav ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300
          flex flex-col
        `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-white text-3xl hover:text-blue-300 transition"
            aria-label="Close menu"
          >
            <RiCloseLine />
          </button>
        </div>
        <nav className="flex flex-col gap-6 font-semibold text-lg text-white px-8 mt-8">
          <section className="cursor-pointer hover:text-blue-300 transition">HOME</section>
          <section className="cursor-pointer hover:text-blue-300 transition">ABOUT</section>
          <section className="cursor-pointer hover:text-blue-300 transition">SERVICE</section>
          <section className="cursor-pointer hover:text-blue-300 transition">PORTFOLIO</section>
          <section className="cursor-pointer hover:text-blue-300 transition">PAGES</section>
          <section className="cursor-pointer hover:text-blue-300 transition">BLOG</section>
          <section className="cursor-pointer hover:text-blue-300 transition">CONTACT</section>
        </nav>
      </div>
    </>
  );
}

export default SideNav