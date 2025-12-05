import "./portfolioPage.css";
import { Carousel } from "../components/Carousel";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Page Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Glassmorphism Container */}
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 mb-12 transition-all duration-1000 ease-out opacity-0 translate-y-8 animate-[fadeInUp_1s_ease-out_forwards]">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 transition-all duration-700 ease-out delay-200 opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
                Simple. Beautiful.
                <span className="block text-purple-300 mt-6 transition-all duration-700 ease-out delay-300 opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
                  Effective.
                </span>
              </h2>

              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto transition-all duration-700 ease-out delay-500 opacity-0 translate-y-4 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
                Less is more. Our approach focuses on clean design and
                meaningful content.
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-8 transition-all duration-700 ease-out delay-700 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
                <div className="h-px w-16 bg-linear-to-r from-transparent to-purple-400/50"></div>
                <span className="text-purple-400 text-xl animate-pulse">✦</span>
                <div className="h-px w-16 bg-linear-to-l from-transparent to-purple-400/50"></div>
              </div>
            </div>

            {/* Portfolio Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item, index) => (
                <div
                  key={item}
                  className="cursor-pointer group"
                  style={{
                    animation: `fadeInUp 0.8s ease-out ${
                      1 + index * 0.15
                    }s forwards`,
                    opacity: 0,
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-gray-900/50 relative">
                      <img
                        src={`/images/mockup${item}.jpg`}
                        alt={`Minimal design ${item}`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
                      />
                      {/* Shimmer Effect on Hover */}
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
                    </div>
                    <h3 className="font-semibold text-white text-lg transition-colors duration-300 group-hover:text-purple-300">
                      {item === 1 && "Business Cards"}
                      {item === 2 && "Banners"}
                      {item === 3 && "Standee"}
                    </h3>
                    <p className="text-purple-300/70 text-sm mt-1 transition-colors duration-300 group-hover:text-purple-200">
                      Branding & Design
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <CosmicDivider />

        {/* Carousel Sections */}
        <section className="py-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <Carousel location="visitingCards" label="Visiting Cards" />
          </div>
        </section>

        <CosmicDivider />

        <section className="py-10">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <Carousel location="banners" label="Banners" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PortfolioPage;

// Simple divider component
const CosmicDivider = () => (
  <div className="my-12 flex items-center justify-center">
    <div className="flex-1 h-px bg-gray-700"></div>
    <div className="mx-6 text-gray-500 text-xl">✦</div>
    <div className="flex-1 h-px bg-gray-700"></div>
  </div>
);
