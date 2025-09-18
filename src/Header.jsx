import React, { useState, useEffect } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import SideNav from './SideNav';

function Header() {
  const [myNav, setMyNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function showNav() {
    setMyNav(!myNav);
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#013237] via-[#4ca771] to-[#013237] shadow-lg border-b-2 border-[#c0e6ba] backdrop-blur-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'} animate-fadeSlideDown`}>
      
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ij48cGF0aCBkPSJNIDAgMCBMIDYwIDYwIE0gNjAgMCBMIDAgNjAiLz48L2c+PC9zdmc+')]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 z-10">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className={`transition-all duration-300 ${isScrolled ? 'scale-75' : 'scale-90'}`}>
            <div className="relative p-2 rounded-full cursor-pointer group">
              {/* Glowing ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#c0e6ba] to-[#4ca771] blur-md opacity-70 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-[#eaf9e7] to-[#c0e6ba] px-4 py-2 rounded-full shadow-md border border-[#eaf9e7]">
                <span className="text-lg md:text-xl font-extrabold text-[#013237] tracking-wide animate-textGlow">
                  ATA....PORTFOLIO
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex gap-6 font-medium text-base">
          {[
            { href: "#home", label: "HOME" },
            { href: "#about", label: "ABOUT" },
            { href: "#service", label: "SERVICE" },
            { href: "#portfolio", label: "PORTFOLIO", special: true },
            { href: "#project", label: "PROJECT" },
            { href: "#blog", label: "BLOG" },
            { href: "#contact", label: "CONTACT" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative group px-2 py-1 ${item.special ? 'special-portfolio' : ''}`}
            >
              <span className={`cursor-pointer transition-colors duration-300 tracking-wide z-10 relative ${item.special ? 'textGlowGradient' : 'text-[#eaf9e7] hover:text-white'}`}>
                {item.label}
              </span>
              {/* Underline */}
              <span className={`absolute left-0 -bottom-1 w-0 h-0.5 rounded-full transition-all duration-300 z-20 ${item.special ? 'bg-gradient-to-r from-[#c0e6ba] via-[#4ca771] to-[#c0e6ba] group-hover:w-full' : 'bg-gradient-to-r from-[#eaf9e7] to-[#c0e6ba] group-hover:w-full'}`}></span>
              <span className="absolute inset-0 rounded-md bg-[#4ca771] opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></span>
            </a>
          ))}
        </nav>
        
        {/* Mobile menu */}
        <div className="md:hidden">
          <button 
            onClick={showNav} 
            className="text-[#eaf9e7] text-2xl p-1.5 rounded-md bg-[#4ca771] hover:bg-[#013237] shadow-sm border border-[#c0e6ba] transition-colors duration-300"
          >
            <RiMenu3Line />
          </button>
        </div>
      </div>
      
      <SideNav myNav={myNav} onClose={() => setMyNav(false)} />
      
      <style>
        {`
          @keyframes fadeSlideDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeSlideDown {
            animation: fadeSlideDown 0.5s ease-out forwards;
          }
          @keyframes textGlow {
            0%, 100% { text-shadow: 0 0 5px #4ca771, 0 0 10px #c0e6ba; }
            50% { text-shadow: 0 0 15px #4ca771, 0 0 25px #c0e6ba; }
          }
          .animate-textGlow {
            animation: textGlow 2.5s ease-in-out infinite;
          }
          .textGlowGradient {
            background: linear-gradient(90deg, #eaf9e7, #c0e6ba, #4ca771);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: gradientShift 4s ease infinite, textGlow 3s ease-in-out infinite;
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </header>
  );
}

export default Header;
