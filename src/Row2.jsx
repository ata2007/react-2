import React from "react";
import { FaUserTie } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Row2() {
  return (
    <section
      className="w-full bg-gradient-to-br from-[#eaf9e7] via-[#c0e6ba] to-[#4ca771] py-16"
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6">
        {/* Icon with Framer Motion */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#eaf9e7] to-[#c0e6ba] flex items-center justify-center shadow-xl border-4 border-[#eaf9e7]"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaUserTie className="text-[#013237] text-5xl md:text-7xl" />

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-[#4ca771] rounded-full opacity-80"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#013237] rounded-full opacity-60"
              animate={{ scale: [1, 1.2, 1], opacity: [0.6, 0.8, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
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
            I am a passionate UI/UX Designer with a keen eye for detail and a
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
              "UX Research",
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
