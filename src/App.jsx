import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { useState } from "react";
import { close, menu } from "./assets";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch(currentPage) {
      case "about":
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case "contact":
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case "services":
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      {renderPage()}
    </div>
  );
};

const HomePage = ({ setCurrentPage }) => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero setCurrentPage={setCurrentPage} />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

const ServicesPage = ({ setCurrentPage }) => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <ServicesHero setCurrentPage={setCurrentPage} />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <ServicesContent />
        <Footer />
      </div>
    </div>
  </div>
);

const ServicesHero = ({ setCurrentPage }) => {
  const [active, setActive] = useState("Services");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    { id: "home", title: "Home" },
    { id: "features", title: "Services" },
    { id: "product", title: "About" },
    { id: "clients", title: "Contact" },
  ];

  const handleNavClick = (nav) => {
    setActive(nav.title);
    if (nav.title === "Home") {
      setCurrentPage("home");
    } else if (nav.title === "About") {
      setCurrentPage("about");
    } else if (nav.title === "Contact") {
      setCurrentPage("contact");
    } else if (nav.title === "Services") {
      setCurrentPage("services");
    }
  };

  return (
    <section id="services" className={`flex flex-col relative overflow-hidden h-screen ${styles.paddingX}`}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://www.pexels.com/download/video/30135791/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Navigation */}
      <nav className="w-full flex py-2 justify-between items-center navbar relative z-10">
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

        <div className="sm:hidden flex justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-[100]`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => {
                    handleNavClick(nav);
                    setToggle(false);
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Services Content */}
      <div className={`flex flex-col items-center justify-center flex-1 relative z-10`}>
        <div className="text-center">
          <h1 className="font-poppins font-bold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>

          <p className={`${styles.paragraph} max-w-[800px] mt-5 text-center mx-auto`}>
            Comprehensive digital solutions designed to transform your business 
            and drive sustainable growth in today's competitive marketplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={() => window.location.href = 'mailto:info@alliancecorps.com?subject=Get Quote - Doozy Infotechs'}
              className="bg-secondary text-white font-poppins font-semibold text-[18px] py-4 px-8 rounded-[10px] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              Get Quote
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:info@alliancecorps.com?subject=Portfolio Request - Doozy Infotechs'}
              className="border-2 border-secondary text-secondary font-poppins font-semibold text-[18px] py-4 px-8 rounded-[10px] hover:bg-secondary hover:text-primary transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesContent = () => (
  <div className={`${styles.paddingY}`}>
    <div className="text-center mb-16">
      <h2 className={`${styles.heading2} mb-8`}>End-to-End Digital Solutions for Every Industry</h2>
      <p className={`${styles.paragraph} max-w-[800px] mx-auto`}>
        Doozy Infotech delivers innovative, AI-powered, and future-ready technology solutions. 
        Whether you're a startup looking to launch your idea or an enterprise scaling globally, 
        our services are designed to help you build, innovate, and grow.
      </p>
    </div>

    {/* AI & Agentic Solutions */}
    <div className="mb-16 p-8 bg-black-gradient rounded-[20px]">
      <h3 className="font-poppins font-semibold text-[32px] text-white mb-6 text-center">AI & Agentic Solutions</h3>
      <p className={`${styles.paragraph} text-center mb-8 max-w-[800px] mx-auto`}>
        We build AI-powered platforms and intelligent agents that automate tasks, improve customer engagement, and provide actionable insights.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="AI and Machine Learning" 
            className="w-full h-[250px] object-cover rounded-[15px]"
          />
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Capabilities</h4>
          <ul className={`${styles.paragraph} space-y-2`}>
            <li className="text-dimWhite font-normal text-[17px]">• Conversational chatbots and virtual assistants</li>
            <li className="text-dimWhite font-normal text-[17px]">• AI-powered analytics dashboards</li>
            <li className="text-dimWhite font-normal text-[17px]">• Process automation and predictive analytics</li>
            <li className="text-dimWhite font-normal text-[17px]">• Computer vision and AI-driven automation</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Industries Served</h4>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[30.8px] mb-4">Healthcare, Education, Retail, Finance, FMCG</p>
          <h4 className="font-poppins font-medium text-[20px] text-white mb-2">Case Example</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            Developed TestGenie, an AI exam preparation platform used across 16 education boards.
          </p>
        </div>
      </div>
    </div>

    {/* Blockchain Development */}
    <div className="mb-16 p-8 bg-black-gradient rounded-[20px]">
      <h3 className="font-poppins font-semibold text-[32px] text-white mb-6 text-center">Blockchain Development</h3>
      <p className={`${styles.paragraph} text-center mb-8 max-w-[800px] mx-auto`}>
        We design and deploy secure blockchain ecosystems trusted by enterprises and startups.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Blockchain Technology" 
            className="w-full h-[250px] object-cover rounded-[15px]"
          />
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Capabilities</h4>
          <ul className={`${styles.paragraph} space-y-2`}>
            <li className="text-dimWhite font-normal text-[17px]">• Centralized and decentralized crypto exchanges</li>
            <li className="text-dimWhite font-normal text-[17px]">• NFT marketplaces and Web3 solutions</li>
            <li className="text-dimWhite font-normal text-[17px]">• DeFi platforms and smart contract development</li>
            <li className="text-dimWhite font-normal text-[17px]">• Move-to-earn and play-to-earn applications</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Industries Served</h4>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[30.8px] mb-4">Finance, Gaming, Digital Assets, Retail</p>
          <h4 className="font-poppins font-medium text-[20px] text-white mb-2">Case Example</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            Built Platinx Exchange, a fully functional centralized crypto exchange with advanced security.
          </p>
        </div>
      </div>
    </div>

    {/* Web & Mobile App Development */}
    <div className="mb-16 p-8 bg-black-gradient rounded-[20px]">
      <h3 className="font-poppins font-semibold text-[32px] text-white mb-6 text-center">Web & Mobile App Development</h3>
      <p className={`${styles.paragraph} text-center mb-8 max-w-[800px] mx-auto`}>
        We create mobile and web applications that combine innovation with seamless user experience.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Mobile App Development" 
            className="w-full h-[250px] object-cover rounded-[15px]"
          />
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Capabilities</h4>
          <ul className={`${styles.paragraph} space-y-2`}>
            <li className="text-dimWhite font-normal text-[17px]">• Native and cross-platform mobile apps (iOS, Android, Flutter, React Native)</li>
            <li className="text-dimWhite font-normal text-[17px]">• Progressive Web Apps and enterprise portals</li>
            <li className="text-dimWhite font-normal text-[17px]">• Custom SaaS product development</li>
            <li className="text-dimWhite font-normal text-[17px]">• Scalable architecture and performance optimization</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Industries Served</h4>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[30.8px] mb-4">Government, Startups, Enterprises, Healthcare</p>
          <h4 className="font-poppins font-medium text-[20px] text-white mb-2">Case Example</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            Developed a taxi booking app for the Riyadh Government, achieving over 100,000 downloads.
          </p>
        </div>
      </div>
    </div>

    {/* ERP & Microsoft Solutions */}
    <div className="mb-16 p-8 bg-black-gradient rounded-[20px]">
      <h3 className="font-poppins font-semibold text-[32px] text-white mb-6 text-center">ERP & Microsoft Solutions</h3>
      <p className={`${styles.paragraph} text-center mb-8 max-w-[800px] mx-auto`}>
        Streamline operations with ERP and Power Platform solutions tailored for enterprises.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="ERP and Business Solutions" 
            className="w-full h-[250px] object-cover rounded-[15px]"
          />
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Capabilities</h4>
          <ul className={`${styles.paragraph} space-y-2`}>
            <li className="text-dimWhite font-normal text-[17px]">• Enterprise resource planning systems</li>
            <li className="text-dimWhite font-normal text-[17px]">• Workflow automation with PowerApps and Power BI</li>
            <li className="text-dimWhite font-normal text-[17px]">• Integration with existing enterprise tools</li>
            <li className="text-dimWhite font-normal text-[17px]">• Custom dashboards for reporting and analytics</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Industries Served</h4>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[30.8px] mb-4">Manufacturing, Healthcare, Mining, Education</p>
          <h4 className="font-poppins font-medium text-[20px] text-white mb-2">Case Example</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            Built custom ERP solutions for schools, enabling attendance, fee, and staff management.
          </p>
        </div>
      </div>
    </div>

    {/* Full-Stack Development */}
    <div className="mb-16 p-8 bg-black-gradient rounded-[20px]">
      <h3 className="font-poppins font-semibold text-[32px] text-white mb-6 text-center">Full-Stack Development</h3>
      <p className={`${styles.paragraph} text-center mb-8 max-w-[800px] mx-auto`}>
        We deliver powerful full-stack applications that are scalable, secure, and future-ready.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Full Stack Development" 
            className="w-full h-[250px] object-cover rounded-[15px]"
          />
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Capabilities</h4>
          <ul className={`${styles.paragraph} space-y-2`}>
            <li className="text-dimWhite font-normal text-[17px]">• Frontend: React, Angular, Vue, WebGL, Three.js</li>
            <li className="text-dimWhite font-normal text-[17px]">• Backend: Node.js, Python, Django, Flask</li>
            <li className="text-dimWhite font-normal text-[17px]">• Databases: PostgreSQL, MongoDB, MySQL</li>
            <li className="text-dimWhite font-normal text-[17px]">• Cloud integrations with AWS, Azure, Google Cloud</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Industries Served</h4>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[30.8px] mb-4">Design Agencies, Startups, SaaS Businesses</p>
          <h4 className="font-poppins font-medium text-[20px] text-white mb-2">Case Example</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            Built Lusion.co, a full-stack digital agency platform showcasing high-end 3D and interactive design.
          </p>
        </div>
      </div>
    </div>

    {/* Outsourcing Solutions */}
    <div className="mb-16 p-8 bg-black-gradient rounded-[20px]">
      <h3 className="font-poppins font-semibold text-[32px] text-white mb-6 text-center">Outsourcing Solutions</h3>
      <p className={`${styles.paragraph} text-center mb-8 max-w-[800px] mx-auto`}>
        Scale your projects with our outsourcing and dedicated team services.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Team Collaboration and Outsourcing" 
            className="w-full h-[250px] object-cover rounded-[15px]"
          />
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Capabilities</h4>
          <ul className={`${styles.paragraph} space-y-2`}>
            <li className="text-dimWhite font-normal text-[17px]">• Dedicated developers for AI, Blockchain, and Full Stack</li>
            <li className="text-dimWhite font-normal text-[17px]">• Project-based outsourcing with flexible engagement models</li>
            <li className="text-dimWhite font-normal text-[17px]">• Cost-effective resourcing without compromising quality</li>
            <li className="text-dimWhite font-normal text-[17px]">• Global collaboration across time zones</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Industries Served</h4>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[30.8px] mb-4">Agencies, Enterprises, Startups</p>
          <h4 className="font-poppins font-medium text-[20px] text-white mb-2">Case Example</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            Provided outsourced development for multiple live blockchain platforms, helping agencies scale faster.
          </p>
        </div>
      </div>
    </div>

    {/* HR Solutions */}
    <div className="mb-16 p-8 bg-black-gradient rounded-[20px]">
      <h3 className="font-poppins font-semibold text-[32px] text-white mb-6 text-center">HR Solutions</h3>
      <p className={`${styles.paragraph} text-center mb-8 max-w-[800px] mx-auto`}>
        Streamline your human resources operations with our comprehensive HR management systems. 
        From recruitment to payroll, we provide end-to-end solutions for modern workforce management.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-1">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="HR Solutions and Management" 
            className="w-full h-[250px] object-cover rounded-[15px]"
          />
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Capabilities</h4>
          <ul className={`${styles.paragraph} space-y-2`}>
            <li className="text-dimWhite font-normal text-[17px]">• Employee management and attendance tracking</li>
            <li className="text-dimWhite font-normal text-[17px]">• Payroll processing and benefits administration</li>
            <li className="text-dimWhite font-normal text-[17px]">• Performance evaluation and goal tracking</li>
            <li className="text-dimWhite font-normal text-[17px]">• Recruitment and onboarding automation</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="font-poppins font-medium text-[22px] text-white mb-4">Industries Served</h4>
          <p className="font-poppins font-normal text-dimWhite text-[19px] leading-[30.8px] mb-4">Corporate, SMEs, Educational Institutions, Healthcare</p>
          <h4 className="font-poppins font-medium text-[20px] text-white mb-2">Case Example</h4>
          <p className={`${styles.paragraph} text-[16px]`}>
            Implemented comprehensive HR systems for multiple organizations, reducing administrative overhead by 60%.
          </p>
        </div>
      </div>
    </div>

    {/* Why Choose Us */}
    <div className="mb-16 p-12 bg-gradient-to-br from-black via-gray-900 to-primary rounded-[30px] border border-gray-700">
      <h3 className="font-poppins font-bold text-[40px] text-white mb-4 text-center">Why Businesses Choose Doozy Infotech</h3>
      <p className={`${styles.paragraph} text-center mb-12 max-w-[700px] mx-auto text-[18px]`}>
        Trusted by startups, enterprises, and governments worldwide for delivering exceptional digital solutions that drive real business results.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="text-center p-8 bg-gradient-to-b from-secondary/10 to-transparent rounded-[20px] border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <h4 className="font-poppins font-bold text-[24px] text-white">50+</h4>
          </div>
          <p className="font-poppins font-medium text-[18px] text-white mb-2">Projects Successfully</p>
          <p className="font-poppins font-bold text-[18px] text-white">Delivered</p>
        </div>
        <div className="text-center p-8 bg-gradient-to-b from-secondary/10 to-transparent rounded-[20px] border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <h4 className="font-poppins font-bold text-[24px] text-white">10+</h4>
          </div>
          <p className="font-poppins font-medium text-[18px] text-white mb-2">Countries with</p>
          <p className="font-poppins font-bold text-[18px] text-white">Live Solutions</p>
        </div>
        <div className="text-center p-8 bg-gradient-to-b from-secondary/10 to-transparent rounded-[20px] border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <h4 className="font-poppins font-bold text-[20px] text-white">100%</h4>
          </div>
          <p className="font-poppins font-medium text-[18px] text-white mb-2">Client Satisfaction</p>
          <p className="font-poppins font-bold text-[18px] text-white">Rate</p>
        </div>
        <div className="text-center p-8 bg-gradient-to-b from-secondary/10 to-transparent rounded-[20px] border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:transform hover:scale-105">
          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
            <h4 className="font-poppins font-bold text-[24px] text-white">5+</h4>
          </div>
          <p className="font-poppins font-medium text-[18px] text-white mb-2">Years of</p>
          <p className="font-poppins font-bold text-[18px] text-white">Expertise</p>
        </div>
      </div>
      
      <div className="text-center">
        <img 
          src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
          alt="Business Success and Growth" 
          className="w-full max-w-[600px] h-[300px] object-cover rounded-[20px] mx-auto shadow-2xl"
        />
      </div>
    </div>

    {/* Our Approach */}
    <div className="mb-16 p-12 bg-gradient-to-r from-primary via-gray-900 to-primary rounded-[30px] border border-gray-700">
      <h3 className="font-poppins font-bold text-[40px] text-white mb-4 text-center">Our Approach</h3>
      <p className={`${styles.paragraph} text-center mb-16 max-w-[700px] mx-auto text-[18px]`}>
        We follow a proven methodology that ensures successful project delivery and long-term client satisfaction.
      </p>
      
      <div className="relative">
        {/* Desktop Flow */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="font-poppins font-bold text-[24px] text-white">1</span>
              </div>
              <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">Discovery</h4>
              <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[20px]">
                Understanding your business goals, challenges, and requirements
              </p>
            </div>
            
            {/* Arrow 1 - Removed glow effects */}
            <div className="flex-1 flex justify-center items-center mx-4">
              <div className="relative w-full h-8">
                <svg className="w-full h-full" viewBox="0 0 200 32" fill="none">
                  <path 
                    d="M10 16 Q50 8, 90 16 T170 16" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="4,4" 
                    fill="none"
                  />
                  <path 
                    d="M165 12 L175 16 L165 20" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="font-poppins font-bold text-[24px] text-white">2</span>
              </div>
              <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">Strategy</h4>
              <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[20px]">
                Creating a comprehensive roadmap and technical architecture
              </p>
            </div>
            
            {/* Arrow 2 - Removed glow effects */}
            <div className="flex-1 flex justify-center items-center mx-4">
              <div className="relative w-full h-8">
                <svg className="w-full h-full" viewBox="0 0 200 32" fill="none">
                  <path 
                    d="M10 16 Q50 24, 90 16 T170 16" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="4,4" 
                    fill="none"
                  />
                  <path 
                    d="M165 12 L175 16 L165 20" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="font-poppins font-bold text-[24px] text-white">3</span>
              </div>
              <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">Development</h4>
              <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[20px]">
                Agile development with regular updates and transparent communication
              </p>
            </div>
            
            {/* Arrow 3 - Removed glow effects */}
            <div className="flex-1 flex justify-center items-center mx-4">
              <div className="relative w-full h-8">
                <svg className="w-full h-full" viewBox="0 0 200 32" fill="none">
                  <path 
                    d="M10 16 Q50 8, 90 16 T170 16" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeDasharray="4,4" 
                    fill="none"
                  />
                  <path 
                    d="M165 12 L175 16 L165 20" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center max-w-[200px]">
              <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-4 shadow-lg">
                <span className="font-poppins font-bold text-[24px] text-white">4</span>
              </div>
              <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">Delivery</h4>
              <p className="font-poppins font-normal text-[14px] text-dimWhite leading-[20px]">
                Thorough testing, deployment, and ongoing support for success
              </p>
            </div>
          </div>
        </div>
        
        {/* Mobile Flow */}
        <div className="lg:hidden space-y-8">
          {/* Step 1 */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-6 shadow-lg flex-shrink-0">
              <span className="font-poppins font-bold text-[20px] text-white">1</span>
            </div>
            <div className="flex-1">
              <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">Discovery</h4>
              <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
                Understanding your business goals, challenges, and requirements
              </p>
            </div>
          </div>
          
          {/* Arrow Down - Removed glow effects */}
          <div className="flex justify-center">
            <div className="relative w-8 h-16">
              <svg className="w-full h-full" viewBox="0 0 32 64" fill="none">
                <path 
                  d="M16 8 Q8 20, 16 32 Q24 44, 16 56" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  fill="none"
                />
                <path 
                  d="M12 52 L16 60 L20 52" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-6 shadow-lg flex-shrink-0">
              <span className="font-poppins font-bold text-[20px] text-white">2</span>
            </div>
            <div className="flex-1">
              <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">Strategy</h4>
              <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
                Creating a comprehensive roadmap and technical architecture
              </p>
            </div>
          </div>
          
          {/* Arrow Down - Removed glow effects */}
          <div className="flex justify-center">
            <div className="relative w-8 h-16">
              <svg className="w-full h-full" viewBox="0 0 32 64" fill="none">
                <path 
                  d="M16 8 Q24 20, 16 32 Q8 44, 16 56" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  fill="none"
                />
                <path 
                  d="M12 52 L16 60 L20 52" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-6 shadow-lg flex-shrink-0">
              <span className="font-poppins font-bold text-[20px] text-white">3</span>
            </div>
            <div className="flex-1">
              <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">Development</h4>
              <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
                Agile development with regular updates and transparent communication
              </p>
            </div>
          </div>
          
          {/* Arrow Down - Removed glow effects */}
          <div className="flex justify-center">
            <div className="relative w-8 h-16">
              <svg className="w-full h-full" viewBox="0 0 32 64" fill="none">
                <path 
                  d="M16 8 Q8 20, 16 32 Q24 44, 16 56" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeDasharray="4,4" 
                  fill="none"
                />
                <path 
                  d="M12 52 L16 60 L20 52" 
                  stroke="white" 
                  strokeWidth="2" 
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mr-6 shadow-lg flex-shrink-0">
              <span className="font-poppins font-bold text-[20px] text-white">4</span>
            </div>
            <div className="flex-1">
              <h4 className="font-poppins font-semibold text-[20px] text-white mb-2">Delivery</h4>
              <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px]">
                Thorough testing, deployment, and ongoing support for success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center p-12 bg-gradient-to-r from-secondary/10 via-primary to-secondary/10 rounded-[30px] border border-secondary/30">
      <h3 className="font-poppins font-bold text-[36px] text-white mb-6">
        Looking to build the future of your business with cutting-edge digital solutions?
      </h3>
      <button 
        onClick={() => window.location.href = 'mailto:info@alliancecorps.com?subject=Request Quote - Doozy Infotechs'}
        className="bg-secondary text-white font-poppins font-semibold text-[20px] py-5 px-10 rounded-[15px] hover:scale-105 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,255,0.4)] hover:shadow-[0_12px_40px_rgba(0,0,255,0.6)] border-2 border-white/20"
      >
        Request a Quote
      </button>
    </div>
  </div>
);

export default App;