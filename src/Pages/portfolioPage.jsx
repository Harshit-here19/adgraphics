import react from "react";

import img1 from "../assets/carousel/img1.jpg";
import img2 from "../assets/carousel/img2.jpg";
import img3 from "../assets/carousel/img3.jpg";
import img4 from "../assets/carousel/img4.jpg";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white h-fit relative">
      {/* --- Neon Circle Background Effects --- */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-green-500/20 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/20 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-yellow-500/20 blur-3xl opacity-20 rounded-full"></div>

      {/* Page Wrapper */}
      <div className=" z-10 max-w-screen mx-auto px-6 py-20">
        {/* -------- Featured Work Section -------- */}
        <section className="my-20 mx-10">
          <h2 className="text-3xl font-semibold mb-3  opacity-0 animate-[fadeUp_0.5s_ease-in_forwards]">
            Featured Work
          </h2>
          <p className="text-gray-300 mb-8 opacity-0 animate-[fadeUp_0.5s_ease-in_500ms_forwards]">
            A selection of my graphic design work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 opacity-0 animate-[fadeUp_0.5s_ease-in_1000ms_forwards]">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl hover:bg-white/10 transition ">
              <img
                src="/images/landscape.png"
                alt="Landscape"
                className="rounded-md w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Landscape</h3>
            </div>

            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-4 rounded-xl hover:bg-white/10 transition ">
              <img
                src="/images/marketing.png"
                alt="Marketing"
                className="rounded-md w-full h-56 object-cover"
              />
              <h3 className="text-xl font-semibold mt-4">Marketing Strategy</h3>
            </div>
          </div>
        </section>

        {/* -------- Gallery Section -------- */}
        <section
          className="overflow-hidden w-full"
          style={{ margin: "5rem 2rem" }}
        >
          <h2 className="text-3xl font-semibold mb-8 portfolio-text opacity-0 animate-[fadeUp_0.5s_ease-in_1200ms_forwards]">
            Project Gallery
          </h2>

          <div className="flex gap-8 opacity-0 animate-[fadeUp_0.5s_ease-in_1300ms_forwards] overflow-hidden w-[90%] bg-black">
            <div className="flex gap-5 w-max animate-[scrollLeft_30s_linear_infinite] ">
              <img
                src={img1}
                className="rounded-lg w-full h-56 object-contain"
              />
              <img
                src={img2}
                className="rounded-lg w-full h-56 object-contain"
              />
              <img
                src={img3}
                className="rounded-lg w-full h-56 object-contain"
              />
              <img
                src={img4}
                className="rounded-lg w-full h-56 object-contain"
              />
              <img
                src={img1}
                className="rounded-lg w-full h-56 object-contain"
              />
              <img
                src={img2}
                className="rounded-lg w-full h-56 object-contain"
              />
              <img
                src={img3}
                className="rounded-lg w-full h-56 object-contain"
              />
              <img
                src={img4}
                className="rounded-lg w-full h-56 object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;
