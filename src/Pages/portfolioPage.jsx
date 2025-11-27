import React from "react";

const PortfolioPage = () => {
  const galleryImages = [
    // "/images/work1.jpg",
    // "/images/work2.jpg",
    // "/images/work3.jpg",
    // "/images/work4.jpg",
    // "/images/work5.jpg",
    // "/images/work6.jpg",
    "https://picsum.photos/400/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/400/400",
    "https://picsum.photos/400/500",
    "https://picsum.photos/500/300",
    "https://picsum.photos/400/530",
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white h-fit relative">
      {/* --- Neon Circle Background Effects --- */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-green-500/20 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/20 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-yellow-500/20 blur-3xl opacity-20 rounded-full"></div>

      {/* Page Wrapper */}
      <div className=" z-10 max-w-screen mx-auto px-6 py-20">
        {/* -------- Featured Work Section -------- */}
        <section className="mt-20" style={{ margin: "5rem 2rem" }}>
          <h2 className="text-3xl font-semibold mb-3  opacity-0 animate-[fadeUp_0.5s_ease-in_forwards]">
            Featured Work
          </h2>
          <p className="text-gray-300 mb-8 opacity-0 animate-[fadeUp_0.5s_ease-in_500ms_forwards]">
            A selection of my graphic design work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-0 animate-[fadeUp_0.5s_ease-in_1000ms_forwards]">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl hover:bg-white/10 transition ">
              <img
                src="/images/landscape.jpg"
                alt="Landscape"
                className="rounded-md w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Landscape</h3>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl hover:bg-white/10 transition ">
              <img
                src="/images/marketing.jpg"
                alt="Marketing"
                className="rounded-md w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Marketing Strategy</h3>
            </div>
          </div>
        </section>

        {/* -------- Gallery Section -------- */}
        <section style={{ margin: "5rem 2rem" }}>
          <h2 className="text-3xl font-semibold mb-8 portfolio-text opacity-0 animate-[fadeUp_0.5s_ease-in_1200ms_forwards]">
            Project Gallery
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 opacity-0 animate-[fadeUp_0.5s_ease-in_1300ms_forwards]">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-white/10 transition"
              >
                <img
                  src={src}
                  alt={`Project ${i + 1}`}
                  className="rounded-lg w-full h-56 object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
