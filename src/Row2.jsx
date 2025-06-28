import React from "react";
import { FaUserTie } from "react-icons/fa";

function Row2() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Image/Icon */}
        <div className="flex-1 flex justify-center">
          <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-blue-200 flex items-center justify-center shadow-xl border-4 border-blue-100">
            <FaUserTie className="text-blue-700 text-6xl md:text-8xl" />
          </div>
        </div>
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-blue-100">
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow">
            About <span className="text-blue-700">Me</span>
          </h3>
          <p className="text-lg md:text-2xl text-blue-800 mb-8 font-medium">
            I am a passionate UI/UX Designer with a keen eye for detail and a drive to create visually appealing and user-friendly designs.<br className="hidden md:block" />
            My goal is to deliver high-quality work that exceeds client expectations.
          </p>
          <button className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 transition px-8 py-4 rounded-full text-white text-lg font-bold shadow-lg">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Row2;