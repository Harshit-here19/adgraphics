import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Nav, Bars } from "./NavbarElements";

// useEffect(() => {
//   return () => {
//     console.log(location.pathname);
//   };
// }, []);

const Navbar = () => {
  // const activeStyle =
  //   "text-soloLightBlue flex items-center py-2 h-full cursor-pointer hover:text-soloPurple active:underline no-underline";
  return (
    <>
      <Nav>
        <Bars />

        <span className="text-soloLightBlue flex items-center py-2 h-full cursor-pointer active:text-purple-700ple no-underline m-10">
          <span className="text-3xl font-bold">A.D. </span>
          <span>&nbsp; </span>
          <span className="text-3xl"> Graphics</span>
        </span>

        <span className="items-center mr-44 max-sm:hidden sm:flex justify-between w-[15%]">
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
            to="/about"
          >
            About
          </NavLink>
        </span>
      </Nav>
    </>
  );
};

export default Navbar;
