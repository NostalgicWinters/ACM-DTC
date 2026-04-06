import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";

function TeamCarousel({ team }) {

  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };
  return (
    <section className="w-full py-20 bg-white">
      <h1 className="text-5xl font-bold text-center my-24">
        Our <span className="text-[#005DAA]">Whole</span> Team in one carousel
      </h1>

      <Swiper
        modules={[Autoplay]}
        loop
        speed={6000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.5 },
        }}
        className="px-6"
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>

            {/* CARD */}
            <div className="group h-[420px] [perspective:1000px]" onClick={() => handleFlip(index)}>

              {/* INNER */}
              <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]
              ${
      flippedIndex === index
        ? "[transform:rotateY(180deg)]"
        : "group-hover:[transform:rotateY(180deg)]"
    }`}
              >

                {/* FRONT */}
                <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center">
                    <h3 className="text-2xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-sm uppercase opacity-80">
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-xl overflow-hidden">

                  {/* Background image (mirrored + blurred) */}
                  <img
                    src={member.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover scale-x-[-1] blur-md brightness-50"
                  />

                  {/* Overlay content */}
                  <div className="relative z-10 w-full h-full flex items-center justify-center p-4 text-white">
                    <div className="text-center">
                      <p className="italic mb-4">"{member.quote}"</p>

                      <div className="flex flex-col gap-2 text-sm">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          className="underline"
                        >
                          LinkedIn
                        </a>

                        <a
                          href={`mailto:${member.email}`}
                          className="underline"
                        >
                          {member.email}
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default TeamCarousel;