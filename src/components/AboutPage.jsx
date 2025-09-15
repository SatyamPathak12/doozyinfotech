import React from 'react';
import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const AboutPage = ({ setCurrentPage }) => {
  const [active, setActive] = useState("About");
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

  const teamMembers = [
    {
      name: "Mufaddal Sura",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Visionary leader with 5+ years in digital transformation"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in AI and blockchain technologies"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Full-stack development specialist"
    },
    {
      name: "Priya Sharma",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in agile project management"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of technology, constantly exploring new solutions to solve complex business challenges.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations and drive measurable business results.",
      icon: "⭐"
    },
    {
      title: "Partnership",
      description: "We work closely with our clients as trusted partners, understanding their unique needs and goals.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We maintain the highest standards of honesty, transparency, and ethical business practices.",
      icon: "🛡️"
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Doozy Infotech was established with a vision to transform businesses through technology."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Successfully delivered our first enterprise-level digital transformation project."
    },
    {
      year: "2022",
      title: "AI Solutions Launch",
      description: "Expanded our services to include cutting-edge AI and machine learning solutions."
    },
    {
      year: "2023",
      title: "Blockchain Expertise",
      description: "Added blockchain development to our comprehensive service portfolio."
    },
    {
      year: "2024",
      title: "100+ Projects",
      description: "Reached the milestone of 100+ successful projects across various industries."
    },
    {
      year: "2025",
      title: "Global Expansion",
      description: "Expanding our reach to serve clients worldwide with innovative digital solutions."
    }
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
            About <span className="text-gradient">Doozy Infotech</span>
          </h1>
          <p className={`${styles.paragraph} max-w-[600px] mt-5 text-center`}>
            Pioneering digital transformation through innovative technology solutions, 
            AI-powered systems, and comprehensive business services since 2019.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex md:flex-row flex-col items-center">
            <div className="flex-1 md:mr-10 mr-0">
              <h2 className={`${styles.heading2} mb-6`}>Our Story</h2>
              <p className={`${styles.paragraph} mb-6`}>
                Founded in 2019 by visionary entrepreneur Mufaddal Sura, Doozy Infotech 
                emerged from a simple yet powerful vision: to bridge the gap between cutting-edge 
                technology and real-world business solutions.
              </p>
              <p className={`${styles.paragraph} mb-6`}>
                What started as a small team of passionate developers has grown into a 
                comprehensive digital solutions provider, serving startups, enterprises, 
                and government organizations across the globe.
              </p>
              <p className={`${styles.paragraph}`}>
                Today, we're proud to be at the forefront of digital innovation, helping 
                businesses harness the power of AI, blockchain, and modern web technologies 
                to achieve unprecedented growth and efficiency.
              </p>
            </div>
            <div className="flex-1 md:ml-10 ml-0 md:mt-0 mt-10">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Our Story" 
                className="w-full h-[400px] object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-black-gradient-2`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div className="bg-primary p-8 rounded-[20px] border border-gray-800">
              <h3 className="font-poppins font-bold text-[32px] text-white mb-4">Our Mission</h3>
              <p className={`${styles.paragraph}`}>
                To empower businesses worldwide with innovative digital solutions that drive 
                growth, efficiency, and competitive advantage. We believe technology should 
                be accessible, reliable, and transformative for every organization.
              </p>
            </div>
            <div className="bg-primary p-8 rounded-[20px] border border-gray-800">
              <h3 className="font-poppins font-bold text-[32px] text-white mb-4">Our Vision</h3>
              <p className={`${styles.paragraph}`}>
                To be the global leader in comprehensive digital transformation, 
                setting new standards for innovation, quality, and client satisfaction 
                in the technology services industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-16">
            <h2 className={`${styles.heading2} mb-6`}>Our Core Values</h2>
            <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
              These fundamental principles guide everything we do and shape our 
              relationships with clients, partners, and team members.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-[20px] bg-black-gradient hover:scale-105 transition-transform duration-300">
                <div className="text-[48px] mb-4">{value.icon}</div>
                <h4 className="font-poppins font-semibold text-[20px] text-white mb-3">
                  {value.title}
                </h4>
                <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-black-gradient-2`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-16">
            <h2 className={`${styles.heading2} mb-6`}>Our Journey</h2>
            <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
              From humble beginnings to industry leadership, here's how we've grown 
              and evolved to serve our clients better.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex md:flex-row flex-col items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} mb-6 md:mb-0`}>
                    <div className="bg-primary p-6 rounded-[20px] border border-gray-800">
                      <div className="text-secondary font-poppins font-bold text-[24px] mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-poppins font-semibold text-[20px] text-white mb-3">
                        {milestone.title}
                      </h4>
                      <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-secondary rounded-full relative z-10 hidden md:block"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      {/* <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-16">
            <h2 className={`${styles.heading2} mb-6`}>Meet Our Team</h2>
            <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
              Our diverse team of experts brings together years of experience in 
              technology, business, and innovation to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6 overflow-hidden rounded-[20px]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-[280px] object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">
                  {member.name}
                </h4>
                <p className="font-poppins font-medium text-[16px] text-secondary mb-3">
                  {member.role}
                </p>
                <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our Approach */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-black-gradient-2`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-16">
            <h2 className={`${styles.heading2} mb-6`}>Our Approach</h2>
            <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
              We follow a proven methodology that ensures successful project delivery 
              and long-term client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 grid-cols-1 gap-8 relative">
            {/* Step 1 */}
            <div className="text-center relative">
              <div className="bg-primary p-8 rounded-[20px] border border-gray-800 hover:border-secondary transition-colors duration-300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-[24px]">1</span>
                </div>
                <h4 className="font-poppins font-semibold text-[20px] text-white mb-4">
                  Discovery & Analysis
                </h4>
                <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                  We start by understanding your business goals, challenges, and requirements 
                  through comprehensive analysis and stakeholder interviews.
                </p>
              </div>
              
              {/* Arrow to next step */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-secondary">
                  <path 
                    d="M8 16 L24 16 M20 12 L24 16 L20 20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="bg-primary p-8 rounded-[20px] border border-gray-800 hover:border-secondary transition-colors duration-300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-[24px]">2</span>
                </div>
                <h4 className="font-poppins font-semibold text-[20px] text-white mb-4">
                  Strategy & Planning
                </h4>
                <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                  We develop a comprehensive strategy and detailed project plan that 
                  aligns with your objectives and ensures optimal resource allocation.
                </p>
              </div>
              
              {/* Arrow to next step */}
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-secondary">
                  <path 
                    d="M8 16 L24 16 M20 12 L24 16 L20 20" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-primary p-8 rounded-[20px] border border-gray-800 hover:border-secondary transition-colors duration-300">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-[24px]">3</span>
                </div>
                <h4 className="font-poppins font-semibold text-[20px] text-white mb-4">
                  Implementation & Delivery
                </h4>
                <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                  Our expert team executes the plan with precision, maintaining constant 
                  communication and delivering results that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex md:flex-row flex-col items-center">
            <div className="flex-1 md:mr-10 mr-0 md:mb-0 mb-10">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Why Choose Us" 
                className="w-full h-[400px] object-cover rounded-[20px]"
              />
            </div>
            <div className="flex-1 md:ml-10 ml-0">
              <h2 className={`${styles.heading2} mb-6`}>Why Choose Doozy Infotech?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[18px] text-white mb-2">
                      Proven Track Record
                    </h4>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                      100+ successful projects delivered across various industries with 
                      consistently high client satisfaction rates.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[18px] text-white mb-2">
                      Cutting-Edge Technology
                    </h4>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                      We stay ahead of technology trends, specializing in AI, blockchain, 
                      and modern development frameworks.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-[12px]">✓</span>
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold text-[18px] text-white mb-2">
                      End-to-End Solutions
                    </h4>
                    <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[22px]">
                      From initial consultation to ongoing support, we provide 
                      comprehensive services that cover all your digital needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="bg-black-gradient-2 rounded-[20px] p-12 text-center">
            <h2 className={`${styles.heading2} mb-6`}>Ready to Transform Your Business?</h2>
            <p className={`${styles.paragraph} max-w-[600px] mx-auto mb-8`}>
              Join the growing number of businesses that trust Doozy Infotech 
              for their digital transformation journey. Let's discuss how we can help 
              you achieve your goals.
            </p>
            <button 
              onClick={() => setCurrentPage("contact")}
              className="bg-secondary text-white font-poppins font-semibold text-[18px] py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;