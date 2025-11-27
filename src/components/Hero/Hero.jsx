import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full bg-white overflow-hidden flex items-center justify-center px-6 md:px-20"
      style={{ minHeight: `calc(100vh - 4px)` }}
    >
      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 animate-float"></div>
      <div className="absolue top-0 right-0 w-64 h-64 max-sm:h-40 bg-purple-700 rounded-full translate-x-1/3 -translate-y-1/3 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full -translate-x-1/3 translate-y-1/3 animate-float "></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400 rounded-full animate-float "></div>

      {/* Text Content */}
      <div
        className="relative max-w-xl z-10 mr-6"
        style={{ marginRight: "7rem" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-light text-black">
          <span className="block  opacity-0 animate-[fadeUp_0.5s_ease-in_forwards]">
            Creative.
          </span>
          <span className="block  opacity-0 animate-[fadeUp_0.5s_ease-in_500ms_forwards]">
            Clean.
          </span>
          <span className="block  opacity-0 animate-[fadeUp_0.5s_ease-in_1000ms_forwards]">
            Impactful.
          </span>
          <span className="block  opacity-0 animate-[fadeUp_0.5s_ease-in_1500ms_forwards]">
            Design.
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed  opacity-0 animate-[fadeUp_0.5s_ease-in_2000ms_forwards]">
          Graphic design solution <br />
          that speak volumes.
        </p>

        <button
          className="mt-8 bg-red-500 text-white font-semibold rounded-full  opacity-0 animate-[fadeIn_0.5s_ease-in_1200ms_forwards] hover:bg-red-700 transition"
          style={{ padding: "0.5rem 1rem" }}
        >
          View Portfolio
        </button>
      </div>
    </section>
  );
}
