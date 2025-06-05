import React from "react";
import { FaPaintBrush, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";

function Row3() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Skills Card */}
        <div className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-blue-100">
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow">
            My <span className="text-blue-700">Skills</span>
          </h3>
          <p className="text-lg md:text-2xl text-blue-800 mb-8 font-medium">
            Here are some of the tools and technologies I use to create amazing user experiences.
          </p>
          <div className="space-y-6">
            {/* Skill Item */}
            <div className="flex items-center gap-4">
              <FaPaintBrush className="text-blue-700 text-3xl" />
              <span className="flex-1 font-semibold text-blue-900">Photoshop</span>
              <div className="w-2/5 bg-blue-100 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-700 h-3 rounded-full" style={{ width: "90%" }}></div>
              </div>
              <span className="ml-3 font-bold text-blue-700">90%</span>
            </div>
            <div className="flex items-center gap-4">
              <FaFigma className="text-blue-700 text-3xl" />
              <span className="flex-1 font-semibold text-blue-900">Figma</span>
              <div className="w-2/5 bg-blue-100 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-700 h-3 rounded-full" style={{ width: "80%" }}></div>
              </div>
              <span className="ml-3 font-bold text-blue-700">80%</span>
            </div>
            <div className="flex items-center gap-4">
              <FaHtml5 className="text-blue-700 text-3xl" />
              <span className="flex-1 font-semibold text-blue-900">HTML</span>
              <div className="w-2/5 bg-blue-100 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-700 h-3 rounded-full" style={{ width: "85%" }}></div>
              </div>
              <span className="ml-3 font-bold text-blue-700">85%</span>
            </div>
            <div className="flex items-center gap-4">
              <FaCss3Alt className="text-blue-700 text-3xl" />
              <span className="flex-1 font-semibold text-blue-900">CSS</span>
              <div className="w-2/5 bg-blue-100 rounded-full h-3 overflow-hidden">
                <div className="bg-blue-700 h-3 rounded-full" style={{ width: "75%" }}></div>
              </div>
              <span className="ml-3 font-bold text-blue-700">75%</span>
            </div>
          </div>
        </div>
        {/* Optional: Add an illustration or image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://via.placeholder.com/300x350"
            alt="Skills Illustration"
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

export default Row3;