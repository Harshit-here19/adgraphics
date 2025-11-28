import React from 'react'

export const Carousel = ({location, label, animationTime}) => {
    const carouselList = [];
  for (let i = 1; i <= 16; i++) {
    carouselList.push(
      <img
        key={i}
        src={`/images/${location}/img${i < 9 ? i : i - 8}.jpg`}
        className="rounded-lg w-96 h-72 object-cover hover:scale-105 shrink-0"
      />
    );
  }

  return (
    <section className="overflow-hidden w-full my-20 mx-8">
          <h2 className="text-3xl font-semibold mb-8 portfolio-text opacity-0 animate-[fadeUp_0.5s_ease-in_1200ms_forwards] after:bg-black after:h-1 after:rounded-2xl after:w-[70%] after:top-1/2 after:absolute after:ml-4">
            {label}
          </h2>

          <div className="flex gap-8 opacity-0 animate-[fadeUp_0.5s_ease-in_1300ms_forwards] overflow-hidden w-[90%] bg-black/5 backdrop-blur-lg border border-black/10 p-4 rounded-xl hover:bg-black/10 transition">
            <div className={`flex gap-5 w-max animate-[scrollLeft_${animationTime}s_linear_infinite] hover:[animation-play-state:paused]`}>
              {carouselList}
            </div>
          </div>
        </section>
  )
}
