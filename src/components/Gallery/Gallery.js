import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import SwiperCore, { Autoplay, Pagination, FreeMode, Navigation } from "swiper";

import { imgData } from "./Data";
import "./Gallery.css";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Autoplay, Pagination, FreeMode, Navigation]);

const Gallery = () => {
  return (
    <div id="gallery">
      <h1 className="GalleryHead font-extrabold text-6xl mt-200 mb-100 pt-20 pb-20 my-10">
        Gallery
      </h1>
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="lg:w-1/2 px-4">
          <h1 className="GalleryHead font-extrabold text-5xl mb-20">
            Our previous speakers
          </h1>
        </div>
        <div className="lg:w-1/2">
          <div className="flex items-center justify-center">
            <div className="max-w-[90%] lg:max-w-[80%] w-full overflow-hidden">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, FreeMode, Navigation]}
                className="w-full"
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                }}
              >
                {imgData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-center gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[350px] w-[325px] lg:h-[400px] lg:w-[375px] overflow-hidden cursor-pointer">
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
    </div>
  );
};

export default Gallery;
