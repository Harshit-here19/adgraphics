/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // Scroll Down → Hide
      if (currentScroll > lastScrollY) {
        controls.start({ y: "-100%", transition: { duration: 0.3 } });
      } else {
        controls.start({ y: "0%", transition: { duration: 0.3 } });
      }

      lastScrollY = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        animate={controls}
        className="fixed top-0 left-0 w-full z-50 h-[50px]"
      >
        {/* Nav Container */}
        <div className="flex justify-between items-center px-6 bg-[#111111] backdrop-blur-lg border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
          {/* Logo */}
          <span
            className="text-soloLightBlue flex items-center py-2 h-full cursor-pointer my-2 mx-4 drop-shadow-lg"
            onClick={() => navigate("/")}
          >
            <span className="text-3xl font-bold">AD</span>
            <span className="text-3xl">&nbsp;Graphics</span>
          </span>

          {/* DESKTOP MENU */}
          <span className="items-center max-sm:hidden sm:flex justify-between w-[30%] my-2 mx-2">
            {["Home", "Portfolio", "About", "Contact Us"].map((text, idx) => (
              <NavLink
                key={idx}
                to={idx === 0 ? "/" : `/${text.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  `text-soloLightBlue text-xl relative pb-1 transition-all ${
                    isActive ? "after:w-full text-purple-700" : "after:w-0"
                  } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
                }
              >
                {text}
              </NavLink>
            ))}
          </span>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1.5 my-2 mx-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="h-1 w-7 bg-white rounded"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="h-1 w-7 bg-white rounded"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="h-1 w-7 bg-white rounded"
            />
          </button>
        </div>

        {/* MOBILE MENU */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={
            isOpen
              ? { opacity: 1, y: 0, visibility: "visible" }
              : { opacity: 0, y: -10, visibility: "hidden" }
          }
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center gap-6 py-6 bg-white/20 backdrop-blur-xl border-b border-white/20 text-white text-lg"
        >
          {["Home", "Portfolio", "About", "Contact Us"].map((text, idx) => (
            <NavLink
              key={idx}
              to={idx === 0 ? "/" : `/${text.toLowerCase().replace(" ", "")}`}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-black text-xl relative pb-1 transition-all ${
                  isActive ? "after:w-full text-glow" : "after:w-0"
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
              }
            >
              {text}
            </NavLink>
          ))}
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
