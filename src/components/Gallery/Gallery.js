import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import SwiperCore, {
  EffectCards,
  Autoplay,
  Pagination,
  FreeMode,
  Navigation,
} from "swiper";

import { imgData } from "./Data";
import { memData } from "./Glimpses";

import "./Gallery.css";

SwiperCore.use([EffectCards, Autoplay, Pagination, FreeMode, Navigation]);

const Gallery = () => {
  return (
    <div id="gallery">
      <h1 className="GalleryHead font-extrabold text-6xl mt-200 mb-100 pt-20 pb-8 my-10">
        Gallery
      </h1>
      <h1 className="GalleryHead font-extrabold text-5xl mb-20">
        Our previous speakers
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-center mb-20">
        <div className="lg:w-full">
          <div className="flex items-center justify-center">
            <div className="max-w-[90%] lg:max-w-[80%] w-full overflow-hidden">
              <Swiper
                loop={true}
                freeMode={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination, FreeMode, Navigation]}
                className="w-full"
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                  733: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1380: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
              >
                {imgData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-center gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[350px] lg:h-[375px] lg:w-[375px] overflow-hidden cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-1/2 px-4">
          <h1 className="GalleryHead justify-center items-center font-extrabold text-5xl mb-20">
            Previous year Glimpses
          </h1>
        </div>
        <div className="lg:w-1/2">
          <div className="flex items-center justify-center mb-20">
            <div className="max-w-[90%] lg:max-w-[80%] w-full overflow-hidden">
              <Swiper
                loop={true}
                effect={"cards"}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[EffectCards, Autoplay]}
                style={{
                  borderRadius: "0.75rem",
                }}
                className="sm:max-w-[400px] sm:max-h-[400px] xs:max-w-[280px] xs:max-h-[280px]"
              >
                {memData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex align-center flex-col items-center justify-center  mb-20 relative  text-white rounded-xl px-6 py-8 xs:h-[280px] xs:w-[280px] sm:h-[400px] sm:w-[400px] lg:h-[400px] lg:w-[400px] overflow-hidden cursor-pointer">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${item.image})`,
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
