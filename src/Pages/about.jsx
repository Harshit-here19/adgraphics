import React from "react";
import HorizontalScroll from "../components/HorizintalScroll";
import img1 from "../assets/carousel/img1.jpg";
import img2 from "../assets/carousel/img2.jpg";
import img3 from "../assets/carousel/img3.jpg";
import img4 from "../assets/carousel/img4.jpg";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white bg-blue-400">AD Graphics</h1>
      <HorizontalScroll />
      {/* -------- Gallery Section -------- */}
        <section className="overflow-hidden w-full my-20 mx-8 relative">
          <h2 className="text-3xl font-semibold mb-8 portfolio-text opacity-0 animate-[fadeUp_0.5s_ease-in_1200ms_forwards] after:bg-black after:h-1 after:rounded-2xl after:w-[70%] after:top-1/2 after:absolute after:ml-4">
            Project Gallery
          </h2>

          <div className="flex gap-8 opacity-0 animate-[fadeUp_0.5s_ease-in_1300ms_forwards] overflow-hidden w-[90%] bg-black/5 backdrop-blur-lg border border-black/10 p-4 rounded-xl hover:bg-black/10 transition">
            <div className="flex gap-5 w-max animate-[scrollLeft_10s_linear_infinite] hover:[animation-play-state:paused]">
              <img
                src={img1}
                className="rounded-lg w-full h-90 object-contain hover:scale-105"
              />
              <img
                src={img2}
                className="rounded-lg w-full h-90 object-contain hover:scale-105"
              />
              <img
                src={img3}
                className="rounded-lg w-full h-90 object-contain hover:scale-105"
              />
              <img
                src={img4}
                className="rounded-lg w-full h-90 object-contain hover:scale-105"
              />
              <img
                src={img1}
                className="rounded-lg w-full h-90 object-contain hover:scale-105"
              />
              <img
                src={img2}
                className="rounded-lg w-full h-90 object-contain hover:scale-105"
              />
              <img
                src={img3}
                className="rounded-lg w-full h-90 object-contain hover:scale-105"
              />
              <img
                src={img4}
                className="rounded-lg w-full h-90 object-contain hover:scale-105"
              />
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;
