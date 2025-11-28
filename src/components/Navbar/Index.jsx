import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const navigate = useNavigate();
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const nav = navbarRef.current;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      gsap.set(nav, { yPercent: 0 });

      if (currentScrollY > lastScrollY) {
        //scroll down -> hide
        gsap.to(nav, {
          yPercent: -100,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(nav, {
          yPercent: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav ref={navbarRef} className="fixed top-0 left-0 w-full z-50 h-[50px]">
        {/* Nav Container  */}
        <div className="flex justify-between items-center px-6 bg-[#111111] backdrop-blur-lg border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
          {/* Logo  */}
          <span
            className="text-soloLightBlue flex items-center py-2 h-full cursor-pointer active:text-purple-700 no-underline my-2 mx-4 drop-shadow-lg"
            onClick={() => navigate("/")}
          >
            <span className="text-3xl font-bold">AD</span>
            <span>&nbsp; </span>
            <span className=" text-3xl"> Graphics</span>
          </span>

          {/* DESKTOP MENU */}
          <span className="items-center max-sm:hidden sm:flex justify-between w-[30%] my-2 mx-2">
            <NavLink
              className={({ isActive }) =>
                `text-soloLightBlue text-xl relative pb-1 transition-all ${
                  isActive ? "after:w-full text-purple-700" : "after:w-0"
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-soloLightBlue text-xl relative pb-1 transition-all ${
                  isActive ? "after:w-full text-purple-700" : "after:w-0"
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-soloLightBlue text-xl relative pb-1 transition-all ${
                  isActive ? "after:w-full text-purple-700" : "after:w-0"
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `text-soloLightBlue text-xl relative pb-1 transition-all ${
                  isActive ? "after:w-full text-purple-700" : "after:w-0"
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
              }
              to="/contact"
            >
              Contact Us
            </NavLink>
          </span>

          {/* HAMBURGER  */}
          <button
            className="md:hidden flex flex-col gap-1.5 my-2 mx-5"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`h-1 w-7 bg-white rounded transition ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-7 bg-white rounded transition ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-1 w-7 bg-white rounded transition ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          style={{ padding: "1rem 0" }}
          className={`md:hidden flex flex-col items-center gap-6 py-6 bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] text-white text-lg transition-all duration-300 ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          }`}
        >
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-black text-xl relative pb-1 transition-all ${
                isActive ? "after:w-full text-glow" : "after:w-0"
              } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-black text-xl relative pb-1 transition-all ${
                isActive ? "after:w-full text-glow" : "after:w-0"
              } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
            }
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-black text-xl relative pb-1 transition-all ${
                isActive ? "after:w-full text-glow" : "after:w-0"
              } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-black text-xl relative pb-1 transition-all ${
                isActive ? "after:w-full text-glow" : "after:w-0"
              } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
            }
            to="/contact"
          >
            Contact Us
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
