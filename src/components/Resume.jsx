import React from "react";
import ResumePDF from "../assets/resume.pdf";

function Resume() {
  return (
    <div name="resume" className="p-2">
      <div class="parallax-two">
        <div className="pt-8 text-center">
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <button className="text-center rounded-lg px-4 py-3 m-2 hover:underline bg-gradient-to-r from-[#F53803] to-[#F5D020] text-gray-700 font-bold text-lg">
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resume;
