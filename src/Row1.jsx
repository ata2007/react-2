import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Row1() {
  return (
    <section className="w-full bg-gradient-to-br from-[#eaf9e7] via-[#c0e6ba] to-[#4ca771] py-16" id="home">
      <a href="home"></a>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 px-6">
       
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl border-2 border-[#eaf9e7]">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#013237] mb-6 drop-shadow">
            Welcome to <span className="text-[#4ca771]">ATA</span>
          </h2>
          <p className="text-lg md:text-xl text-[#013237] mb-4 font-medium">
            <span className="font-bold text-[#4ca771]">Atemaga Armstrong</span>
          </p>
          <p className="text-base md:text-xl text-[#013237] mb-8 font-medium">
            Professional UI/UX Designer providing awesome, cool design stuff for clients.<br className="hidden md:block" />
            My vision is to satisfy my clients with exceptional design solutions.
          </p>
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4ca771] to-[#013237] hover:from-[#013237] hover:to-[#4ca771] transition-all duration-300 px-6 py-3 md:px-8 md:py-4 rounded-full text-white text-base md:text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Hire Me <FaArrowRight className="text-lg md:text-xl" />
          </button>
        </div>
        
        {/* Image with Bouncing Effect */}
        <div className="flex-1 flex justify-center h-[300px] md:h-[400px]">
          <div className="relative w-full max-w-xs md:max-w-md h-full">
            <img
              src="/creo.jpg"
              alt="Atemaga Armstrong"
              className="w-full h-full rounded-2xl shadow-2xl border-4 border-white object-cover animate-bounce-slow"
              style={{ animationDelay: '0.2s' }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=80';
              }}
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#4ca771] rounded-full opacity-80 animate-pulse-slow z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#013237] rounded-full opacity-60 animate-pulse-slow z-10" style={{ animationDelay: '1s' }}></div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-[#eaf9e7] rounded-lg opacity-90 animate-float-1"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#c0e6ba] rounded-lg opacity-90 animate-float-2"></div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 1.2s;
          }
          
          @keyframes bounce-slow {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-bounce-slow {
            animation: bounce-slow 4s infinite ease-in-out;
          }
          
          @keyframes pulse-slow {
            0%, 100% {
              transform: scale(1);
              opacity: 0.6;
            }
            50% {
              transform: scale(1.1);
              opacity: 0.8;
            }
          }
          .animate-pulse-slow {
            animation: pulse-slow 3s infinite ease-in-out;
          }
          
          @keyframes float-1 {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(5deg);
            }
          }
          @keyframes float-2 {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(-5deg);
            }
          }
          .animate-float-1 {
            animation: float-1 5s infinite ease-in-out;
          }
          .animate-float-2 {
            animation: float-2 4s infinite ease-in-out;
            animation-delay: 0.5s;
          }
        `}
      </style>
    </section>
  );
}

export default Row1;