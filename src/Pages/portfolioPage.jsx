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
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 mb-12">
              <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
                Simple. Beautiful.
                <span className="block text-purple-300 mt-6">Effective.</span>
              </h2>

              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Less is more. Our approach focuses on clean design and meaningful content.
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="h-px w-16 bg-linear-to-r from-transparent to-purple-400/50"></div>
                <span className="text-purple-400 text-xl">✦</span>
                <div className="h-px w-16 bg-linear-to-l from-transparent to-purple-400/50"></div>
              </div>
            </div>

            {/* Portfolio Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="cursor-pointer">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
                    <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-gray-900/50">
                      <img
                        src={`/images/mockup${item}.jpg`}
                        alt={`Minimal design ${item}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-white text-lg">
                      {item === 1 && "Business Cards"}
                      {item === 2 && "Banners"}
                      {item === 3 && "Standee"}
                    </h3>
                    <p className="text-purple-300/70 text-sm mt-1">Branding & Design</p>
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
