import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = containerRef.current;
    const totalWidth = sections.scrollWidth;

    gsap.to(sections, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  const images = [
    "/images/visitingCards/img1.jpg",
    "/images/visitingCards/img2.jpg",
    "/images/visitingCards/img3.jpg",
    "/images/visitingCards/img4.jpg",
    "/images/visitingCards/img1.jpg",
    "/images/visitingCards/img2.jpg",
    "/images/visitingCards/img3.jpg",
    "/images/visitingCards/img4.jpg",
    "/images/visitingCards/img1.jpg",
    "/images/visitingCards/img2.jpg",
    "/images/visitingCards/img3.jpg",
    "/images/visitingCards/img4.jpg",
  ];

  return (
    <section ref={sectionRef} className="relative h-screen overflow-hidden bg-black">
      <div
        ref={containerRef}
        className="flex gap-10 h-full items-center px-10"
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-[600px] h-[400px] object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </section>
  );
}