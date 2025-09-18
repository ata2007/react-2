import React, { useEffect, useRef, useState } from "react";
import { FaLaptopCode, FaMobileAlt, FaPalette, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Row4() {
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
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <FaLaptopCode className="text-[#4ca771] text-4xl md:text-5xl" />,
      title: "Web Development",
      description:
        "Responsive and modern websites using the latest technologies and best practices.",
      color: "from-[#eaf9e7] to-[#c0e6ba]",
    },
    {
      icon: <FaMobileAlt className="text-[#4ca771] text-4xl md:text-5xl" />,
      title: "App Design",
      description:
        "Beautiful and intuitive mobile app interfaces for iOS and Android platforms.",
      color: "from-[#c0e6ba] to-[#4ca771]",
    },
    {
      icon: <FaPalette className="text-[#4ca771] text-4xl md:text-5xl" />,
      title: "UI/UX Design",
      description:
        "Creative and user-focused design solutions to enhance user experience and engagement.",
      color: "from-[#4ca771] to-[#013237]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#eaf9e7] via-[#c0e6ba] to-[#4ca771] py-20 overflow-hidden"
      id="service"
    >
      {/* Background glowing mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#4ca771] opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#013237] opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.h3
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#013237] mb-16 text-center drop-shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My <span className="text-[#4ca771]">Services</span>
        </motion.h3>

        {/* Service Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/90 backdrop-blur-md rounded-3xl shadow-xl border border-[#eaf9e7] p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:border-[#4ca771]/40 transition-all"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
            >
              {/* Icon with floating glow */}
              <div
                className={`relative mb-6 p-5 rounded-2xl bg-gradient-to-br ${service.color} transition-all duration-500`}
              >
                <div className="relative z-10">{service.icon}</div>
                <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <h4 className="text-xl font-bold text-[#013237] mb-4">
                {service.title}
              </h4>
              <p className="text-[#013237]/80 mb-6 flex-grow">
                {service.description}
              </p>

              {/* CTA Button */}
              <motion.button
                className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold shadow-md bg-gradient-to-r from-[#4ca771] to-[#013237] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More</span>
                <FaArrowRight className="relative z-10 text-sm transition-transform duration-300 group-hover:translate-x-1" />
                {/* Shine Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.1); }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
}

export default Row4;
