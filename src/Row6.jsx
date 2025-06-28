import React from "react";
import { FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "Greg Invest",
    desc: "A modern investment platform built for performance and user experience.",
    link: "https://greg-investment.vercel.app/"
  },
  {
    title: "Project Two",
    desc: "A creative mobile app design for productivity and collaboration.",
  },
  {
    title: "Project Three",
    desc: "A responsive eCommerce platform with seamless checkout.",
  },
  {
    title: "Project Four",
    desc: "A branding and UI/UX overhaul for a SaaS company.",
  },
];

function Row6() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-14 text-center drop-shadow">
          Recent <span className="text-blue-700">Projects</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="relative group bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center transition-transform hover:-translate-y-3 hover:shadow-blue-300"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 rounded-3xl pointer-events-none group-hover:ring-4 group-hover:ring-blue-300/40 transition"></div>
              {/* Big Animated Button */}
              <div className="w-full flex justify-center mb-8">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <button
                      className="relative w-full h-28 md:h-32 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 hover:from-blue-800 hover:to-blue-700 text-white text-2xl md:text-3xl font-bold rounded-2xl shadow-xl flex items-center justify-center gap-6 transition-all duration-300 transform group-hover:scale-97 group-hover:shadow-2xl overflow-hidden"
                      style={{ letterSpacing: "0.02em" }}
                    >
                      <span className="z-10">{project.title}</span>
                      <span className="z-10 flex items-center justify-center">
                        <FaArrowRight className="text-3xl md:text-4xl group-hover:translate-x-2 transition-transform duration-300" />
                      </span>
                      {/* Glow effect */}
                      <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400/20 via-blue-200/10 to-blue-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"></span>
                    </button>
                  </a>
                ) : (
                  <button
                    className="w-full h-28 md:h-32 bg-blue-300 text-white text-2xl md:text-3xl font-bold rounded-2xl shadow-lg cursor-not-allowed flex items-center justify-center"
                    disabled
                  >
                    {project.title}
                  </button>
                )}
              </div>
              <p className="text-blue-900 mb-6 text-center font-semibold text-lg">{project.desc}</p>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-700 font-semibold underline text-center hover:text-blue-900 transition"
                >
                  View Project
                </a>
              ) : (
                <span className="mt-auto text-gray-400 text-center">Coming Soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Row6;