import React from "react";

const Button = ({ styles }) => (
  <button 
    type="button" 
    onClick={() => window.location.href = 'mailto:m@drema.in?subject=Contact Us - Doozy Infotechs'}
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-white bg-secondary rounded-[10px] outline-none ${styles} hover:scale-105 transition-transform duration-300 cursor-pointer`}
  >
    Contact Us
  </button>
);

export default Button;
