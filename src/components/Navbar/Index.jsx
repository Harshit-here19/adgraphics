import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const activeStyle =
  //   "text-soloLightBlue flex items-center py-2 h-full cursor-pointer hover:text-soloPurple active:underline no-underline";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 h-[50px]">
        {/* Nav Container  */}
        <div className="flex justify-between items-center px-6 py-4 bg-[#111111] backdrop-blur-lg border-b border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.15)]">
          {/* Logo  */}
          <span
            className="text-soloLightBlue flex items-center py-2 h-full cursor-pointer active:text-purple-700ple no-underline m-10 drop-shadow-lg"
            style={{ margin: "8px 16px" }}
          >
            <span className="text-3xl font-bold">A.D. </span>
            <span>&nbsp; </span>
            <span className=" text-3xl"> Graphics</span>
          </span>

          {/* DESKTOP MENU */}
          <span
            className="items-center mr-44 max-sm:hidden sm:flex justify-between w-[30%]"
            style={{ margin: "8px 16px" }}
          >
            <NavLink
              // className={({ isActive }) =>
              //   isActive ? "underline text-soloPurple" : activeStyle
              // }
              className={({ isActive }) =>
                `text-soloLightBlue text-xl relative pb-1 transition-all ${
                  isActive ? "after:w-full text-purple-700ple" : "after:w-0"
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              // className={({ isActive }) =>
              //   isActive ? "underline text-soloPurple after:w-0" : activeStyle
              // }
              className={({ isActive }) =>
                `text-soloLightBlue text-xl relative pb-1 transition-all ${
                  isActive ? "after:w-full text-purple-700ple" : "after:w-0"
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              // className={({ isActive }) =>
              //   isActive ? "underline text-soloPurple after:w-0" : activeStyle
              // }
              className={({ isActive }) =>
                `text-soloLightBlue text-xl relative pb-1 transition-all ${
                  isActive ? "after:w-full text-purple-700ple" : "after:w-0"
                } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
              }
              to="/about"
            >
              About
            </NavLink>
          </span>

          {/* HAMBURGER  */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            style={{ margin: "8px 20px" }}
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
              `text-soloLightBlue text-xl relative pb-1 transition-all ${
                isActive ? "after:w-full text-purple-700ple" : "after:w-0"
              } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-soloLightBlue text-xl relative pb-1 transition-all ${
                isActive ? "after:w-full text-purple-700ple" : "after:w-0"
              } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
            }
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `text-soloLightBlue text-xl relative pb-1 transition-all ${
                isActive ? "after:w-full text-purple-700ple" : "after:w-0"
              } after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-blue-600 after:transition-all`
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
