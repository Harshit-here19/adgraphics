/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative w-full bg-white overflow-hidden flex items-center justify-center px-6 md:px-20"
      style={{ minHeight: `calc(100vh - 4px)` }}
    >
      {/* Floating Shapes */}
      <div className="blur-md absolute top-30 left-10 w-20 h-20 bg-red-500 animate-float max-sm:hidden"></div>
      <div className="blur-md absolute top-60 right-[60%] w-64 h-64 max-sm:h-40 max-sm:w-40 bg-purple-700 rounded-full translate-x-1/3 -translate-y-1/3 animate-float"></div>
      <div className="blur-md absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full -translate-x-1/3 translate-y-1/3 animate-float "></div>
      <div className="blur-md absolute top-0 right-0 w-64 h-64 bg-orange-400 rounded-full translate-x-1/3 -translate-y-1 animate-float "></div>
      <div className="blur-md absolute bottom-10 right-10 w-16 h-16 bg-yellow-400 rounded-full animate-float "></div>

      {/* Text Content */}
      <div className="relative max-w-xl z-10 mr-2 mt-24">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-light text-black"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Creative.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Clean.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Impactful.
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            Design.
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="mt-6 text-gray-600 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Graphic design solution <br /> that speak volumes.
        </motion.p>

        {/* Button */}
        <motion.button
          className="mt-8 bg-[#0a7aff] text-white font-semibold rounded-full hover:scale-105 transition"
          style={{ padding: "0.5rem 1rem" }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          onClick={() => navigate("/contactus")}
        >
          Contact Us
        </motion.button>
      </div>
    </section>
  );
}
