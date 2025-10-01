import React from "react";
import { FaUserTie, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Row2() {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#eaf9e7] via-[#c0e6ba] to-[#4ca771] py-16"
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6">
        {/* Enhanced Animated Cube */}
        <motion.div
          className="flex-1 flex justify-center perspective-[1000px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-48 h-48 md:w-64 md:h-64"
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 360],
              rotateX: [0, 360],
            }}
            transition={{
              y: { 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatType: "reverse"
              },
              rotateY: { 
                duration: 12, 
                repeat: Infinity, 
                ease: "linear" 
              },
              rotateX: { 
                duration: 18, 
                repeat: Infinity, 
                ease: "linear" 
              },
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Cube Container with enhanced styling */}
            <div className="relative w-full h-full" style={{ transformStyle: "preserve-3d" }}>
              {/* Front Face */}
              <motion.div
                className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white/40 bg-gradient-to-br from-[#4ca771] to-[#013237] text-white"
                style={{ transform: 'translateZ(96px)' }}
                whileHover={{ scale: 1.05 }}
              >
                <FaUserTie className="text-5xl md:text-7xl mb-2" />
                <span className="text-xs md:text-sm font-semibold opacity-90">DESIGN</span>
              </motion.div>

              {/* Back Face */}
              <motion.div
                className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white/40 bg-gradient-to-br from-[#013237] to-[#4ca771] text-white"
                style={{ transform: 'rotateY(180deg) translateZ(96px)' }}
                whileHover={{ scale: 1.05 }}
              >
                <FaUserTie className="text-5xl md:text-7xl mb-2" />
                <span className="text-xs md:text-sm font-semibold opacity-90">CREATIVE</span>
              </motion.div>

              {/* Right Face */}
              <motion.div
                className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white/40 bg-gradient-to-br from-[#3a8d5f] to-[#012228] text-white"
                style={{ transform: 'rotateY(90deg) translateZ(96px)' }}
                whileHover={{ scale: 1.05 }}
              >
                <FaUserTie className="text-5xl md:text-7xl mb-2" />
                <span className="text-xs md:text-sm font-semibold opacity-90">UI/UX</span>
              </motion.div>

              {/* Left Face */}
              <motion.div
                className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white/40 bg-gradient-to-br from-[#5ab57f] to-[#014237] text-white"
                style={{ transform: 'rotateY(-90deg) translateZ(96px)' }}
                whileHover={{ scale: 1.05 }}
              >
                <FaUserTie className="text-5xl md:text-7xl mb-2" />
                <span className="text-xs md:text-sm font-semibold opacity-90">INNOVATE</span>
              </motion.div>

              {/* Top Face */}
              <motion.div
                className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white/40 bg-gradient-to-br from-[#45a06b] to-[#013237] text-white"
                style={{ transform: 'rotateX(90deg) translateZ(96px)' }}
                whileHover={{ scale: 1.05 }}
              >
                <FaUserTie className="text-5xl md:text-7xl mb-2" />
                <span className="text-xs md:text-sm font-semibold opacity-90">SOLVE</span>
              </motion.div>

              {/* Bottom Face */}
              <motion.div
                className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-2xl border-2 border-white/40 bg-gradient-to-br from-[#2e7a50] to-[#011c1f] text-white"
                style={{ transform: 'rotateX(-90deg) translateZ(96px)' }}
                whileHover={{ scale: 1.05 }}
              >
                <FaUserTie className="text-5xl md:text-7xl mb-2" />
                <span className="text-xs md:text-sm font-semibold opacity-90">CREATE</span>
              </motion.div>

              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Particles around the cube */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full"
                animate={{
                  x: [0, Math.sin(i * 45) * 40, 0],
                  y: [0, Math.cos(i * 45) * 40, 0],
                  z: [0, Math.sin(i * 45) * 40, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Text Content (unchanged) */}
        <motion.article
          className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border-2 border-[#eaf9e7]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl font-extrabold text-[#013237] mb-6 drop-shadow">
            About <span className="text-[#4ca771]">Me</span>
          </h3>
          <p className="text-base md:text-xl text-[#013237] mb-6 font-medium">
            I am a passionate UI/UX Designer and Web Developer with a keen eye for detail and a
            drive to create visually appealing and user-friendly designs.
          </p>
          <p className="text-base md:text-xl text-[#013237] mb-8 font-medium">
            My goal is to deliver high-quality work that exceeds client
            expectations and creates meaningful user experiences.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
            {[
              "UI Design",
              "Web developing",
              "Prototyping",
              "Wireframing",
              "User Testing",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-[#eaf9e7] text-[#013237] rounded-full text-sm font-medium border border-[#c0e6ba] cursor-pointer"
                whileHover={{ scale: 1.1, backgroundColor: "#c0e6ba" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4ca771] to-[#013237] hover:from-[#013237] hover:to-[#4ca771] transition-all duration-300 px-6 py-3 md:px-8 md:py-4 rounded-full text-white text-base md:text-lg font-bold shadow-lg hover:shadow-xl mx-auto md:mx-0"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Learn more about me"
          >
            Learn More <FaArrowRight />
          </motion.button>
        </motion.article>
      </div>
    </section>
  );
}

export default Row2;