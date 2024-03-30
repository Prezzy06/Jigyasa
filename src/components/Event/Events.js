import React from "react";
import { Data } from "./Data";
import "./Events.css";

import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Card = () => {
  return (
    <div id="events">
      <h1 className="EventHead font-extrabold text-6xl mt-200 mb-100 pt-20 my-10">
        Events
      </h1>
      {Data.map((item, index) => (
        <>
          <div
            key={index}
            id="card"
            class="pt-8 pb-12 x  {item.float} sm:m-0"
            data-aos={item.slide}
            data-aos-duration="800"
          >
            <motion.div
              class="p-0 w-full min-h-[41vh] lg:w-4/5 mx-auto shadow-lg flex flex-col rounded-lg hover:shadow-xl"
              style={{
                background:
                  "linear-gradient(90deg, rgb(255,255,255) 0%, rgb(128,128,128) 100%)",
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                v-for="card in cards"
                class="flex flex-col md:flex-row overflow-hidden
                                    rounded-lg w-100"
              >
                <div class="h-[41vh] w-auto md:w-1/2 ">
                  <img
                    class="inset-0 h-full w-full object-cover object-center rounded-l-lg"
                    alt="event pic"
                    src={item.image}
                  />
                </div>

                <div
                  class="w-full py-6 px-8 text-gray-800 flex flex-col "
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(255,255,255) 0%, rgb(128,128,128) 100%)",
                  }}
                >
                  <h3
                    class="text-lg leading-tight truncate mb-2 px-2 py-1"
                    style={{
                      fontFamily: "Nunito",
                      color: "#fff",
                      fontSize: "25px",
                      backgroundColor: "black",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p class="mt-2 info mx-2">{item.information}</p>
                  <div className="mt-4 mx-2">
                    {item.flag ? (
                      <a
                        href={item.link}
                        style={{ fontFamily: "Nunito" }}
                        className="bg-black text-white py-2.5 px-3 rounded text-sm"
                      >
                        Register
                      </a>
                    ) : (
                      <span>&nbsp;</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
