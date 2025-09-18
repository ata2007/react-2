import React, { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Row10 - Amplified Contact Section
 * - Parallax/tilt card
 * - Particle network with connecting lines
 * - Animated gradient borders, shimmer, and ripple
 * - Field validation with shake animation
 * - Confetti canvas burst on submit
 * - Accessible success message
 */

const FloatingBackgroundElements = () => (
  <>
    <div className="absolute top-20 left-[8%] w-12 h-12 rounded-full bg-[#4ca771]/20 animate-float1" />
    <div className="absolute top-1/3 right-[15%] w-20 h-20 rounded-full bg-[#013237]/10 animate-float2" />
    <div className="absolute bottom-1/4 left-[18%] w-10 h-10 rounded-full bg-[#c0e6ba]/30 animate-float3" />
    <div className="absolute bottom-1/3 right-[22%] w-14 h-14 rounded-full bg-[#4ca771]/15 animate-float4" />
    <div className="absolute top-1/5 right-1/5 w-0 h-0 border-l-[15px] border-l-transparent border-b-[25px] border-b-[#4ca771]/20 border-r-[15px] border-r-transparent animate-float5" />
    <div className="absolute bottom-1/5 left-1/5 w-0 h-0 border-l-[20px] border-l-transparent border-t-[30px] border-t-[#013237]/10 border-r-[20px] border-r-transparent animate-float6" />
  </>
);

/* Particle network with subtle connecting lines */
const ParticleBackground = ({ intensity = 30 }) => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const particles = Array.from({ length: intensity }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2 + 0.8,
      alpha: Math.random() * 0.3 + 0.05,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(76,167,113,${p.alpha})`;
        ctx.fill();

        // connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(76,167,113,${0.08 * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [intensity]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />;
};

/* Tiny confetti engine (canvas) */
const useConfetti = () => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let pieces = [];
    let raf;

    const createConfetti = (x, y) => {
      const colors = ["#4ca771", "#c0e6ba", "#013237", "#eaf9e7", "#ffffff"];
      for (let i = 0; i < 40; i++) {
        pieces.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 8,
          vy: Math.random() * -8 - 2,
          r: Math.random() * 6 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
          life: 100 + Math.random() * 40,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p, i) => {
        p.vy += 0.25; // gravity
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life -= 1;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r / 2);
        ctx.restore();
      });
      pieces = pieces.filter((p) => p.life > 0 && p.y < canvas.height + 50);
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return { canvasRef: ref, createConfetti: (x, y) => {
    const canvas = ref.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const cx = x - rect.left;
    const cy = y - rect.top;
    // createConfetti closure access via re-creation inside effect is not possible here,
    // so we'll trigger by dispatching a custom event
    canvas.dispatchEvent(new CustomEvent("confetti", { detail: { x: cx, y: cy } }));
  } };
};

function Row10() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const cardRef = useRef(null);
  const confettiCanvasRef = useRef(null);

  // small tilt using mouse pos relative to card
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width; // 0..1
      const y = (e.clientY - rect.top) / rect.height;
      const rotY = (x - 0.5) * 12; // -6..6
      const rotX = (0.5 - y) * 8; // -4..4
      el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(0)`;
    };
    const reset = () => (el.style.transform = "");
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  // initialize confetti canvas event listener
  useEffect(() => {
    const canvas = confettiCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let pieces = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (x, y) => {
      const colors = ["#4ca771", "#c0e6ba", "#013237", "#eaf9e7", "#ffffff"];
      for (let i = 0; i < 60; i++) {
        pieces.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 10,
          vy: Math.random() * -8 - 2,
          r: Math.random() * 6 + 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          rot: Math.random() * Math.PI * 2,
          vr: (Math.random() - 0.5) * 0.3,
          life: 90 + Math.random() * 60,
        });
      }
    };

    const handler = (ev) => spawn(ev.detail.x, ev.detail.y);
    canvas.addEventListener("confetti", handler);

    let raf;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach((p, i) => {
        p.vy += 0.28;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        p.life--;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r / 2);
        ctx.restore();
      });
      pieces = pieces.filter((p) => p.life > 0 && p.y < canvas.height + 60);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("confetti", handler);
    };
  }, []);

  // validation helpers
  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = "Please enter your name";
    if (!data.email.match(/^\S+@\S+\.\S+$/)) errors.email = "Please enter a valid email";
    if (!data.message.trim() || data.message.trim().length < 10)
      errors.message = "Message should be at least 10 characters";
    return errors;
  };

  const errors = validate(formData);

  // simulate send
  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (Object.keys(errors).length) {
      // shake the invalid fields by toggling a class
      setStatus("error");
      setTimeout(() => setStatus(null), 1400);
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    // simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("success");
      // trigger confetti at approx center of card
      const card = cardRef.current;
      if (card) {
        const rect = card.getBoundingClientRect();
        const canvas = confettiCanvasRef.current;
        if (canvas) {
          canvas.dispatchEvent(
            new CustomEvent("confetti", { detail: { x: rect.left + rect.width / 2, y: rect.top + 80 } })
          );
        }
      }
      // reset after short delay
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setTouched({});
      }, 2200);
    }, 1400);
  };

  // small animated label component for inputs
  const FloatingLabelInput = ({ id, name, placeholder, type = "text" }) => (
    <div className={`relative ${errors[name] && touched[name] ? "shake" : ""}`}>
      <label htmlFor={id} className="sr-only">
        {placeholder}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={formData[name]}
        onChange={(e) => setFormData((p) => ({ ...p, [name]: e.target.value }))}
        onBlur={() => setTouched((t) => ({ ...t, [name]: true }))}
        placeholder={placeholder}
        className={`w-full p-4 rounded-xl border border-[#c0e6ba] focus:outline-none focus:ring-2 focus:ring-[#4ca771] bg-white/80 transition-all shadow-sm ${
          errors[name] && touched[name] ? "border-red-400 ring-red-200" : ""
        }`}
        aria-invalid={errors[name] ? "true" : "false"}
        aria-describedby={errors[name] ? `${id}-error` : undefined}
        required
      />
      <AnimatePresence>
        {errors[name] && touched[name] && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="text-sm text-red-500 mt-2"
          >
            {errors[name]}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <section
      id="contact"
      className="w-full min-h-screen relative overflow-hidden bg-gradient-to-br from-[#eaf9e7] to-[#c0e6ba] py-20 flex items-center"
      aria-labelledby="contact-heading"
    >
      <ParticleBackground intensity={30} />
      <FloatingBackgroundElements />

      {/* confetti canvas sits on top */}
      <canvas ref={confettiCanvasRef} className="pointer-events-none fixed inset-0 z-50" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.h3
          id="contact-heading"
          className="text-4xl md:text-6xl font-extrabold text-[#013237] mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Contact <span className="text-[#4ca771]">Me</span>
        </motion.h3>

        <motion.p
          className="text-center text-[#4ca771] mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Let's collaborate. Send a message and I’ll get back to you asap.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: contact cards */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div
              ref={cardRef}
              className={`relative bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-[#eaf9e7] p-8 overflow-hidden transition-transform duration-300`}
              aria-hidden="true"
            >
              <div className="absolute inset-0 rounded-3xl pointer-events-none">
                {/* animated gradient border */}
                <div className="absolute -inset-px rounded-3xl border border-transparent bg-gradient-to-r from-[#eaf9e7] via-[#c0e6ba] to-[#4ca771] opacity-20 blur-sm animate-shimmer" />
              </div>

              <h4 className="text-2xl font-bold text-[#013237] mb-6">Get in touch</h4>

              <div className="space-y-6">
                <motion.a
                  href="mailto:atemagaa@gmail.com"
                  className="flex items-center gap-4 text-[#013237] group"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#4ca771]/10 flex items-center justify-center group-hover:bg-[#4ca771]/20 transition-colors">
                    <FaEnvelope className="text-xl text-[#4ca771]" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-[#4ca771]">atemagaa@gmail.com</p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://wa.me/2348142720641"
                  className="flex items-center gap-4 text-[#013237] group"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#4ca771]/10 flex items-center justify-center group-hover:bg-[#4ca771]/20 transition-colors">
                    <FaPhoneAlt className="text-xl text-[#4ca771]" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-[#4ca771]">+234 8142 72 0641</p>
                  </div>
                </motion.a>

                <motion.div
                  className="flex items-center gap-4 text-[#013237] group"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#4ca771]/10 flex items-center justify-center group-hover:bg-[#4ca771]/20 transition-colors">
                    <FaMapMarkerAlt className="text-xl text-[#4ca771]" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-[#4ca771]">Lagos, Nigeria</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#c0e6ba]">
                <p className="text-[#013237] font-semibold mb-4">Follow me</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedin className="text-xl" />, href: "#", color: "hover:text-[#0077b5]" },
                    { icon: <FaGithub className="text-xl" />, href: "#", color: "hover:text-[#333]" },
                    { icon: <FaTwitter className="text-xl" />, href: "#", color: "hover:text-[#1da1f2]" },
                  ].map((s, i) => (
                    <motion.a
                      key={i}
                      href={s.href}
                      className={`w-10 h-10 rounded-full bg-[#4ca771]/10 flex items-center justify-center text-[#4ca771] ${s.color}`}
                      whileHover={{ scale: 1.12, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-[#c0e6ba] p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h4 className="text-2xl font-bold text-[#013237] mb-6">Send a message</h4>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <FloatingLabelInput id="name" name="name" placeholder="Your Name" />
              <FloatingLabelInput id="email" name="email" placeholder="Your Email" type="email" />
              <div className={`${errors.message && touched.message ? "shake" : ""}`}>
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  onBlur={() => setTouched((t) => ({ ...t, message: true }))}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full p-4 rounded-xl border border-[#c0e6ba] focus:outline-none focus:ring-2 focus:ring-[#4ca771] bg-white/80 transition-all shadow-sm ${
                    errors.message && touched.message ? "border-red-400 ring-red-200" : ""
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  required
                />
                <AnimatePresence>
                  {errors.message && touched.message && (
                    <motion.p
                      id="message-error"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="text-sm text-red-500 mt-2"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="relative">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-white font-bold bg-gradient-to-r from-[#4ca771] to-[#013237] hover:from-[#013237] hover:to-[#4ca771] shadow-lg overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSubmitting ? (
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                    ) : (
                      <FaPaperPlane />
                    )}
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </span>

                  {/* shine sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-900 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </div>

              {/* feedback region */}
              <div aria-live="polite" className="min-h-[48px] mt-2">
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="flex items-center gap-3 bg-[#eaf9e7] border border-[#4ca771] text-[#013237] p-3 rounded-lg"
                    >
                      <FaPaperPlane className="text-[#4ca771]" />
                      <div>
                        <strong className="block">Message sent</strong>
                        <span className="text-sm block">Thanks — I will reply shortly.</span>
                      </div>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg"
                    >
                      <strong className="block">Validation error</strong>
                      <span className="text-sm block">Please fix the highlighted fields.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* floating */
        @keyframes float1 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(22px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float4 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(16px); }
        }
        @keyframes float5 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }
        @keyframes float6 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        .animate-float1 { animation: float1 10s ease-in-out infinite; }
        .animate-float2 { animation: float2 12s ease-in-out infinite; }
        .animate-float3 { animation: float3 9s ease-in-out infinite; }
        .animate-float4 { animation: float4 11s ease-in-out infinite; }
        .animate-float5 { animation: float5 13s ease-in-out infinite; }
        .animate-float6 { animation: float6 8s ease-in-out infinite; }

        /* shimmer border */
        @keyframes shimmer {
          0% { transform: translateX(-40%); opacity: 0.3; }
          50% { transform: translateX(40%); opacity: 0.6; }
          100% { transform: translateX(140%); opacity: 0.2; }
        }
        .animate-shimmer { animation: shimmer 6s linear infinite; }

        /* ripple hover */
        @keyframes ripple {
          0% { transform: scale(0.9); opacity: 0.6; }
          70% { transform: scale(1.1); opacity: 0.15; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        .animate-ripple { animation: ripple 1.6s ease-out infinite; }

        /* shake for invalid */
        @keyframes shake {
          0% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
          100% { transform: translateX(0); }
        }
        .shake { animation: shake 0.45s ease; }

        /* subtle card hover scale */
        .backdrop-blur-md:hover { transform: translateZ(0); }

        /* responsiveness fixes for small screens */
        @media (max-width: 768px) {
          .animate-shimmer { display: none; }
        }
      `}</style>
    </section>
  );
}

export default Row10;
