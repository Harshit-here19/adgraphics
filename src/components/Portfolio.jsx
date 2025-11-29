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
      className="w-screen min-h-screen h-auto bg-[#111116] text-white flex max-sm:flex-col items-center justify-between overflow-x-hidden relative py-8"
    >
      {/* Background blobs */}
      <div className="absolute -left-20 top-40 w-72 h-72 bg-teal-600 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute right-10 top-10 w-64 h-64 bg-indigo-700 rounded-full opacity-20 blur-2xl"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-2xl"></div>

      {/* LEFT SIDE */}
      <div className="portfolio-text max-w-lg py-4 ml-4 max-h-1/2 max-sm:max-h-full max-sm:mb-6 max-sm:mt-6 sm:ml-24">
        <h1 className="text-6xl font-bold pb-2">Portfolio</h1>
        <p className="text-gray-300 text-xl mb-4">A selection of our work.</p>

        <button
          className="bg-[#0a7aff] hover:scale-105 transition rounded-full font-medium text-lg py-2 px-4"
          onClick={() => navigate("/portfolio")}
        >
          View More
        </button>
      </div>

      {/* RIGHT SIDE GRID */}
      <div
        className="grid md:grid-cols-2 grid-cols-1 gap-4 h-auto max-w-[60%] max-sm:max-h-full mr-12"
      >
        {items.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`bg-[#1b1c20] w-90 max-md:w-[90vw] h-52 rounded-lg flex items-end relative overflow-x-hidden hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-md hover:shadow-blue-400 ${
              i == 3 ? "mb-8" : ""
            }`}
          >
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center `}
            >
              <img
                src={item.img}
                className="w-full h-[90%] opacity-80 object-cover"
              />
              <p className="text-lg font-medium center mt-1 mb-4">
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
