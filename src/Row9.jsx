import React from "react";
import { FaAws, FaReact, FaBehance, FaCircle, FaNodeJs } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";

const techs = [
  { icon: <FaBehance className="text-blue-700 text-4xl" />, name: "Behance" },
  { icon: <FaCircle className="text-blue-500 text-4xl" />, name: "Circle" },
  { icon: <FaAws className="text-yellow-500 text-4xl" />, name: "AWS" },
  { icon: <FaReact className="text-blue-400 text-4xl" />, name: "React" },
  { icon: <SiPolymerproject className="text-pink-500 text-4xl" />, name: "Polymer" },
  { icon: <FaNodeJs className="text-indigo-500 text-4xl" />, name: "Hexagon" },
];

function Row9() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center drop-shadow">
          My <span className="text-blue-700">Tech Stack</span>
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 justify-items-center">
          {techs.map((tech, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-blue-100 p-6 hover:scale-110 transition-transform"
            >
              {tech.icon}
              <span className="mt-2 text-blue-900 font-semibold text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Row9;