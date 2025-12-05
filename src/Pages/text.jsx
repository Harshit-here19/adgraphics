import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Text = () => {
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8 tracking-tight drop-shadow-lg">
          3D Image Carousel
        </h1>

        <div className="relative max-w-3xl mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 30,
              stretch: 15,
              depth: 300,
              modifier: 2,
              slideShadows: true,
            }}
            speed={1000}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
            className="my-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="swiper-slide-custom">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform-gpu transition-all duration-700 hover:scale-[1.03] hover:shadow-3xl group">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <style jsx>{`
            .my-swiper {
              width: 100%;
              padding: 60px 0;
            }

            .swiper-slide-custom {
              width: 85%;
              max-width: 550px;
            }

            .swiper-slide {
              transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
              transition-duration: 1000ms;
              transform: scale(0.85) translateY(10px);
              opacity: 0.7;
            }

            .swiper-slide-active {
              transform: scale(1) translateY(0);
              opacity: 1;
              z-index: 10;
            }

            .swiper-slide-next,
            .swiper-slide-prev {
              transform: scale(0.9) translateY(5px);
              opacity: 0.85;
            }

            .swiper-button-next,
            .swiper-button-prev {
              color: rgba(255, 255, 255, 0.9) !important;
              background-color: rgba(255, 255, 255, 0.15);
              width: 48px;
              height: 48px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              backdrop-filter: blur(10px);
              box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background-color: rgba(255, 255, 255, 0.25);
              transform: scale(1.1) translateY(-2px);
              box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
            }

            .swiper-pagination-bullet {
              width: 8px;
              height: 8px;
              background-color: rgba(255, 255, 255, 0.4);
              opacity: 1;
              transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
              transform: scale(1);
              margin: 0 4px !important;
            }

            .swiper-pagination-bullet-active {
              background: linear-gradient(45deg, #a855f7, #ec4899);
              transform: scale(1.5);
              width: 16px;
              border-radius: 4px;
            }

            @media (max-width: 640px) {
              .swiper-slide {
                transform: scale(0.75) translateY(15px);
              }

              .swiper-slide-active {
                transform: scale(1) translateY(0);
              }

              .swiper-slide-next,
              .swiper-slide-prev {
                transform: scale(0.8) translateY(10px);
              }
            }
          `}</style>
        </div>

        <p className="text-center text-gray-300 mt-8 text-sm md:text-base opacity-80">
          Use navigation arrows or swipe to see the 3D effect
        </p>
      </div>
    </div>
  );
};

export default Text;
