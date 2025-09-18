import React, { useState, useRef, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager",
    text: "EUVOLA delivered an amazing UI/UX for our app. The process was smooth and the results exceeded our expectations!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    name: "John Smith",
    role: "CEO, TechCorp",
    text: "Professional, creative, and always on time. Highly recommended for any digital project.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    name: "Emily White",
    role: "Startup Founder",
    text: "The design quality and attention to detail were outstanding. Will work with EUVOLA again!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    text: "Our conversion rates increased by 40% after implementing EUVOLA's design recommendations.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    rating: 5
  },
  {
    name: "Sarah Johnson",
    role: "Creative Lead",
    text: "The team at EUVOLA understands brand identity like no one else. Truly exceptional work!",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5
  }
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-4">
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`text-xl drop-shadow ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
      />
    ))}
  </div>
);

function Row7() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const testimonialsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };
  const [visibleCount, setVisibleCount] = useState(testimonialsPerPage());

  useEffect(() => {
    const handleResize = () => setVisibleCount(testimonialsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => nextTestimonial(), 6000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isAutoPlaying, currentIndex]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - visibleCount + 1));
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCount : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.9, rotate: dir > 0 ? 5 : -5 }),
    center: { x: 0, opacity: 1, scale: 1, rotate: 0 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0, scale: 0.9, rotate: dir < 0 ? 5 : -5 })
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#eaf9e7] via-[#c0e6ba] to-[#eaf9e7] py-24"
      id="testimonials"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#4ca771]/20 rounded-full blur-3xl top-10 left-10 animate-pulse-slow"></div>
        <div className="absolute w-[28rem] h-[28rem] bg-[#013237]/10 rounded-full blur-3xl bottom-20 right-20 animate-float-spin"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.h3
          className="text-4xl md:text-6xl font-extrabold text-[#013237] mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Client <span className="bg-gradient-to-r from-[#4ca771] to-[#013237] bg-clip-text text-transparent">Testimonials</span>
        </motion.h3>

        <motion.p
          className="text-center text-[#4ca771] mb-16 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Trusted by innovators, founders, and teams worldwide 🌍
        </motion.p>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 z-20 w-12 h-12 rounded-full bg-white/80 shadow-xl flex items-center justify-center text-[#4ca771] hover:bg-[#4ca771] hover:text-white transition"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 z-20 w-12 h-12 rounded-full bg-white/80 shadow-xl flex items-center justify-center text-[#4ca771] hover:bg-[#4ca771] hover:text-white transition"
          >
            <FaChevronRight />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {testimonials
                  .slice(currentIndex, currentIndex + visibleCount)
                  .map((t, idx) => (
                    <motion.div
                      key={`${currentIndex}-${idx}`}
                      whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-[#4ca771]/30 p-8 flex flex-col h-full overflow-hidden group"
                    >
                      {/* Neon border glow */}
                      <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-[#4ca771] to-[#013237] opacity-0 group-hover:opacity-100 transition duration-500 blur-lg"></div>

                      <div className="relative z-10">
                        <FaQuoteLeft className="text-5xl text-[#4ca771]/40 mb-4 group-hover:text-[#4ca771] transition" />
                        <StarRating rating={t.rating} />
                        <p className="text-[#013237] mb-6 italic text-lg leading-relaxed">"{t.text}"</p>
                        <div className="flex items-center mt-auto">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-16 h-16 rounded-full border-2 border-[#4ca771] shadow-lg object-cover"
                          />
                          <div className="ml-4">
                            <div className="font-bold text-[#013237] text-lg">{t.name}</div>
                            <div className="text-[#4ca771] text-sm">{t.role}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: testimonials.length - visibleCount + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goToTestimonial(i)}
                className={`w-4 h-4 rounded-full transition-all ${
                  i === currentIndex ? "bg-[#4ca771] scale-125 shadow-lg" : "bg-[#4ca771]/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 10s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-float-spin {
          animation: floatSpin 25s linear infinite;
        }
        @keyframes floatSpin {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(180deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default Row7;
