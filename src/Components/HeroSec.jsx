/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import SocialMedia from "./SocialMedia";
import img1 from "../assets/img1.png";

const HeroSec = () => {
  return (
    <div className="flex lg:justify-between lg:flex-row flex-col items-center  mt-10 lg:w-[950px] mx-auto ">
      <div>
        <img
          className="md:w-[260px] md:h-[288px] w-[200px]  bg-cyan-400 rounded-full border-2 border-black"
          src={img1}    
          alt=""
        />
      </div>
      <div className="flex flex-col items-center ">
        <div className="mt-10 text-center">
          <h3 className="md:text-3xl text-2xl">Hello, I'm</h3>
          <h1 className="md:text-6xl text-4xl font-extrabold">Muhammad Tahir Kamal</h1>
        </div>
        <div>
          <span>{/* changing text like stream */}</span>
        </div>
        <div className="sm:w-[420px] p-5 w-65 mt-10" >
          <p className=" text-center h-fit ">
          I am a passionate Web Developer and Computer Science graduate with expertise in the MERN Stack. With over two years of experience, I build dynamic, scalable web applications focused on performance, responsiveness, and user experience. I excel in MongoDB, Express.js, React.js, and Node.js, leveraging modern technologies to deliver creative and efficient solutions that exceed client expectations.
          </p>
        </div>
        <div className="justify-center mb-5 flex ">
          <SocialMedia 
          size={32}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSec;
