import React, { useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaGlobeAfrica } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(" ");
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };
  const handleScroll = () => {
    const sections = ["home", "about","donate","projects", "team", "contact"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (targetID) => {
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navLinks = (
    <ul className="flex flex-col md:flex-row  lg:space-x-8 sm:space-x-4 space-y-0 md:space-y-0 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("home");
          }}
          href="#home"
          className={` hover:text-green-200 text-white ${
            activeSection === "home" ? "isActive" : ""
          }`}
        >
          Home
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#services"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("services");
          }}
          className={` hover:text-green-200 text-white ${
            activeSection === "services" ? "isActive" : ""
          }`}
        >
          About
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#about"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("about");
          }}
          className={` hover:text-green-200 text-white ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          Projects
        </motion.a>
      </li>
      <li>
        <motion.a
          href="#team"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("team");
          }}
          className={` hover:text-green-200 text-white ${
            activeSection === "team" ? "isActive" : ""
          }`}
        >
          Team
        </motion.a>
      </li>

      <li>
        <motion.a
          href="#purchase"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("purchase");
          }}
          className={` hover:text-green-200 text-white ${
            activeSection === "purchase" ? "isActive" : ""
          }`}
        >
          Contact
        </motion.a>
      </li>

      <li>
        <motion.a
          href="#purchase"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            handleCloseMenu();
            handleScrollTo("purchase");
          }}
          className={` hover:text-green-200 text-white ${
            activeSection === "purchase" ? "isActive" : ""
          }`}
        >
          News and Stories
        </motion.a>
      </li>

    </ul>
  );

  return (
    <header className="bg-green-600 text-white py-3 fixed px-4 top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div>
          <a href="#home" className="flex flex-row hover:text-green-100">
            <span className="p-1 text-2xl"><FaGlobeAfrica /></span>
            <h1 className="text-xl font-bold">
              NGO 265
            </h1>
          </a>
        </div>

        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navLinks}</nav>
        </div>

        <div className="hidden md:block ">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.preventDefault();
              handleCloseMenu();
              handleScrollTo("contact");
            }}
            href="#contact"
            className="flex flex-row text-white bg-green-900 hover:bg-green-900/90 px-5 py-2 rounded-full"
          >
            Donate <span className="text-xl px-2"><BiSolidDonateHeart /></span>
          </motion.a>
          
        </div>

        <div className="block md:hidden">
          <button
            onClick={handleToggle}
            className={`text-white focus:outline-none ${
              isOpen ? " " : "block"
            }`}
          >
            {
              isOpen ? <IoMdCloseCircleOutline className="size-6" /> : <HiMenuAlt3 className="size-6" />
            }
            
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full h-screen bg-green-700 bg-opacity-95 z-20">
          <ul className="flex flex-col p-4 space-y-5">
            {navLinks.props.children}

            <li className="py-3 ">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.preventDefault();
                  handleCloseMenu();
                  handleScrollTo("contact");
                }}
                href="#contact"
            className="flex flex-row text-white bg-green-900 hover:bg-green-900/90 px-5 py-2 rounded-full w-max"
          >
            Donate <span className="text-xl px-2"><BiSolidDonateHeart /></span>
              </motion.a>
              
            </li>
            
          </ul>
        </nav>
        
      )}
    </header>
  );
};

export default Navbar;
