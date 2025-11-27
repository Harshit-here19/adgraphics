import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import gwen from "../assets/icons/Gwen.jpg"
import hermione from "../assets/icons/Hermione.png"
import laptop from "../assets/icons/Laptop.jpg"
import wonder from "../assets/icons/Wonder.jpeg"

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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
    { title: "Gwen", img: gwen },
    { title: "Hermione", img: hermione },
    { title: "Laptop", img: laptop },
    { title: "Wonder", img: wonder },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-screen min-h-screen h-auto bg-[#111116] text-white py-20 px-12 flex max-sm:flex-col items-center justify-between overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute -left-20 top-40 w-72 h-72 bg-teal-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute right-10 top-10 w-64 h-64 bg-indigo-700 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-yellow-400 rounded-full opacity-20 blur-3xl"></div>

        {/* LEFT SIDE */}
        <div className="portfolio-text max-w-lg py-4 max-h-1/2 max-sm:max-h-full max-sm:mt-6" style={{margin:"0 3rem"}}>
          <h1 className="text-6xl font-bold ml-4" style={{paddingBottom:"1rem"}}>Portfolio</h1>
          <p className="text-gray-300 text-xl mb-8" style={{paddingBottom:"1rem"}}>A selection of our work.</p>

          <button className="bg-orange-500 hover:bg-orange-700 hover:scale-105 transition rounded-full font-medium text-lg" style={{padding:"0.5rem 1rem"}}>
            View More
          </button>
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 min-h-screen max-sm:h-auto py-[6rem] max-h-1/2 max-sm:max-h-full" style={{margin:"0 3rem"}}>
          {items.map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="bg-[#1b1c20] w-70 h-52 rounded-lg flex items-end p-4 relative overflow-hidden hover:scale-105 transition-transform hover:-translate-y-2 hover:shadow-xl transition "
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                src={item.img}
                className="w-full h-[90%] object-contain mb-4 opacity-80"
              />
              <p className="text-lg font-medium center">{item.title}</p>
              </div>

            </div>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
