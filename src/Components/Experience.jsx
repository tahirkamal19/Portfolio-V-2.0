/* eslint-disable no-unused-vars */
import React from "react";

const Experience = () => {
  return (
    <div className="p-5 mt-5 ">
      <h1 className="text-center md:text-4xl text-3xl font-bold mb-5">Experience</h1>
      <div className="flex  justify-center">
      <div className="bg-slate-950 border-blue-500 border-x-2 shadow-lg shadow-blue-500/25 sm:w-[620px] lg:w-[700px] p-8 rounded-lg w-65">
        <h1 className="md:text-4xl text-xl text-center italic md:mb-5 mb-2 font-bold">
          MERN Stack Internee
        </h1>
        <div>
          <p className="opacity-50 italic">
            Company :{" "}
            <a
              className="text-purple-500 hover:underline"
              target="_blank"
              href="https://sigmaevo.net/"
            >   
              Sigma Evolution
            </a>
          </p>
          <p className="opacity-50 italic">June 2024 - August 2024</p>
        </div>

        <div className="border-t-2 border-gray-500">
          <ol className="mt-5 list-disc ml-5 text-sm md:text-lg">
            <li>
              Built full-stack applications using MERN (MongoDB, Express, React,
              Node)
            </li>
            <li>Built a multi-vendor E-commerce website</li>
            <li>
              Developed RESTful APIs and performed database operations with
              MongoDB
            </li>
            <li>
              Created responsive user interfaces with React and CSS frameworks
            </li>
          </ol>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Experience;
