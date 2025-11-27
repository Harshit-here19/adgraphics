import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="items-center mr-44 flex flex-col justify-around bg-gray-800 absolute top-0 left-0 w-1/2 h-screen z-20">
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
    </div>
  );
};

export default MobileNav;
