import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Row10() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center drop-shadow">
          Contact <span className="text-blue-700">Me</span>
        </h3>
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-10 flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-4 text-blue-800">
              <FaEnvelope className="text-2xl text-blue-700" />
              <a
                href="mailto:atemagaa@gmail.com"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                atemagaa@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 text-blue-800">
              <FaPhoneAlt className="text-2xl text-blue-700" />
              <a
                href="https://wa.me/2348142720641"
                className="hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +234 8142 72 0641
              </a>
            </div>
            <div className="flex items-center gap-4 text-blue-800">
              <FaMapMarkerAlt className="text-2xl text-blue-700" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>
          {/* Contact Form */}
          <form className="flex-1 flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="p-4 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 transition px-8 py-4 rounded-full text-white text-lg font-bold shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Row10;