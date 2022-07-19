import React from "react";
import Cabo from "../assets/cabo.jpg";
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
        <div className="max-w-[1000px] w-full grid  grid-cols-2 gap-12 px-4">
          <div className="text-4xl font-bold">
            <img src={Cabo} alt="Selfie" className="selfie" />
          </div>
          <div>
            <p className="mb-2">
              Recent grad from Southern Methodist University in Dallas, TX. I
              have a passion for software development and building interactive
              and user friendly applications.
            </p>
            <p className="mb-2">
              In my free time I enjoy going out to eat and playing soccer. I
              also love to travel with my girlfriend as well as relax with our
              dogs.
            </p>
            <p className="mb-2">
              I have a passion for software development and am always looking
              for ways to become more effecient and to widen m skillset.
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
