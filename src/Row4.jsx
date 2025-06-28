import React from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette } from "react-icons/fa";

function Row4() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-16" id="service">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-12 text-center drop-shadow">
          My <span className="text-blue-700">Services</span>
        </h3>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <FaLaptopCode className="text-blue-700 text-5xl mb-4" />
            <h4 className="text-xl font-bold text-blue-900 mb-2">Web Development</h4>
            <p className="text-blue-800 mb-4">
              Responsive and modern websites using the latest technologies and best practices.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 transition px-6 py-2 rounded-full text-white font-semibold shadow">
              Learn More
            </button>
          </div>
          {/* Service Card 2 */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <FaMobileAlt className="text-blue-700 text-5xl mb-4" />
            <h4 className="text-xl font-bold text-blue-900 mb-2">App Design</h4>
            <p className="text-blue-800 mb-4">
              Beautiful and intuitive mobile app interfaces for iOS and Android platforms.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 transition px-6 py-2 rounded-full text-white font-semibold shadow">
              Learn More
            </button>
          </div>
          {/* Service Card 3 */}
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <FaPalette className="text-blue-700 text-5xl mb-4" />
            <h4 className="text-xl font-bold text-blue-900 mb-2">UI/UX Design</h4>
            <p className="text-blue-800 mb-4">
              Creative and user-focused design solutions to enhance user experience and engagement.
            </p>
            <button className="bg-blue-700 hover:bg-blue-800 transition px-6 py-2 rounded-full text-white font-semibold shadow">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Row4;