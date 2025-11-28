import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUs() {
  const titleRef = useRef();
  const cardRefs = useRef([]);
  const shapeRefs = useRef([]);

 useLayoutEffect(() => {
  if (!titleRef.current) return;

  // If cards are not rendered yet, skip animation
  if (!cardRefs.current.length) return;

  // Title animation
  gsap.fromTo(
    titleRef.current,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "top 70%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Cards animation
  gsap.fromTo(
    cardRefs.current,
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRefs.current[0], // SAFE
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play none none reverse",
      },
    }
  );

  // Shapes animation (safe check)
  shapeRefs.current.forEach((shape, i) => {
    if (!shape) return;

    gsap.to(shape, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 3 + i * 0.5,
      ease: "sine.inOut",
      delay: i * 0.4,
    });
  });

  return () => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, []);


  // Helper to add to cardRefs safely
  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const addToShapeRefs = (index) => (el) => {
    shapeRefs.current[index] = el;
  };

  return (
    <section className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 z-0">
        <div
          ref={addToShapeRefs(0)}
          className="absolute top-1/4 left-10 w-72 h-72 bg-linear-to-r from-pink-500 to-rose-500 rounded-full opacity-20 blur-3xl"
        ></div>
        <div
          ref={addToShapeRefs(1)}
          className="absolute top-3/4 right-10 w-80 h-80 bg-linear-to-r from-blue-500 to-cyan-400 rounded-full opacity-25 blur-3xl"
        ></div>
        <div
          ref={addToShapeRefs(2)}
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-linear-to-r from-purple-500 to-indigo-600 rounded-full opacity-20 blur-2xl"
        ></div>
        <div
          ref={addToShapeRefs(3)}
          className="absolute bottom-20 left-20 w-40 h-40 bg-linear-to-r from-yellow-400 to-orange-500 rounded-lg rotate-45 opacity-30 blur-xl"
        ></div>
        <div
          ref={addToShapeRefs(4)}
          className="absolute top-20 right-1/3 w-32 h-32 bg-linear-to-r from-green-400 to-teal-500 rounded-full opacity-30 blur-2xl"
        ></div>
        <div
          ref={addToShapeRefs(5)}
          className="absolute bottom-1/3 right-1/4 w-52 h-52 bg-linear-to-r from-violet-500 to-pink-500 rounded-full opacity-20 blur-3xl"
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24">
        {/* Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 opacity-0"
        >
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
            Connect
          </span>
        </h1>
        <p className="text-xl text-center text-gray-300 mb-20 max-w-3xl mx-auto leading-relaxed">
          Reach out for creative collaborations, brand partnerships, or just to say hello. We love building meaningful connections.
        </p>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Studio Info */}
          <div
            ref={addToCardRefs}
            className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl opacity-0"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full"></span>
              Our Studio
            </h2>
            <div className="space-y-4 text-gray-200">
              <p className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">📍</span>
                <span>
                  <strong className="text-white">PixelForge Studio</strong>
                  <br />
                  88 Creative Loop, Design District<br />
                  Vision City, VC 75001
                </span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-cyan-400">📞</span>
                <span>+1 (888) 777-6666</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-cyan-400">✉️</span>
                <span>studio@pixelforge.design</span>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div
            ref={addToCardRefs}
            className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl opacity-0"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-linear-to-r from-purple-400 to-pink-500 rounded-full"></span>
              Studio Hours
            </h2>
            <div className="space-y-3 text-gray-200">
              {[
                { days: "Monday – Friday", time: "9:00 AM – 6:00 PM", open: true },
                { days: "Saturday", time: "10:00 AM – 4:00 PM", open: true },
                { days: "Sunday", time: "Closed", open: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 rounded-xl bg-black/20"
                >
                  <span>{item.days}</span>
                  <span
                    className={`font-medium ${
                      item.open ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div
            ref={addToCardRefs}
            className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl opacity-0"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-linear-to-r from-yellow-400 to-orange-500 rounded-full"></span>
              We Specialize In
            </h2>
            <div className="flex flex-wrap gap-3">
              {["Branding", "UI/UX", "Motion Design", "Print", "Web Dev", "Packaging"].map(
                (service, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-linear-to-r from-gray-700 to-black text-white rounded-full text-sm font-medium border border-white/10"
                  >
                    {service}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Socials */}
          <div
            ref={addToCardRefs}
            className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl opacity-0"
          >
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <span className="w-2 h-2 bg-linear-to-r from-green-400 to-teal-500 rounded-full"></span>
              Follow Our Journey
            </h2>
            <div className="flex gap-6">
              {[
                { name: "Instagram", color: "hover:bg-pink-500", icon: "📸" },
                { name: "Dribbble", color: "hover:bg-red-500", icon: "🎯" },
                { name: "LinkedIn", color: "hover:bg-blue-600", icon: "💼" },
                { name: "Behance", color: "hover:bg-purple-600", icon: "🎨" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={`https://www.${social.name.toLowerCase()}.com/pixelforge`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className={`flex flex-col items-center gap-2 text-gray-300 hover:text-white transition-all ${social.color} p-3 rounded-xl group`}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span className="text-sm font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="mt-16 flex justify-center">
          <div className="w-20 h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
}