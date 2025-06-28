import React from "react";
import { FaPaintBrush, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";

const skills = [
  { icon: <FaPaintBrush className="text-blue-700 text-2xl" />, name: "Photoshop", percent: 90 },
  { icon: <FaFigma className="text-blue-700 text-2xl" />, name: "Figma", percent: 80 },
  { icon: <FaHtml5 className="text-blue-700 text-2xl" />, name: "HTML", percent: 85 },
  { icon: <FaCss3Alt className="text-blue-700 text-2xl" />, name: "CSS", percent: 75 },
];

function Row3() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
  
        <div className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-blue-100">
          <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow">
            My <span className="text-blue-700">Skills</span>
          </h3>
          <p className="text-lg md:text-2xl text-blue-800 mb-8 font-medium">
            Here are some of the tools and technologies I use to create amazing user experiences.
          </p>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-4">
                {skill.icon}
                <span className="w-20 font-semibold text-blue-900">{skill.name}</span>
                <div className="flex-1 flex items-center h-6">
                  <div className="relative w-full bg-blue-100 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 h-4 rounded-full transition-all duration-700"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                  <span className="ml-4 font-bold text-blue-700">{skill.percent}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      
        <div className="flex-1 flex flex-col justify-center items-center bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8">
          <h4 className="text-xl font-bold text-blue-900 mb-6">Skill Chart</h4>
          <div className="w-full flex flex-col gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="flex items-end gap-4">
                <span className="w-16 text-blue-800 font-semibold">{skill.name}</span>
                <div className="flex-1 h-8 bg-blue-100 rounded-full relative overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-8 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 rounded-full transition-all duration-700"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
                <span className="ml-4 text-blue-700 font-bold">{skill.percent}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
   
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