import React from "react";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#16161d]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-screen ">
        <p className="text-[#F53803]">Hello, my name is</p>
        <h1 className="text-4xl font-bold text-gray-300">George Escobar</h1>
        <h2 className="text-4xl font-bold text-gray-400">
          Full Stack Developer
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          quisquam fuga repudiandae eius adipisci eum unde optio magnam eaque
          reprehenderit!
        </p>
        <div>
          <button className="text-[#16161d] border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-[#F53803] to-[#F5D020] rounded-full border-none hover:underline">
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
