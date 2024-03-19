import React from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import {FaXTwitter} from 'react-icons/fa6'
import { IconContext } from "react-icons";
import { useState } from "react";

const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const body = document.getElementsByTagName("body")[0];

  const handleMenu = () => {
    setMobMenu(!mobMenu);
    if (!mobMenu) {
      body.style.overflow = "hidden";
    }
    if (mobMenu) {
      body.style.overflow = "auto";
    }
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;

    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar bg-black">
        <div className="flex justify-between items-center max-h-[15vh] min-h-[8vh]">
          <div className="md:hidden mx-5 " onClick={handleMenu}>
            {!mobMenu ? (
              <IconContext.Provider value={{ className: "react-icons" }}>
                <FaBars className="cursor-pointer " />
              </IconContext.Provider>
            ) : (
              <></>
            )}
            {mobMenu ? (
              <IconContext.Provider value={{ className: "react-icons" }}>
                <FaArrowLeft className="cursor-pointer" />
              </IconContext.Provider>
            ) : (
              <></>
            )}
          </div>
          <h1 className="text-white text-2xl font-sans font-black px-10 ml-2 my-1 drop-shadow-l">
            <Link smooth to="/#">
              <img
                src={require("./textlogo.png")}
                alt="Jigyasa'24"
                className="Navlogo"
              />
            </Link>
          </h1>

          <div className=" flex items-center py-3 relative">
            <ul className="hidden md:flex px-2 lg:px-5 ">
              <li className="px-2 md:px-4 text-white font-sans hover:text-[#ffffff] text-lg">
                <Link
                  smooth
                  to={{
                    pathname: "/",
                    hash: "about",
                  }}
                  scroll={(el) => scrollWithOffset(el)}
                >
                  About
                </Link>
              </li>
              <li
                className="px-2 md:px-4 text-white font-sans hover:text-[#ffffff] text-lg"
                href="#"
              >
                <Link
                  smooth
                  to={{
                    pathname: "/",
                    hash: "events",
                  }}
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Events
                </Link>
              </li>
              <li
                className="px-2 md:px-4 text-white font-sans hover:text-[#ffffff] text-lg"
                href="#"
              >
                <Link
                  smooth
                  to={{
                    pathname: "/",
                    hash: "gallery",
                  }}
                  scroll={(el) => scrollWithOffset(el)}
                >
                  Gallery
                </Link>
              </li>
              <li
                className="px-2 md:px-4 text-white font-sans hover:text-[#ffffff] text-lg"
                href="#"
              >
                <Link to="/team/#">Team</Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={
            mobMenu
              ? "md:hidden ease-in-out duration-500  overflow-y-hidden absolute left-0 navMobile bg-black h-screen w-full z-20 px-5 py-8"
              : "absolute left-[-100%] h-screen ease-in-out duration-500"
          }
        >
          <ul className="m-auto px-5 py-8">
            <li
              className="px-4 py-5 text-white text-center font-sans text-2xl"
              onClick={handleMenu}
            >
              <Link
                smooth
                to={{
                  pathname: "/",
                  hash: "about",
                }}
                scroll={(el) => scrollWithOffset(el)}
              >
                About
              </Link>
            </li>
            <li
              className="px-4 py-5 text-white text-center font-sans text-2xl"
              onClick={handleMenu}
            >
              <Link
                smooth
                to={{
                  pathname: "/",
                  hash: "events",
                }}
                scroll={(el) => scrollWithOffset(el)}
              >
                Events
              </Link>
            </li>
            <li
              className="px-4 py-5 text-white text-center font-sans text-2xl"
              onClick={handleMenu}
            >
              <Link
                smooth
                to={{
                  pathname: "/",
                  hash: "gallery",
                }}
                scroll={(el) => scrollWithOffset(el)}
              >
                Gallery
              </Link>
            </li>
            <li
              className="px-4 py-5 text-white text-center font-sans text-2xl"
              onClick={handleMenu}
            >
              <Link to="/team/#">Team</Link>
            </li>
          </ul>

          <ul className="flex justify-center py-2">
            <li className="social-links font-sans text-white mx-5 text-l my-4">
              <a href="https://twitter.com">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <FaXTwitter className="sm:hidden" />
                </IconContext.Provider>
                <p className="hidden sm:flex">X</p>
              </a>
            </li>
            <li className="social-links font-sans text-white mx-5 text-l my-4 ">
              <a href="https://linkedin.com">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <BsLinkedin className="sm:hidden" />
                </IconContext.Provider>
                <p className="hidden sm:flex">LinkedIn</p>
              </a>
            </li>
            <li className="social-links font-sans text-white mx-5 text-l my-4 ">
              <a href="https://www.facebook.com/jigyasa.iitbhu/">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <BsFacebook className="sm:hidden" />
                </IconContext.Provider>
                <p className="hidden sm:flex">Facebook</p>
              </a>
            </li>
            <li className="social-links font-sans justify-center text-white mx-5 text-l my-4 ">
              <a href="https://www.instagram.com/jigyasa.iitbhu/">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <BsInstagram className="sm:hidden" />
                </IconContext.Provider>
                <p className="hidden sm:flex">Instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
