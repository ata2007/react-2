import React from "react";

const projects = [
  {
    image: "https://via.placeholder.com/400x250",
    title: "Project One",
    desc: "A modern web application with a focus on user experience and performance.",
  },
  {
    image: "https://via.placeholder.com/400x250",
    title: "Project Two",
    desc: "A creative mobile app design for productivity and collaboration.",
  },
  {
    image: "https://via.placeholder.com/400x250",
    title: "Project Three",
    desc: "A responsive eCommerce platform with seamless checkout.",
  },
  {
    image: "https://via.placeholder.com/400x250",
    title: "Project Four",
    desc: "A branding and UI/UX overhaul for a SaaS company.",
  },
];

function Row6() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center drop-shadow">
          Recent <span className="text-blue-700">Projects</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-4 flex flex-col hover:scale-105 transition-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-2xl mb-4 w-full h-40 object-cover shadow"
              />
              <h4 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h4>
              <p className="text-blue-800 mb-4">{project.desc}</p>
              <button className="mt-auto bg-blue-700 hover:bg-blue-800 transition px-6 py-2 rounded-full text-white font-semibold shadow">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Row6;