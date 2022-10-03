import React from "react";

function ContactMe() {
  return (
    <div
      name="contact"
      className="contact-me w-full h-screen bg-[#16161d] text-gray-300 flex justify-center items-center p-8"
    >
      <form
        method="POST"
        action="https://getform.io/f/6d8e2be5-25cf-4783-8a20-9a52c3af2afb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4 border-[#F53803]">
            Contact
          </p>
          <p className="py-4">Send me a message!</p>
        </div>
        <input
          className="p-2 text-[#16161d]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 text-[#16161d]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="p-2 text-[#16161d]"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-[#16161d] border-2 mx-auto px-12 py-3 my-8 flex items-center bg-gradient-to-r from-[#F53803] to-[#F5D020] rounded-full border-none hover:underline">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactMe;
