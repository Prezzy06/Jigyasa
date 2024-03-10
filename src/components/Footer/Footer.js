import React from 'react';
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import { IconContext } from "react-icons";
const Footer = () => {

  return (
    <>
      <footer className='footer justify-center body items-center min-h-[20vh]'>
      <div className='py-5 flex flex-col justify-center items-center'>
          
          <ul className='flex justify-center py-2'>
              <li className="social-links font-['Nunito'] text-black mx-5 text-l my-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons'}}><BsTwitter className=""/></IconContext.Provider>
                </a>
              </li>
              <li className='social-links font-["Nunito"] text-black mx-5 text-l my-4 '>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsLinkedin className=""/></IconContext.Provider>
              </a>
              </li>
              <li className='social-links font-["Nunito"] text-black mx-5 text-l my-4 '>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsFacebook className=""/></IconContext.Provider>
              </a>
              </li>
              <li className='social-links font-["Nunito"] justify-center text-black mx-5 text-l my-4 '>
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsInstagram className=""/></IconContext.Provider>
              </a>
              </li>
              <li className='social-links font-["Nunito"] justify-center text-black mx-5 text-l my-4 '>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><IconContext.Provider value={{ className: 'react-icons' }}><BsYoutube className=""/></IconContext.Provider>
              </a>
              </li>
            </ul>

      </div>
      </footer>

    </>
  )
}

export default Footer