import React, { useState, useRef, useEffect } from "react";
import { FaAws, FaReact, FaBehance, FaCircle, FaNodeJs } from "react-icons/fa";
import { SiPolymerproject, SiJavascript, SiPython, SiFigma, SiAdobexd, SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const techs = [
  { icon: <FaBehance className="text-[#0057ff] text-4xl" />, name: "Behance", color: "#0057ff" },
  { icon: <FaCircle className="text-[#3b82f6] text-4xl" />, name: "Circle", color: "#3b82f6" },
  { icon: <FaAws className="text-[#ff9900] text-4xl" />, name: "AWS", color: "#ff9900" },
  { icon: <FaReact className="text-[#61dafb] text-4xl" />, name: "React", color: "#61dafb" },
  { icon: <SiPolymerproject className="text-[#ff4470] text-4xl" />, name: "Polymer", color: "#ff4470" },
  { icon: <FaNodeJs className="text-[#339933] text-4xl" />, name: "Node.js", color: "#339933" },
  { icon: <SiJavascript className="text-[#f7df1e] text-4xl" />, name: "JavaScript", color: "#f7df1e" },
  { icon: <SiPython className="text-[#3776ab] text-4xl" />, name: "Python", color: "#3776ab" },
  { icon: <SiFigma className="text-[#f24e1e] text-4xl" />, name: "Figma", color: "#f24e1e" },
  { icon: <SiAdobexd className="text-[#ff61f6] text-4xl" />, name: "Adobe XD", color: "#ff61f6" },
  { icon: <SiTailwindcss className="text-[#06b6d4] text-4xl" />, name: "Tailwind", color: "#06b6d4" },
  { icon: <SiMongodb className="text-[#47a248] text-4xl" />, name: "MongoDB", color: "#47a248" },
  { icon: <SiExpress className="text-[#000000] text-4xl" />, name: "Express", color: "#000000" },
];

const FloatingBackgroundElements = () => (
  <>
    {/* Floating shapes */}
    <div className="absolute top-20 left-[10%] w-10 h-10 rounded-full bg-[#4ca771]/10 animate-float1"></div>
    <div className="absolute top-1/3 right-[15%] w-14 h-14 rounded-full bg-[#013237]/5 animate-float2"></div>
    <div className="absolute bottom-1/4 left-[20%] w-8 h-8 rounded-full bg-[#c0e6ba]/20 animate-float3"></div>
    <div className="absolute bottom-1/3 right-[25%] w-12 h-12 rounded-full bg-[#4ca771]/15 animate-float4"></div>

    {/* Geometric shapes */}
    <div className="absolute top-1/4 right-[20%] w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-[#4ca771]/10 border-r-[15px] border-r-transparent animate-float5"></div>
    <div className="absolute bottom-1/5 left-[15%] w-0 h-0 border-l-[12px] border-l-transparent border-t-[20px] border-t-[#013237]/5 border-r-[12px] border-r-transparent animate-float6"></div>
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

    const particles = [];
    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.3 + 0.1,
        direction: Math.random() * Math.PI * 2,
        color: `rgba(76, 167, 113, ${Math.random() * 0.1 + 0.05})`,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.x += Math.cos(p.direction) * p.speed;
        p.y += Math.sin(p.direction) * p.speed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections
        particles.forEach((p2, j) => {
          if (i !== j) {
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(76,167,113,0.05)`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};

function Row9() {
  const [activeTech, setActiveTech] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setTilt({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-[#eaf9e7] to-[#c0e6ba] py-20" id="tech-stack">
      <ParticleBackground />
      <FloatingBackgroundElements />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h3
          className="text-4xl md:text-5xl font-extrabold text-[#013237] mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My <span className="text-[#4ca771]">Tech Stack</span>
        </motion.h3>

        <motion.p
          className="text-center text-[#4ca771] mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Technologies and tools I use to bring ideas to life
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {techs.map((tech, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl border border-[#c0e6ba]/50 p-6 relative group cursor-pointer overflow-hidden"
              style={{
                transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              }}
              whileHover={{ scale: 1.1, rotate: 2 }}
              onHoverStart={() => setActiveTech(tech.name)}
              onHoverEnd={() => setActiveTech(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              <span className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/10 opacity-0 group-hover:opacity-100 animate-ripple"></span>

              <motion.div
                className="relative z-10"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {tech.icon}
              </motion.div>

              <span
                className="mt-3 text-[#013237] font-semibold text-sm text-center transition-colors duration-300 relative z-10"
                style={{ color: activeTech === tech.name ? tech.color : "#013237" }}
              >
                {tech.name}
              </span>

              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-[#013237] text-white text-xs font-medium py-1 px-3 rounded opacity-0 group-hover:opacity-100"
                initial={{ y: 10, opacity: 0 }}
                animate={activeTech === tech.name ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
              >
                Explore {tech.name} projects →
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Skill categories */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-[#c0e6ba] p-6">
            <h4 className="text-lg font-bold text-[#013237] mb-4">Frontend Development</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "Tailwind"].map((skill) => (
                <span key={skill} className="bg-[#4ca771]/10 text-[#013237] text-xs font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-[#c0e6ba] p-6">
            <h4 className="text-lg font-bold text-[#013237] mb-4">Backend Development</h4>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "MongoDB", "AWS"].map((skill) => (
                <span key={skill} className="bg-[#4ca771]/10 text-[#013237] text-xs font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-lg border border-[#c0e6ba] p-6">
            <h4 className="text-lg font-bold text-[#013237] mb-4">Design Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["Figma", "Adobe XD", "Behance"].map((skill) => (
                <span key={skill} className="bg-[#4ca771]/10 text-[#013237] text-xs font-medium px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style >{`
        @keyframes float1 { 0%, 100% { transform: translateY(0) rotate(0deg);} 50% { transform: translateY(-10px) rotate(5deg);} }
        @keyframes float2 { 0%, 100% { transform: translateY(0) rotate(0deg);} 50% { transform: translateY(15px) rotate(-5deg);} }
        @keyframes float3 { 0%, 100% { transform: translateY(0) rotate(0deg);} 50% { transform: translateY(-8px) rotate(3deg);} }
        @keyframes float4 { 0%, 100% { transform: translateY(0) rotate(0deg);} 50% { transform: translateY(12px) rotate(-3deg);} }
        @keyframes float5 { 0%, 100% { transform: translateY(0) rotate(0deg);} 50% { transform: translateY(-20px) rotate(10deg);} }
        @keyframes float6 { 0%, 100% { transform: translateY(0) rotate(0deg);} 50% { transform: translateY(15px) rotate(-10deg);} }
        .animate-float1 { animation: float1 10s ease-in-out infinite; }
        .animate-float2 { animation: float2 8s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
        .animate-float4 { animation: float4 9s ease-in-out infinite; }
        .animate-float5 { animation: float5 11s ease-in-out infinite; }
        .animate-float6 { animation: float6 7s ease-in-out infinite; }

        @keyframes ripple { 0% { transform: scale(0.9); opacity: 0.6;} 70% { transform: scale(1.2); opacity: 0.2;} 100% { transform: scale(1.5); opacity: 0;} }
        .animate-ripple { animation: ripple 1.8s infinite ease-out; }
      `}</style>
    </section>
  );
}

export default Row9;