import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const images = [
  "/images/visitingCards/img1.jpg",
  "/images/visitingCards/img2.jpg",
  "/images/visitingCards/img3.jpg",
  "/images/visitingCards/img4.jpg",
  "/images/visitingCards/img5.jpg",
  "/images/visitingCards/img6.jpg",
  "/images/visitingCards/img7.jpg",
  "/images/visitingCards/img8.jpg",
  "/images/visitingCards/img9.jpg",
  "/images/visitingCards/img13.jpg",
  "/images/visitingCards/img11.jpg",
  "/images/visitingCards/img12.jpg",
];

const Text = () => {
  const [current, setCurrent] = useState(images.length - 1); // center image index
  const containerRef = useRef(null);

  // Autoplay every 2.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Animate every time current changes
  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".slide");

    cards.forEach((card, index) => {
      const diff = (index - current + images.length) % images.length;

      let x = 0,
        z = 0,
        rot = 0,
        opacity = 1;

      if (diff === 0) {
        // CENTER
        x = 0;
        z = 0;
        rot = 0;
        opacity = 1;
      } else if (diff === 1) {
        // RIGHT SIDE
        x = 350;
        z = -200;
        rot = -45;
        opacity = 1;
      } else if (diff === images.length - 1) {
        // LEFT SIDE
        x = -350;
        z = -200;
        rot = 45;
        opacity = 1;
      } else {
        // HIDDEN STACKED IMAGES
        x = 450;
        z = -300;
        rot = -45;
        opacity = 0;
      }

      gsap.to(card, {
        opacity,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(card, {
        x,
        z,
        rotateY: rot,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, [current]);

  return (
    <section className="py-16 overflow-hidden bg-linear-to-br from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Memorable <span className="text-yellow-300">Moments</span>
        </h1>

        <div className="relative w-full flex justify-center perspective-distant">
          <div
            ref={containerRef}
            className="relative w-full max-w-4xl h-[350px] md:h-[400px] transform-style-3d"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="slide absolute top-1/2 left-1/2 w-7xl md:w-72 h-40 md:h-52 transform -translate-x-1/2 -translate-y-1/2"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover rounded-lg shadow-xl"
                  alt={`img_${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Text;
