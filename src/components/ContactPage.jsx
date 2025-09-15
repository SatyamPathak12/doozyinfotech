import React, { useState } from 'react';
import { close, menu } from "../assets";
import { navLinks, socialMedia } from "../constants";
import styles from "../style";

const ContactPage = ({ setCurrentPage }) => {
  const [active, setActive] = useState("Contact");
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const serviceOptions = [
    "AI & Agentic Solutions",
    "Blockchain Development", 
    "Web & Mobile Apps",
    "ERP & Microsoft Solutions",
    "Full-Stack Development",
    "Outsourcing Solutions",
    "Other"
  ];

  return (
    <div className="bg-primary w-full overflow-hidden min-h-screen">
      {/* Navigation */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
        <img
  src="/logo.png"
  alt="Doozy Infotechs"
  className="w-[160px] sm:w-[200px] h-auto object-contain cursor-pointer"
  onClick={() => setCurrentPage("home")}
/>


            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} hover:text-white transition-colors`}
                  onClick={() => handleNavClick(nav)}
                >
                  {nav.title}
                </li>
              ))}
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-dimWhite"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => handleNavClick(nav)}
                    >
                      {nav.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col relative`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
        
        <div className="w-full flex justify-center items-center flex-col relative z-[1]">
          <h1 className="font-poppins font-bold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] text-center">
            Let's Build the <span className="text-gradient">Future Together</span>
          </h1>
          <p className={`${styles.paragraph} max-w-[800px] mt-5 text-center`}>
            Whether you're looking to launch a new digital product, scale your business with AI, 
            or explore blockchain and Microsoft solutions, our team is ready to help. Reach out 
            today and let's discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-16">
            <h2 className={`${styles.heading2} mb-6`}>Get in Touch</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            {/* Contact Form */}
            <div className="bg-black-gradient-2 p-8 rounded-[20px]">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-primary border border-gray-600 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-primary border border-gray-600 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-primary border border-gray-600 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-4 bg-primary border border-gray-600 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Service of Interest *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 bg-primary border border-gray-600 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-poppins font-medium mb-2">
                      Project Description / Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="w-full p-4 bg-primary border border-gray-600 rounded-[10px] text-white font-poppins focus:border-secondary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project or requirements"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-secondary text-white font-poppins font-semibold text-[18px] py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300"
                  >
                    Request a Quote
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-[24px]">✓</span>
                  </div>
                  <h3 className="font-poppins font-bold text-[24px] text-white mb-4">
                    Thank You!
                  </h3>
                  <p className="font-poppins font-normal text-[16px] text-dimWhite">
                    Our team will contact you within 24 hours
                  </p>
                </div>
              )}
            </div>
            
            {/* Contact Details */}
            <div className="space-y-8">
              {/* Our Contact Details */}
              <div className="bg-black-gradient-2 p-8 rounded-[20px]">
                <h3 className="font-poppins font-bold text-[24px] text-white mb-6">
                  Our Contact Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-white">Email</p>
                      <p className="font-poppins font-normal text-dimWhite">info@doozyinfotech.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-white">Phone</p>
                      <p className="font-poppins font-normal text-dimWhite">+91 81046 59927</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-white">Office Address</p>
                      <p className="font-poppins font-normal text-dimWhite">Marol, Mumbai, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-poppins font-medium text-white">Business Hours</p>
                      <p className="font-poppins font-normal text-dimWhite">Monday – Friday, 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Connect With Us */}
              <div className="bg-black-gradient-2 p-8 rounded-[20px]">
                <h3 className="font-poppins font-bold text-[24px] text-white mb-4">
                  Connect With Us
                </h3>
                <p className="font-poppins font-normal text-dimWhite mb-6">
                  Stay updated with our latest projects and insights.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center bg-primary p-3 rounded-[10px] border border-gray-600">
                    <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="font-poppins font-normal text-dimWhite">LinkedIn: Will update it later</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-4">
                  <div className="flex items-center bg-primary p-3 rounded-[10px] border border-gray-600">
                    <svg className="w-5 h-5 text-white mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="font-poppins font-normal text-dimWhite">Instagram: Will update it later</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Footer */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-black-gradient-2`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center">
            <h2 className={`${styles.heading2} mb-6`}>
              Looking for a reliable technology partner for your next project?
            </h2>
            <button 
              onClick={() => {
                document.querySelector('form').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-secondary text-white font-poppins font-semibold text-[18px] py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;