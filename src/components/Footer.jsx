import styles from "../style";
import { socialMedia } from "../constants";
import { useState } from "react";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsConditions, setShowTermsConditions] = useState(false);

  const PrivacyPolicyModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-primary border border-gray-600 rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
          <button 
            onClick={() => setShowPrivacyPolicy(false)}
            className="text-white hover:text-secondary text-2xl"
          >
            ×
          </button>
        </div>
        <div className="space-y-4 text-[14px]">
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Introduction:</span> Doozy Infotech ("we," "our," "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Information We Collect:</span> Name, Email Address, Phone Number, Company Name, Message/Project Details, and automatically collected data via analytics tools, cookies, and tracking technologies.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">How We Use Your Information:</span> To respond to inquiries and provide services, communicate proposals, updates, and offers, improve website and user experience, and for marketing activities, including promotional emails (unless opted out).
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Third-Party Services:</span> We may use services like Google Analytics, reCAPTCHA, and third-party hosting/marketing tools. These providers follow their own privacy policies.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Data Storage & Security:</span> Data may be stored on third-party hosting (Azure, AWS, etc.). Reasonable protection measures are taken, but absolute security cannot be guaranteed.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Your Choices:</span> You may opt out of marketing communications anytime by contacting info@alliancecorps.com.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Updates to This Policy:</span> Updates will be posted here with a new effective date.
          </p>
        </div>
      </div>
    </div>
  );

  const TermsConditionsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-primary border border-gray-600 rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">Terms & Conditions</h2>
          <button 
            onClick={() => setShowTermsConditions(false)}
            className="text-white hover:text-secondary text-2xl"
          >
            ×
          </button>
        </div>
        <div className="space-y-4 text-[14px]">
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Introduction:</span> By accessing and using the Doozy Infotech website, you agree to comply with and be bound by the following terms and conditions.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Scope of Services:</span> Doozy Infotech provides technology consulting, software development, outsourcing, and related digital services. All deliverables are governed by separate agreements/contracts.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Use of Website:</span> Website may be used for lawful purposes only. Users may not interfere with security, functionality, or content of the site.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Payment Terms:</span> All payments for services are subject to separate project agreements. Website content does not constitute a binding quote or offer.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Intellectual Property:</span> All text, code, images, and graphics on this site are property of Doozy Infotech unless stated otherwise. Content may not be copied or reused without written consent.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Limitation of Liability:</span> Doozy Infotech is not liable for indirect, incidental, or consequential damages from use of the website. We do not guarantee uninterrupted access.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Jurisdiction:</span> Governed by the laws of India. Disputes will be handled in the courts of Mumbai, India.
          </p>
          <p className="font-poppins font-normal text-dimWhite leading-[20px]">
            <span className="text-white font-medium">Updates to Terms:</span> Doozy Infotech may update these Terms anytime. Continued use of the website constitutes acceptance of changes.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        {/* Company Info */}
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
  src="/logo.png"
  alt="Doozy Infotechs"
  className="w-[160px] sm:w-[200px] h-auto object-contain cursor-pointer"
  onClick={() => setCurrentPage("home")}
