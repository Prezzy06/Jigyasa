import React from 'react'
import './About.css'

const About = () => {

  return (
    <>
      <div id="about" className = "aboutContainer">
      <h1 className='aboutHead font-extrabold text-6xl my-10 '>About Us</h1>

      <h4 className="aboutPara font-sans text-justify sm:w-[60%]">Jigyasa is a celebration of our department's rich history and legacy. The Department of Physics at IIT BHU was established in 1968, and over the years, it has become one of the leading institutions in the country for physics research and education. Our festival is an opportunity to showcase the groundbreaking work that our faculty and students are doing and to inspire others to explore the field.</h4>

      <h4 className="aboutPara font-sans text-justify sm:w-[60%]">Our festival features a wide range of activities, including workshops, competitions, events, and lectures. Our workshops provide hands-on learning opportunities, while our competitions offer a chance to put your physics knowledge to the test. Our events are designed to be both informative and fun, while our lectures bring together experts from different fields to share their insights and knowledge.</h4>

      <h4 className="aboutPara font-sans text-justify sm:w-[60%]">We believe that physics is not just a subject, but a way of thinking about the world. Through Jigyasa, we hope to inspire a lifelong love of learning and discovery in all those who attend. We look forward to seeing you at our festival and joining us in our mission to promote curiosity and wonder in the field of physics.</h4>
      </div>
    </>
  )
}

export default About