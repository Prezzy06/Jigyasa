import React from 'react'
import About from "../../components/About/About";
import Events from "../../components/Event/Events"
import Footer from "../../components/Footer/Footer";
import StickyNav from "../../components/Navbars/stickyNav";
import Intro from "../../components/Intro/Intro";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



export default function Home() {
  
  return (
    <>
      <StickyNav />
      <Intro />
      <About />
      <Events />
      <Footer />
    </>
  )
}
