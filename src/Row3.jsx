import React, { useState, useEffect, useRef } from "react";
import { FaPaintBrush, FaFigma, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { motion } from "framer-motion";

const skills = [
  { icon: <FaPaintBrush className="text-[#4ca771] text-2xl" />, name: "Photoshop", percent: 90 },
  { icon: <FaFigma className="text-[#4ca771] text-2xl" />, name: "Figma", percent: 80 },
  { icon: <FaHtml5 className="text-[#4ca771] text-2xl" />, name: "HTML", percent: 85 },
  { icon: <FaCss3Alt className="text-[#4ca771] text-2xl" />, name: "CSS", percent: 75 },
];

function Row3() {
  const [counted, setCounted] = useState(false);
  const [animatedPercents, setAnimatedPercents] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);

          skills.forEach((skill, index) => {
            let start = 0;
            const end = skill.percent;
            const duration = 2000;
            const incrementTime = 20;
            const steps = duration / incrementTime;
            const incrementValue = end / steps;

            const timer = setInterval(() => {
              start += incrementValue;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }

              setAnimatedPercents((prev) => {
                const newPercents = [...prev];
                newPercents[index] = Math.floor(start);
                return newPercents;
              });
            }, incrementTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [counted]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#eaf9e7] via-[#c0e6ba] to-[#4ca771] py-20 overflow-hidden"
      id="skills"
    >
      {/* Decorative glowing orbs */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-[#4ca771] opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#013237] opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6 z-10">
        {/* Skills Description */}
        <motion.div
          className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border-2 border-[#eaf9e7]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#013237] mb-6 drop-shadow">
            My <span className="text-[#4ca771]">Skills</span>
          </h3>
          <p className="text-base md:text-xl text-[#013237] mb-8 font-medium">
            Here are some of the tools and technologies I use to create amazing user experiences.
          </p>
          <div className="space-y-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 hover:scale-[1.02] transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="p-2 bg-[#eaf9e7] rounded-full">{skill.icon}</div>
                <span className="w-20 font-semibold text-[#013237]">{skill.name}</span>
                <div className="flex-1 flex items-center h-6">
                  <div className="relative w-full bg-[#eaf9e7] rounded-full h-4 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-[#c0e6ba] via-[#4ca771] to-[#013237] h-4 rounded-full shimmer"
                      initial={{ width: 0 }}
                      animate={{ width: `${counted ? skill.percent : 0}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                  <span className="ml-4 font-bold text-[#013237] min-w-[40px]">
                    {animatedPercents[idx]}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Chart */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border-2 border-[#eaf9e7] p-6 md:p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-xl md:text-2xl font-bold text-[#013237] mb-6">
            Skill Proficiency
          </h4>
          <div className="w-full flex flex-col gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 hover:scale-[1.02] transition-transform"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <span className="w-16 text-[#013237] font-semibold text-sm md:text-base">
                  {skill.name}
                </span>
                <div className="flex-1 h-8 bg-[#eaf9e7] rounded-full relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-8 bg-gradient-to-r from-[#c0e6ba] via-[#4ca771] to-[#013237] rounded-full shimmer"
                    initial={{ width: 0 }}
                    animate={{ width: `${counted ? skill.percent : 0}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#013237]">
                    {animatedPercents[idx]}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Shimmer effect CSS */}
      <style>{`
        .shimmer {
          background-size: 200% 100%;
          animation: shimmer-move 3s infinite linear;
        }
        @keyframes shimmer-move {
          0% { background-position: 0% 0%; }
          100% { background-position: -200% 0%; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}

export default Row3;
