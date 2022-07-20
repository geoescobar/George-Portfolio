import React from "react";
import ConsoleLog from "../assets/console-log.png";
import TitanTickets from "../assets/titan-tickets.png";
import TechBlog from "../assets/tech-blog.png";
import FeedbackApp from "../assets/feedback.png";
import CodeQuiz from "../assets/code-quiz.png";
import WeatherDash from "../assets/weather-dashboard.png";

function Projects() {
  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#16161d]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#F53803]">
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
            style={{ backgroundImage: `url(${ConsoleLog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl text-white tracking-wider text-center">
                Console.Log
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/geoescobar/Group-Project-2"
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
              <span className="text-2xl font-bold text-white tracking-wider">
                Titan Tickets
              </span>
              <div className="pt-8 text-center">
                <a href="/">
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
            style={{ backgroundImage: `url(${TechBlog})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tech Blog
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noopener noreferrer">
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
            style={{ backgroundImage: `url(${FeedbackApp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
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
            style={{ backgroundImage: `url(${CodeQuiz})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-110 duration-500"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Code Quiz
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/geoescobar/Code-Quiz"
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
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Dashboard
              </span>
              <div className="pt-8 text-center">
                <a href="/" target="_blank" rel="noopener noreferrer">
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
