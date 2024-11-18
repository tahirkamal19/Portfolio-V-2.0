/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { FaGithub, FaLinkedin,FaEnvelope , FaWhatsapp } from 'react-icons/fa';

function SocialMedia({size=44}) {
  return (
    <ul
    className='flex flex-wrap gap-8' 
    aria-label="Social media">
      <li className='hover:scale-110 transition-all duration-300'>
        <a
          href="https://github.com/tahirkamal19"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={size} color="#0e76a8" />
        </a>
      </li>
      <li className='hover:scale-110 transition-all duration-300'>
        <a
          href="https://www.linkedin.com/in/tk19"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
         <FaLinkedin size={size} color="#0e76a8"/>
        </a>
      </li>
      <li className='hover:scale-110 transition-all duration-300'>
        <a
          href="mailto:tahirkamal6@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope size={size} color="#0e76a8"/>
        </a>
      </li>
      <li className='hover:scale-110 transition-all duration-300'>
        <a
          href="https://wa.me/03366562329"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={size} color="#0e76a8" />
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
