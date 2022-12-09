import React from "react";
import Avi from "../assets/avi.jpg";
import Skills from "./Skills";

function AboutMe() {
  return (
    <div
      name="about"
      className="about-me w-full h-screen bg-[#16161d] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#F53803]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-12 px-4">
          <div className="text-4xl font-bold">
            <img src={Avi} alt="Selfie" className="selfie" />
          </div>
          <div>
            <p className="mb-4">
              My name is George Escobar and I am a recent graduate of the
              software development program at Southern Methodist University in
              Dallas, TX. I have always been interested in technology and
              problem-solving, which led me to pursue a career in software
              development.
            </p>
            <p className="mb-4">
              During the bootcamp, I gained a strong foundation in software
              development principles and technologies, including languages such
              as HTML, CSS, and JavaScript. I also learned about software design
              and architecture, data structures and algorithms, and web
              development.
            </p>
            <p className="mb-4">
              In my free time, I enjoy staying up-to-date with the latest
              developments in the field of software development and
              experimenting with new technologies. I am always looking for new
              opportunities to learn and grow as a software developer. I also
              enjoy traveling and going spending time with my dogs and family!
            </p>
            <div>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
