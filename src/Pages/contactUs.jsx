/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import ShopMap from "../components/ShopMap";

export default function ContactUs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatAnim = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
    },
  };

  return (
    <section className="relative min-h-screen bg-slate-900 text-white overflow-hidden">

      {/* FLOATING SHAPES */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={floatAnim}
          className="absolute top-1/4 left-10 w-72 h-72 bg-linear-to-r from-pink-500 to-rose-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          animate={floatAnim}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-3/4 right-10 w-80 h-80 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full opacity-25 blur-3xl"
        />
        <motion.div
          animate={floatAnim}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-linear-to-r from-purple-500 to-indigo-600 rounded-full opacity-20 blur-2xl"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">

        {/* TITLE */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6"
        >
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
            Connect
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto"
        >
          Reach out for collaborations, partnerships, or just to say hello.
        </motion.p>

        {/* MAP */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <ShopMap />
        </motion.div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* STUDIO HOURS */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-6">
              Studio Hours
            </h2>
            <div className="space-y-3 text-gray-200">
              <div className="flex justify-between p-3 bg-black/20 rounded-lg">
                <span>Mon – Sat</span>
                <span className="text-green-400">10:30 AM – 7:30 PM</span>
              </div>
              <div className="flex justify-between p-3 bg-black/20 rounded-lg">
                <span>Sunday</span>
                <span className="text-red-400">Closed</span>
              </div>
            </div>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-6">
              We Specialize In
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Flex", "Business Card", "Pamphlet", "Poster", "Standee"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-linear-to-r from-gray-700 to-black rounded-full border border-white/10"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
        </motion.div>

      </div>
    </section>
  );
}
