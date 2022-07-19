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
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold">
            <img src={Cabo} alt="Selfie" className="selfie" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              nulla deleniti tempora ducimus eveniet placeat enim labore minus
              cumque rerum!
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
