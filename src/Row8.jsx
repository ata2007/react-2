import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Adobe", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Adobe_Corporate_logo.png" },
  { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png" },
  { name: "Uber", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Uber_Logo_2018.png" },
  { name: "Airbnb", logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" },
  { name: "Slack", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" }
];

// Floating morphing blobs
const MorphingBlobs = () => (
  <>
    <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-tr from-[#4ca771]/40 to-[#013237]/30 rounded-full blur-3xl animate-blob1"></div>
    <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-[#c0e6ba]/40 to-[#4ca771]/30 rounded-full blur-3xl animate-blob2"></div>
    <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-[#013237]/30 to-[#c0e6ba]/20 rounded-full blur-2xl animate-blob3"></div>
  </>
);

// Particle shimmer background
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
      direction: Math.random() * Math.PI * 2,
      alpha: Math.random() * 0.5 + 0.2,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += Math.cos(p.direction) * p.speed;
        p.y += Math.sin(p.direction) * p.speed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(76, 167, 113, ${p.alpha})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};

function Row8() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#eaf9e7] to-[#c0e6ba] py-24" id="brands">
      {/* Background elements */}
      <MorphingBlobs />
      <ParticleBackground />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h3
          className="text-4xl md:text-5xl font-extrabold text-[#013237] mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Trusted by <span className="text-[#4ca771]">Leading Brands</span>
        </motion.h3>
        <motion.p
          className="text-center text-[#013237]/70 mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From global giants to innovative startups, we’ve collaborated with brands shaping the future.
        </motion.p>

        {/* Infinite scroll logos */}
        <div className="relative overflow-hidden py-8">
          <div className="flex w-max animate-infinite-scroll">
            {duplicatedBrands.map((brand, idx) => (
              <motion.div
                key={`${brand.name}-${idx}`}
                className="mx-8 w-44 h-28 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-[#4ca771]/20 p-6 relative group perspective"
                whileHover={{ scale: 1.1, rotateY: 10, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                {/* Glow pulse ring */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#4ca771]/50 opacity-0 group-hover:opacity-100 animate-pulse-glow"></div>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-500 drop-shadow-md"
                />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-[#013237] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 shadow-md">
                  {brand.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        @keyframes blob1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(20px, -30px) scale(1.1);
          }
        }
        @keyframes blob2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-30px, 40px) scale(1.15);
          }
        }
        @keyframes blob3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(25px, -20px) scale(0.95);
          }
        }
        .animate-blob1 {
          animation: blob1 18s ease-in-out infinite;
        }
        .animate-blob2 {
          animation: blob2 22s ease-in-out infinite;
        }
        .animate-blob3 {
          animation: blob3 26s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            box-shadow: 0 0 10px rgba(76, 167, 113, 0.4), 0 0 30px rgba(76, 167, 113, 0.2);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(76, 167, 113, 0.8), 0 0 40px rgba(76, 167, 113, 0.4);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Row8;
