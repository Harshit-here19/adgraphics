// import react from "react";

import { Carousel } from "../components/Carousell";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white text-black h-fit relative overflow-hidden">
      {designBackground}

      {/* Page Wrapper */}
      <div className=" z-10 max-w-screen mx-auto px-6 py-20">
        {/* Different Tabs */}

        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6 animate-fadeIn">
              Simple. Beautiful.
              <span className="block text-gray-400">Effective.</span>
            </h2>

            <p
              className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto animate-fadeIn"
              style={{ animationDelay: "0.15s" }}
            >
              Less is more. Our approach focuses on clean design and meaningful
              content.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, i) => (
                <div
                  key={item}
                  className="group cursor-pointer opacity-0 animate-flip-in"
                  style={{ animationDelay: `${0.3 + i * 0.2}s` }}
                >
                  <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-gray-100">
                    <img
                      src={`/images/mockup${item}.jpg`}
                      alt={`Minimal design ${item}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="font-semibold text-gray-900">
                    {item == 1 && "Business Cards"}
                    {item == 2 && "Banners"}
                    {item == 3 && "Standee"}
                  </h3>
                  <p className="text-gray-500 text-sm">Branding & Design</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visiting Card */}
        <Carousel location="visitingCards" label="Visiting Cards" animationTime={30} />

        {/* Banner */}
        <Carousel location="banners" label="Banners" animationTime={20} />

        
      </div>
    </div>
  );
};

export default PortfolioPage;

const designBackground = (
  <>
    {/* --- Enhanced Neon Circle Background Effects --- */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Large Background Blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-linear-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-linear-to-r from-purple-500 to-pink-500 rounded-full opacity-25 blur-3xl animate-pulse-slow delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-yellow-400 to-orange-500 rounded-full opacity-15 blur-3xl animate-pulse-slow delay-2000"></div>

      {/* Medium Blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-linear-to-r from-cyan-400 to-teal-500 rounded-full opacity-30 blur-2xl animate-float"></div>
      <div className="absolute bottom-40 left-40 w-72 h-72 bg-linear-to-r from-violet-500 to-purple-600 rounded-full opacity-25 blur-2xl animate-float delay-1500"></div>
      <div className="absolute top-40 left-20 w-56 h-56 bg-linear-to-r from-rose-400 to-red-500 rounded-full opacity-30 blur-2xl animate-float delay-1000"></div>
      <div className="absolute bottom-20 right-60 w-60 h-60 bg-linear-to-r from-lime-400 to-green-500 rounded-full opacity-25 blur-2xl animate-float delay-500"></div>

      {/* Small Floating Blobs */}
      <div className="absolute top-10 left-1/4 w-32 h-32 bg-linear-to-r from-blue-400 to-indigo-500 rounded-full opacity-40 blur-xl animate-float-slow"></div>
      <div className="absolute bottom-32 right-32 w-28 h-28 bg-linear-to-r from-pink-400 to-rose-500 rounded-full opacity-35 blur-xl animate-float-slow delay-700"></div>
      <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-linear-to-r from-amber-400 to-orange-500 rounded-full opacity-40 blur-xl animate-float-slow delay-1200"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-linear-to-r from-emerald-400 to-green-500 rounded-full opacity-35 blur-xl animate-float-slow delay-900"></div>

      {/* Extra Small Accent Blobs */}
      <div className="absolute top-16 right-1/2 w-16 h-16 bg-linear-to-r from-sky-400 to-blue-500 rounded-full opacity-30 blur-lg animate-bounce-slow"></div>
      <div className="absolute bottom-16 left-1/2 w-14 h-14 bg-linear-to-r from-fuchsia-400 to-purple-500 rounded-full opacity-30 blur-lg animate-bounce-slow delay-500"></div>
      <div className="absolute top-2/3 right-16 w-12 h-12 bg-linear-to-r from-cyan-400 to-teal-500 rounded-full opacity-35 blur-lg animate-bounce-slow delay-300"></div>
      <div className="absolute top-1/4 left-16 w-10 h-10 bg-linear-to-r from-yellow-400 to-amber-500 rounded-full opacity-40 blur-lg animate-bounce-slow delay-700"></div>

      {/* Corner Fills */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-linear-to-br from-indigo-400 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-linear-to-tr from-teal-400 to-cyan-500 rounded-full opacity-20 blur-3xl"></div>

      {/* Edge Blobs for Full Coverage */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-linear-to-r from-rose-500 to-pink-600 rounded-full opacity-25 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-52 h-52 bg-linear-to-r from-green-500 to-emerald-600 rounded-full opacity-25 blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 -right-10 w-40 h-40 bg-linear-to-r from-orange-500 to-amber-600 rounded-full opacity-30 blur-2xl"></div>
      <div className="absolute top-1/2 -left-10 w-40 h-40 bg-linear-to-r from-blue-500 to-cyan-600 rounded-full opacity-30 blur-2xl"></div>
    </div>
  </>
);
