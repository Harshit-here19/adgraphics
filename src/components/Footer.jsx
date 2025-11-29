import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FcCellPhone, FcInvite } from "react-icons/fc";

const Footer = () => {
  return (
    <footer className="bg-gray-900 z-30 text-white py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-col justify-center items-center">
        {/* Contact Info */}
        <div>
          <p className="text-sm text-gray-400 flex items-center max-md:hidden">
            <FcCellPhone /> &nbsp; +91-9760077223 | &nbsp;&nbsp;
            <FcInvite /> &nbsp; adgraphicsagra007@gmail.com | &nbsp;&nbsp;
            <MdLocationOn /> &nbsp; 40B/232, Sky Tower, Sanjay Place, Agra &nbsp;&nbsp;
          </p>

          <p className="text-sm text-gray-400 flex items-center md:hidden">
            <FcCellPhone /> &nbsp; +91-9760077223
          </p>
          <p className="text-sm text-gray-400 flex items-center md:hidden">
            <FcInvite /> &nbsp; adgraphicsagra007@gmail.com
          </p>
          <p className="text-sm text-gray-400 flex items-center md:hidden">
            <MdLocationOn /> &nbsp; B-42,Basement, Sky Tower, Sanjay Palace,
            Agra
          </p>
        </div>

        <div className="text-center mt-2">
          © {new Date().getFullYear()} AD Graphics. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
