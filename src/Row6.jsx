import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { link } from "framer-motion/client";

const projects = [
  {
    title: "Euola",
    desc: "An innovative platform with modern design and seamless user experience.",
    link: "https://euola.vercel.app/",
    featured: true,
  },
  {
    title: " InvestX",
    desc: "A modern investment platform built for performance and user experience.",
    link: "https://investx-nu.vercel.app/",
  },
  {
    title: "Euvola",
    desc: "A creative mobile app design for productivity and collaboration.",
  },
  {
    title: "Aura Commerce",
    desc: "A responsive eCommerce platform with seamless checkout.",
  },
];

const FloatingShapes = () => (
  <>
    <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#4ca771]/20 animate-float1"></div>
    <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-[#013237]/10 animate-float2"></div>
    <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-[#c0e6ba]/30 animate-float3"></div>
    <div className="absolute bottom-1/3 right-1/3 w-14 h-14 rounded-full bg-[#4ca771]/15 animate-float4"></div>
  </>
);

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 1,
      dx: Math.random() * 0.6 - 0.3,
      dy: Math.random() * 0.6 - 0.3,
      c: `rgba(76, 167, 113, ${Math.random() * 0.3})`,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.c;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30"
    />
  );
};

function Row6() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { staggerChildren: 0.2, duration: 0.6 },
    },
  };

  const itemVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="project"
      ref={ref}
      className="relative w-full min-h-screen bg-gradient-to-br from-[#eaf9e7] to-[#c0e6ba] py-24 overflow-hidden"
    >
      <ParticleBackground />
      <FloatingShapes />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-center text-[#013237] mb-20"
        >
          Featured <span className="text-[#4ca771]">Projects</span>
        </motion.h3>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`relative group ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative h-[420px] rounded-3xl bg-white/70 backdrop-blur-lg border border-white/40 shadow-lg overflow-hidden transform transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#4ca771]/40`}
              >
                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

                {/* Project Title Preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-40 bg-gradient-to-r from-[#4ca771] to-[#013237] rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                    <span className="text-white text-2xl md:text-3xl font-bold">
                      {project.title}
                    </span>
                  </div>
                </div>

                {/* Overlay bottom info */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#013237] via-[#013237]/80 to-transparent p-6 text-white">
                  <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                  <p className="opacity-90 mb-4">{project.desc}</p>

                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3 bg-white text-[#013237] font-semibold rounded-full shadow-md hover:bg-[#c0e6ba] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Live Project <FaExternalLinkAlt />
                    </motion.a>
                  ) : (
                    <span className="px-6 py-3 bg-gray-300 text-gray-600 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Floating action button */}
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-6 right-6 w-14 h-14 rounded-full bg-[#4ca771] flex items-center justify-center text-white shadow-md hover:bg-[#013237] transition-colors"
                    whileHover={{ rotate: 45, scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaArrowRight />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(18px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .animate-float4 { animation: float4 9s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

export default Row6;
