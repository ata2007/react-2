import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Row1() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-blue-200">
          <h2 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 drop-shadow">
            Welcome to <span className="text-blue-700">EUVOLA</span>
          </h2>
          <p className="text-lg md:text-2xl text-blue-800 mb-4 font-medium">
            <span className="font-bold text-blue-700">Atemaga Armstrong.</span>
          </p>
          <p className="text-lg md:text-2xl text-blue-800 mb-8 font-medium">
            Professional UI/UX Designer providing awesome, cool design stuff for clients.<br className="hidden md:block" />
            My vision is to satisfy my client.
          </p>
          <button className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 transition px-8 py-4 rounded-full text-white text-lg font-bold shadow-lg">
            Hire Me <FaArrowRight className="text-xl" />
          </button>
        </div>
        {/* Image or Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://via.placeholder.com/350x300"
            alt="Hero"
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-2xl border-4 border-white animate-fadeIn"
            style={{ animation: "fadeIn 1.2s" }}
          />
        </div>
      </div>
      {/* Custom animation for fadeIn */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 1.2s;
          }
        `}
      </style>
    </section>
  );
}

export default Row1;