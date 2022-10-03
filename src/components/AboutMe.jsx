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
            <p className="mb-2">
              Junior Full Stack Software Developer with a Certification from Southern Methodist University. I have a passion for software development and building
              interactive and user friendly applications.
            </p>
            <p className="mb-2">
              In my free time I enjoy going out to eat and playing soccer. I
              also love to travel with my girlfriend as well as relax with our
              dogs.
            </p>
            <p className="mb-2">
             I enjoy building projects on things that can be used in everyday life. With almost a year of experience I am proud of my growth but know that there is room for improvement. 
            </p>
            <div>
              <Skills  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
