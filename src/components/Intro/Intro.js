import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Intro.css";
// import physics from "../Design/physics.png";

const Intro = () => {
  return (
    <>
      <div className="flex justify-center align-center flex-wrap overflow-hidden IntroContainer ">
        <div className="flex flex-col md:flex-row md:h-[100vh] w-full px-8 py-20">
          <div className="md:ml-8 flex-grow md:flex md:flex-col justify-center">
            <p className="text-3xl text-center md:text-left text-white font-bold IntroHeading">
              <TypeAnimation
                sequence={["WELCOME", 1000, "TO", 800, "JIGYASA'24", 800]}
                speed={30}
                style={{ fontSize: "2em" }}
                className="movingText"
                wrapper="span"
                repeat={Infinity}
              />
            </p>
            <p className="text-lg text-white md:max-w-screen-lg text-justify md:mt-4 pt-6 IntroPara">
              Welcome to Jigyasa, the annual college festival of the Department of Physics at the Indian Institute of Technology (IIT) BHU. We are a team of passionate individuals who are committed to promoting curiosity and wonder in the field of physics through a series of engaging and interactive events. Our goal is to create an exciting platform that brings together students, researchers, and physics enthusiasts from across the country. We believe that by providing a space where people can learn, interact, and engage with the subject, we can foster a love for physics and inspire the next generation of physicists.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
