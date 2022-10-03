import React from "react";
import Dashboard from "../assets/dashboard.png";
import TitanTickets from "../assets/titan-tickets.png";
import TechBlog from "../assets/tech-blog.png";
import FeedbackApp from "../assets/feedback.png";
import Moolah from "../assets/mockup.png";
import WeatherDash from "../assets/weather-dashboard.png";

function Projects() {
  return (
    <div
      name="projects"
      className="w-full text-gray-300 bg-[#16161d]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 md:mb-8">
          <p className=" text-4xl font-bold inline border-b-4 text-gray-300 border-[#F53803]">
            Projects
          </p>
          <p className="py-6">Here are some featured projects</p>
          <div>
            <a
              href="https://github.com/geoescobar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-[#16161d] border-2 px-6 py-3 my-2 flex items-center bg-gradient-to-r from-[#F53803] to-[#F5D020] rounded-full border-none hover:underline">
                More Projects
              </button>
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${Dashboard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl text-white tracking-wider text-center">
                Crypto Coffee
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://crypto-coffee-2022.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/geoescobar/crypto-coffee"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Moolah})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl text-white tracking-wider text-center">
                Moolah - Money Manager
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://drive.google.com/file/d/1kYa8TMb4O3QN5I9GNmV_7wjN3WR4r7XE/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/geoescobar/money-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TechBlog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl text-white tracking-wider text-center">
                Tech Blog
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ge-tech-blog.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/geoescobar/tech-blog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TitanTickets})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl text-white tracking-wider text-center">
                Titan Tickets
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://geoescobar.github.io/Project1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/geoescobar/Project1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${FeedbackApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl text-white tracking-wider text-center">
                Feedback App
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/geoescobar/Feedback-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${WeatherDash})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl text-white tracking-wider text-center">
                Weather Dashboard
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://geoescobar.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/geoescobar/Weather-Dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
