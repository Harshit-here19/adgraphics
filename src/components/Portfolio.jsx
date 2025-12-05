// Portfolio.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

import banner from "../assets/icons/banner.JPG";
import phamplet from "../assets/icons/phamplet.JPG";
import standee from "../assets/icons/standee.WEBP";
import visitingCard from "../assets/icons/visitingCard.JPG";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // fade In Section
      gsap.from(".portfolio-text", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Stagger cards
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    { title: "Banner", img: banner },
    { title: "Phamplet", img: phamplet },
    { title: "Standee", img: standee },
    { title: "VisitingCard", img: visitingCard },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-screen h-auto bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900 flex max-sm:flex-col items-center justify-between overflow-x-hidden relative py-8"
    >
      {/* Background colorful shapes */}
      <div className="absolute -left-20 top-40 w-72 h-72 bg-linear-to-r from-teal-400 to-cyan-300 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute right-10 top-10 w-64 h-64 bg-linear-to-r from-indigo-400 to-purple-300 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-linear-to-r from-yellow-300 to-orange-300 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute left-1/3 top-1/4 w-48 h-48 bg-linear-to-r from-pink-300 to-rose-300 rounded-full opacity-30 blur-3xl"></div>

      {/* LEFT SIDE */}
      <div className="portfolio-text max-w-lg py-4 ml-4 max-h-1/2 max-sm:max-h-full max-sm:mb-6 max-sm:mt-6 sm:ml-24">
        <h1 className="text-6xl font-bold pb-2">Portfolio</h1>
        <p className="text-gray-700 text-xl mb-4">A selection of our work.</p>

        <button
          className="bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white hover:scale-105 transition rounded-full font-medium text-lg py-2 px-6 shadow-lg"
          onClick={() => navigate("/portfolio")}
        >
          View More
        </button>
      </div>

      {/* RIGHT SIDE GRID */}
      <div className="flex flex-wrap gap-4 h-auto min-w-[60%] max-sm:min-h-full">
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`bg-white/80 backdrop-blur-sm w-[45%] max-md:w-[90vw] h-52 rounded-xl flex items-end relative overflow-x-hidden border border-white/50 shadow-lg hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-xl ${
              i == 3 ? "mb-8" : ""
            }`}
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center `}
            >
              <img
                src={item.img}
                className="w-full h-[90%] opacity-90 object-cover rounded-t-xl"
                loading="lazy"
              />
              <p className="text-lg font-medium center mt-1 mb-4 text-gray-800">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
