import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Dalpatsinghbhayal",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/dalpat-bhayal-74617524b/",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/__singh__1018/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="border-t border-gray-800 bg-[#050414] px-5 sm:px-8 md:px-[7vw] lg:px-[10vw] py-10">
      <div className="max-w-7xl mx-auto text-center">

        {/* Logo */}

        <button
          onClick={() => handleScroll("about")}
          className="text-2xl md:text-3xl font-bold text-white hover:text-purple-500 transition duration-300"
        >
          <span className="text-purple-500">&lt;</span>
          Dalpat Singh
          <span className="text-purple-500">/&gt;</span>
        </button>

        {/* Navigation */}

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-gray-400 text-sm md:text-base hover:text-purple-500 transition duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Social Icons */}

        <div className="flex justify-center items-center gap-5 mt-7">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-full
                bg-[#131025]
                border
                border-gray-700
                text-gray-300
                text-lg
                hover:text-purple-500
                hover:border-purple-500
                hover:scale-110
                transition-all
                duration-300
              "
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Divider */}

        <div className="max-w-xl mx-auto border-t border-gray-800 mt-8"></div>

        {/* Copyright */}

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Dalpat Singh. All rights reserved.
        </p>

        <p className="text-gray-600 text-xs mt-2">
          Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;