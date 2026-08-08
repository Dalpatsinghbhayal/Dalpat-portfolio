import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  // =========================
  // Scroll Detection
  // =========================
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // =========================
  // Menu Items
  // =========================
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  // =========================
  // Smooth Scroll
  // =========================
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        px-5
        sm:px-8
        md:px-[7vw]
        lg:px-[10vw]
        py-4
        ${
          isScrolled
            ? "bg-[#050414]/80 backdrop-blur-lg shadow-lg shadow-purple-500/10"
            : "bg-[#050414]/30 backdrop-blur-sm"
        }
      `}
    >
      {/* =========================
          NAVBAR CONTENT
      ========================= */}

      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* =========================
            LOGO
        ========================= */}

        <button
          onClick={() => handleMenuItemClick("about")}
          className="
            text-xl
            sm:text-2xl
            md:text-3xl
            font-bold
            text-white
            cursor-pointer
            whitespace-nowrap
          "
        >
          <span className="text-purple-500">&lt;</span>
          Dalpat
          <span className="text-purple-500">/</span>
          Singh
          <span className="text-purple-500">&gt;</span>
        </button>

        {/* =========================
            DESKTOP MENU
        ========================= */}

        <ul className="hidden md:flex items-center gap-6 lg:gap-9 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`
                  text-sm
                  lg:text-base
                  font-medium
                  transition-all
                  duration-300
                  hover:text-purple-500
                  ${
                    activeSection === item.id
                      ? "text-purple-500"
                      : "text-gray-300"
                  }
                `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* =========================
            DESKTOP SOCIAL ICONS
        ========================= */}

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Dalpatsinghbhayal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="
              text-gray-300
              hover:text-purple-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/dalpat-bhayal-74617524b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="
              text-gray-300
              hover:text-purple-500
              hover:scale-110
              transition-all
              duration-300
            "
          >
            <FaLinkedin size={25} />
          </a>
        </div>

        {/* =========================
            MOBILE MENU BUTTON
        ========================= */}

        <button
          className="md:hidden text-purple-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="text-3xl" />
          ) : (
            <FiMenu className="text-3xl" />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================= */}

      {isOpen && (
        <div
          className="
            md:hidden
            mt-4
            w-full
            rounded-2xl
            bg-[#0b081b]/95
            backdrop-blur-xl
            border
            border-purple-500/20
            shadow-2xl
            shadow-purple-500/10
            overflow-hidden
          "
        >
          <ul className="flex flex-col items-center py-5 gap-5">
            
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`
                    text-base
                    font-medium
                    transition-all
                    duration-300
                    ${
                      activeSection === item.id
                        ? "text-purple-500"
                        : "text-gray-300"
                    }
                    hover:text-purple-500
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* =========================
                MOBILE SOCIAL ICONS
            ========================= */}

            <li className="flex items-center gap-6 pt-2">
              <a
                href="https://github.com/Dalpatsinghbhayal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                  text-gray-300
                  hover:text-purple-500
                  transition
                "
              >
                <FaGithub size={25} />
              </a>

              <a
                href="https://www.linkedin.com/in/dalpat-bhayal-74617524b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                  text-gray-300
                  hover:text-purple-500
                  transition
                "
              >
                <FaLinkedin size={25} />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;