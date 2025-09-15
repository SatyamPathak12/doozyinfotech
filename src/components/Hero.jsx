import styles from "../style";
import { discount } from "../assets";
import GetStarted from "./GetStarted";
import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Hero = ({ setCurrentPage }) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (nav) => {
    setActive(nav.title);
    if (nav.title === "About") {
      setCurrentPage("about");
    } else if (nav.title === "Contact") {
      setCurrentPage("contact");
    } else if (nav.title === "Services") {
      setCurrentPage("services");
    } else if (nav.title === "Home") {
      setCurrentPage("home");
    }
  };

  return (
    <section id="home" className={` z-10 flex flex-col relative overflow-hidden h-screen ${styles.paddingX}`}>
      {/* Spline 3D Background - Full Hero Coverage */}
      <div className="absolute inset-0 w-full h-full z-[5]">
        <iframe 
          src='https://my.spline.design/glowingplanetparticles-PhoB92O1eV5cHGFLWwGCPZko/' 
          frameborder='0' 
          width='100%' 
          height='100%'
          className="crop-iframe-mobile"
        ></iframe>
          <div className="absolute bottom-0 right-0 w-full h-[70px] bg-[#01040C]"></div>
        {/* Contact Us Button positioned on iframe */}
        {/* <div className="absolute bottom-4 right-4 z-10 hidden sm:block">
          <button className="bg-secondary text-white font-poppins font-medium text-[14px] py-3 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            <span>Contact Us</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </button>
        </div> */}
        
      </div>

      {/* Navigation */}
      <nav className="w-full flex py-2 justify-between items-center navbar relative z-10 pointer-events-none">
       <img
  src="/logo.png"
  alt="Doozy Infotechs"
  className="w-[160px] sm:w-[200px] h-auto object-contain cursor-pointer"
  onClick={() => setCurrentPage("home")}
/>


        <ul className="list-none sm:flex hidden justify-end items-center flex-1 pointer-events-auto">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => handleNavClick(nav)}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex justify-end items-center pointer-events-auto">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>
      </nav>

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles */}
        <div className="absolute w-2 h-2 bg-secondary rounded-full animate-float-1 top-1/4 left-1/4 opacity-60"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float-2 top-1/3 left-1/2 opacity-40"></div>
        <div className="absolute w-3 h-3 bg-secondary rounded-full animate-float-3 top-1/2 left-1/3 opacity-30"></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full animate-float-4 top-2/3 left-2/3 opacity-50"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full animate-float-5 top-3/4 left-1/5 opacity-40"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-float-6 top-1/5 right-1/4 opacity-60"></div>
        
        {/* Animated gradient orbs */}
        <div className="absolute w-32 h-32 bg-gradient-to-r from-secondary/20 to-transparent rounded-full animate-pulse-slow top-10 right-10 blur-xl"></div>
        <div className="absolute w-24 h-24 bg-gradient-to-l from-white/10 to-transparent rounded-full animate-pulse-slower bottom-20 left-10 blur-lg"></div>
      </div>

      {/* Hero Content */}
      <div className={`flex flex-col items-center justify-center flex-1 relative z-10 pointer-events-none -mt-16 sm:mt-0`}>
        <div className="text-center">
          <h1 className="font-poppins font-bold ss:text-[64px] text-[42px] text-white ss:leading-[80px] leading-[50px] mb-6 mt-24">
            End-to-End Digital Solutions<br />
            <span className="text-gradient">for Every Industry</span>
          </h1>

          <p className={`${styles.paragraph} max-w-[600px] mt-6 text-center mx-auto text-[20px] leading-[32px]`}>
            Doozy Infotech delivers innovative, AI-powered, and Microsoft-driven 
            technologies that help businesses, startups, and governments build the future with confidence.
          </p>

          <div className="flex justify-center items-center mt-8">
            <button 
              onClick={() => window.location.href = 'mailto:info@alliancecorps.com?subject=Get Started - Doozy Infotechs'}
              className="bg-secondary text-white font-poppins font-semibold text-[18px] py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300 pointer-events-auto shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              Get Started
            </button>
          </div>
        </div>

      </div>
      
      {/* Fixed Floating Contact Us Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.location.href = 'mailto:info@alliancecorps.com?subject=Contact Us - Doozy Infotech'}
          className="bg-secondary text-white font-poppins font-medium text-[14px] py-3 px-6 rounded-full shadow-[0_8px_32px_rgba(255,255,255,0.15)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)] hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <span>Contact Us</span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </button>
      </div>

    </section>
  );
};

export default Hero;