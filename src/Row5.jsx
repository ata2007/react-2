import React, { useEffect, useRef, useState } from "react";
import {
  FaGlobe, FaObjectUngroup, FaCashRegister, FaPassport,
  FaPaintBrush, FaCube, FaAppStoreIos, FaShopify, FaArrowRight
} from "react-icons/fa";

function Row5() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const services = [
    { icon: <FaGlobe />, title: "Web Development", desc: "Custom websites tailored to your needs, built with the latest technologies.", number: "01" },
    { icon: <FaObjectUngroup />, title: "UI / UX DESIGN", desc: "User-centered designs that prioritize seamless experiences and interactions.", number: "02" },
    { icon: <FaCashRegister />, title: "eCommerce Solution", desc: "Secure scalable online stores that boost sales and customer engagement.", number: "03" },
    { icon: <FaPassport />, title: "CMS Development", desc: "Flexible CMS systems that empower you to manage your content with ease.", number: "04" },
    { icon: <FaPaintBrush />, title: "Web Design", desc: "Visually stunning responsive websites that captivate your audience.", number: "05" },
    { icon: <FaCube />, title: "3D Printing", desc: "Innovative solutions for product design, prototyping, and production.", number: "06" },
    { icon: <FaAppStoreIos />, title: "App Development", desc: "Mobile apps that enhance engagement, streamline processes, and drive conversions.", number: "07" },
    { icon: <FaShopify />, title: "Marketing", desc: "Strategic online marketing that amplifies your brand visibility & sales.", number: "08" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#eaf9e7] via-[#c0e6ba] to-[#4ca771] py-20 overflow-hidden"
      id="portfolio"
    >
      {/* Glowing gradient background layers */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-60 h-60 bg-[#4ca771] rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-[#013237] rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#013237] tracking-wide drop-shadow-md">
            My <span className="bg-gradient-to-r from-[#4ca771] to-[#013237] bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-[#013237]/80 font-medium">Providing a wide range of creative & digital solutions</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative group bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-[#eaf9e7] p-8 flex flex-col items-center text-center transition-all duration-700 transform hover:-translate-y-4 hover:shadow-2xl hover:scale-105 hover:rotate-1 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Animated glow border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#4ca771] group-hover:shadow-[0_0_25px_#4ca771] transition-all duration-500"></div>

              {/* Icon */}
              <div className="relative mb-6 p-5 rounded-2xl bg-gradient-to-br from-[#4ca771] to-[#013237] text-white text-4xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                {service.icon}
                {/* Orbiting decorative dot */}
                <span className="absolute -top-2 -right-2 w-3 h-3 bg-white rounded-full animate-ping"></span>
              </div>

              {/* Title + Description */}
              <h3 className="text-lg md:text-xl font-bold text-[#013237] mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-[#013237]/80 mb-6 flex-grow">{service.desc}</p>

              {/* Bottom Actions */}
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-r from-[#4ca771] to-[#013237] text-white font-bold text-sm shadow-md">
                  {service.number}
                </span>
                <button className="group flex items-center gap-1 text-[#4ca771] hover:text-[#013237] font-semibold text-sm transition-colors duration-300">
                  Details
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.2); opacity: 0.7; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
}

export default Row5;
