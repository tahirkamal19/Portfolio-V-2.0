/* eslint-disable no-unused-vars */
import React from 'react'
import img1 from "../assets/img1.png";


const AboutMe = () => {
  return (
    <div className='flex  justify-center flex-row'>
        <div className='bg-slate-950 sm:w-[620px] lg:w-[700px] p-8 rounded-lg w-65'>
        <h1 className='text-4xl text-center  mb-5 font-bold'>More About Me</h1>
        <p className='text-center'>
          I am a BSCS graduate and a postion holder. I am a Web Developer with a passion for creating dynamic and responsive web applications. With a strong foundation in {<strong>HTML, CSS, and JavaScript,</strong>}  I have developed a range of projects that showcase my skills in front-end development. I have also worked with various frameworks and libraries such as {<strong>React, Redux toolkit, tailwind css and Node.js</strong>}  to build scalable and efficient web applications. I have experience in working with databases such as {<strong>MongoDB and MySQL</strong>}, I have experience with {<strong>MERN Stack</strong>} , and I am always looking to expand my knowledge and skills in the field of web development. I am constantly learning and improving my skills to stay up-to-date with the latest trends and technologies in the industry. My ultimate goal is to become a Software Engineer and contribute to the development of innovative and impactful applications. I want to use my skills and knowledge to make a positive impact on the world and create meaningful solutions to real-world problems.
            </p>
        </div>  
    </div>
  )
}

export default AboutMe