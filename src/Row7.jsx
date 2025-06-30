import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager",
    text: "EUVOLA delivered an amazing UI/UX for our app. The process was smooth and the results exceeded our expectations!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    text: "Professional, creative, and always on time. Highly recommended for any digital project.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emily White",
    role: "Startup Founder",
    text: "The design quality and attention to detail were outstanding. Will work with EUVOLA again!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

function Row7() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16" id="blog">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center drop-shadow">
          Client <span className="text-blue-700">Testimonials</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-transform"
            >
              <FaQuoteLeft className="text-blue-200 text-3xl mb-4" />
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-blue-200 shadow mb-4 object-cover"
              />
              <p className="text-blue-800 mb-4 italic">"{t.text}"</p>
              <div className="font-bold text-blue-900">{t.name}</div>
              <div className="text-blue-700 text-sm">{t.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Row7;