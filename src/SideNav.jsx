import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RiCloseLine,
  RiGithubFill,
  RiLinkedinFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#service", label: "SERVICE" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#project", label: "PROJECT" },
  { href: "#blog", label: "BLOG" },
  { href: "#contact", label: "CONTACT" },
];

const socialLinks = [
  { icon: <RiGithubFill />, href: "#", label: "GitHub" },
  { icon: <RiLinkedinFill />, href: "#", label: "LinkedIn" },
  { icon: <RiTwitterFill />, href: "#", label: "Twitter" },
  { icon: <RiInstagramFill />, href: "#", label: "Instagram" },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.8 },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
  }),
};

function SideNav({ myNav, onClose }) {
  useEffect(() => {
    document.body.style.overflow = myNav ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [myNav]);

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      {myNav && (
        <motion.div
          className="fixed inset-0 z-[999]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-[#013237] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="absolute top-0 right-0 h-full w-80 max-w-full bg-gradient-to-b from-[#013237]/95 to-[#4ca771]/95 backdrop-blur-md shadow-2xl border-l-2 border-[#c0e6ba] flex flex-col"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#c0e6ba]/30">
              <span className="flex items-center gap-3 text-xl font-bold tracking-wide text-[#eaf9e7]">
                <span className="bg-gradient-to-br from-[#eaf9e7] to-[#c0e6ba] p-2 rounded-full shadow-md border border-[#eaf9e7]">
                  <span className="text-sm font-bold text-[#013237]">ATA</span>
                </span>
                ATA
              </span>
              <button
                onClick={onClose}
                className="text-[#eaf9e7] text-2xl p-2 rounded-md hover:bg-[#4ca771] transition-colors duration-300"
                aria-label="Close menu"
              >
                <RiCloseLine />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 flex flex-col gap-2 px-6 py-8">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={linkVariants}
                  className="relative group py-3 px-4 rounded-lg text-base font-medium tracking-wide text-[#eaf9e7] hover:text-white transition-all duration-300 overflow-hidden
                    bg-[#013237]/70 hover:bg-[#4ca771] shadow-sm hover:shadow-[0_0_10px_#4ca771]"
                >
                  <span className="relative z-10 flex items-center">
                    {item.label}
                    <span className="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                  </span>
                  <span className="absolute left-4 bottom-2 w-0 h-0.5 bg-gradient-to-r from-[#eaf9e7] to-[#c0e6ba] rounded-full group-hover:w-3/4 transition-all duration-500" />
                </motion.a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="px-6 py-4 border-t border-[#c0e6ba]/30">
              <h3 className="text-[#eaf9e7] text-sm font-semibold mb-3 tracking-wide">
                CONNECT WITH ME
              </h3>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-[#eaf9e7] text-xl p-2 rounded-md bg-[#013237]/50 hover:bg-[#4ca771] transition-colors duration-300 hover:shadow-[0_0_10px_#4ca771]"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-[#c0e6ba]/30 text-center">
              <span className="text-[#c0e6ba] text-xs font-medium tracking-wide">
                © {new Date().getFullYear()} ATA. All Rights Reserved.
              </span>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SideNav;
