import  { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; 
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/Content.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="font-poppins flex justify-between items-center px-6 py-4 bg-black absolute w-full z-50">
      {/* Logo Section */}
      <div>
        <img src={logo} alt="Logo" className="w-10 h-10" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-white font-medium text-lg">
        <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
          Models
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
          Pricing
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
          About Us
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
          Contact Us
        </li>
        <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
          Custom Models
        </li>
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-white hover:text-gray-300 transition-all duration-300">
          Login
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300">
          Get Started Now
        </button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-[rgba(20,15,47,0.9)] text-white p-6 rounded-lg shadow-lg z-40"
          >
            <ul className="flex flex-col space-y-4 font-medium text-lg">
              <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
                Models
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
                Pricing
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
                About Us
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
                Contact Us
              </li>
              <li className="cursor-pointer hover:text-gray-300 transition-all duration-300">
                Custom Models
              </li>
            </ul>
            <div className="flex flex-col mt-4 space-y-3">
              <button className="text-white w-full border border-gray-500 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300">
                Login
              </button>
              <button className="bg-white text-black py-2 w-full rounded-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                Get Started Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