/>

          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white mt-4 mb-2">
            About Doozy Infotech
          </h4>
          <p className={`${styles.paragraph} mt-2 max-w-[350px]`}>
            Doozy Infotech is a digital solutions company delivering AI, blockchain, ERP, Microsoft, 
            web, and mobile app solutions for startups, enterprises, and governments worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-[1] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Quick Links
            </h4>
            <ul className="list-none mt-4">
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Home
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                About Us
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Services
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Case Studies / Portfolio
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className={`flex flex-col ss:my-0 my-4 min-w-[200px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Our Services
            </h4>
            <ul className="list-none mt-4">
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                AI & Agentic Solutions
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Blockchain Development
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Web & Mobile App Development
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                ERP & Microsoft Solutions
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4">
                Full-Stack Development
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer">
                Outsourcing Solutions
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className={`flex flex-col ss:my-0 my-4 min-w-[250px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Contact Information
            </h4>
            <ul className="list-none mt-4">
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
                <span className="text-white">Email:</span> info@doozyinfotech.com
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
                <span className="text-white">Phone:</span> +91 81046 59927
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mb-4">
                <span className="text-white">Address:</span> Marol, Mumbai, India
              </li>
              <li className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
                <span className="text-white">Hours:</span> Mon–Fri, 9:00 AM – 6:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social Media, Legal Links, and Copyright */}
      <div className="w-full pt-6 border-t-[1px] border-t-[#3F3E45]">
        {/* Connect With Us and Legal Links */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-0">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              Connect With Us
            </h4>
            <div className="flex flex-row">
              {socialMedia.map((social, index) => (
                <img
                  key={social.id}
                  src={social.icon}
                  alt={social.id}
                  className={`w-[21px] h-[21px] object-contain cursor-pointer hover:opacity-80 transition-opacity ${
                    index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                  }`}
                  onClick={() => window.open(social.link)}
                />
              ))}
            </div>
          </div>
          
          <div className="flex flex-row gap-8">
            <button
              onClick={() => setShowPrivacyPolicy(true)}
              className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setShowTermsConditions(true)}
              className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="w-full flex justify-center items-center pt-4 border-t-[1px] border-t-[#3F3E45]">
          <p className="font-poppins font-normal text-center text-[16px] leading-[24px] text-white">
            © 2025 Doozy Infotech. All rights reserved.
          </p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-primary border border-gray-600 rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              <button 
                onClick={() => setShowPrivacyPolicy(false)}
                className="text-white hover:text-secondary text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-6 text-[14px]">
              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Introduction</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  Doozy Infotech ("we," "our," "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information.
                </p>
              </div>
              
              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Information We Collect</h3>
                <ul className="font-poppins font-normal text-dimWhite leading-[20px] list-disc list-inside space-y-1">
                  <li>Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Message/Project Details</li>
                  <li>Automatically collected data via analytics tools, cookies, tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">How We Use Your Information</h3>
                <ul className="font-poppins font-normal text-dimWhite leading-[20px] list-disc list-inside space-y-1">
                  <li>Respond to inquiries and provide services</li>
                  <li>Communicate proposals, updates, and offers</li>
                  <li>Improve website and user experience</li>
                  <li>Marketing activities, including promotional emails (unless opted out)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Third-Party Services</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  We may use services like Google Analytics, reCAPTCHA, and third-party hosting/marketing tools. These providers follow their own privacy policies.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Data Storage & Security</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  Data may be stored on third-party hosting (Azure, AWS, etc.). Reasonable protection measures are taken, but absolute security cannot be guaranteed.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Your Choices</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  You may opt out of marketing communications anytime by contacting info@alliancecorps.com.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Updates to This Policy</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  Updates will be posted here with a new effective date.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {showTermsConditions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-primary border border-gray-600 rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Terms & Conditions</h2>
              <button 
                onClick={() => setShowTermsConditions(false)}
                className="text-white hover:text-secondary text-2xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="space-y-6 text-[14px]">
              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Introduction</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  By accessing and using the Doozy Infotech website, you agree to comply with and be bound by the following terms and conditions.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Scope of Services</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  Doozy Infotech provides technology consulting, software development, outsourcing, and related digital services. All deliverables are governed by separate agreements/contracts.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Use of Website</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  Website may be used for lawful purposes only. Users may not interfere with security, functionality, or content of the site.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Payment Terms</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  All payments for services are subject to separate project agreements. Website content does not constitute a binding quote or offer.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Intellectual Property</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  All text, code, images, and graphics on this site are property of Doozy Infotech unless stated otherwise. Content may not be copied or reused without written consent.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Limitation of Liability</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  Doozy Infotech is not liable for indirect, incidental, or consequential damages from use of the website. We do not guarantee uninterrupted access.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Jurisdiction</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  Governed by the laws of India. Disputes will be handled in the courts of Mumbai, India.
                </p>
              </div>

              <div>
                <h3 className="text-white font-medium text-[16px] mb-2">Updates to Terms</h3>
                <p className="font-poppins font-normal text-dimWhite leading-[20px]">
                  Doozy Infotech may update these Terms anytime. Continued use of the website constitutes acceptance of changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Footer;