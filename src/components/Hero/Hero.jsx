import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100dvh - 50px)] bg-white overflow-hidden flex items-center justify-center px-6 md:px-20">
      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-500 animate-float"></div>
      <div className="absolue top-0 right-0 w-64 h-64 bg-purple-700 rounded-full translate-x-1/3 -translate-y-1/3 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400 rounded-full -translate-x-1/3 translate-y-1/3 animate-float "></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400 rounded-full animate-float "></div>

      {/* Text Content */}
      <div className="relative max-w-xl z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-light text-black">
          <span className="block animate-fadeUp">Creative.</span>
          <span className="block animate-fadeUp [animate-delay:.15s]">
            Clean.
          </span>
          <span className="block animate-fadeUp [animate-delay:.3s]">
            Impactful.
          </span>
          <span className="block animate-fadeUp [animate-delay:.45s]">
            Design.
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed animate-fadeUp [animation-delay:.6s]">
          Graphic design solution <br />
          that speak volumes.
        </p>

        <button className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-full animate-fadeIn [animation-delay:.8s] hover:bg-red-700 transition">
          View Portfolio
        </button>
      </div>
    </section>
  );
}
