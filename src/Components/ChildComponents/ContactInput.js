import React from "react";

const ContactInput = () => {
  return (
    <form className="  bg-white flex flex-col md:ml-auto w-full md:w-[50%] ">
      <h2
        data-aos="fade-up"
        className="text-gray-900 text-xl mb-1 font-medium title-font"
      >
        Contact Us
      </h2>

      <div data-aos="fade-up" className="relative mb-4">
        <label for="name" className="leading-7 text-sm text-gray-600">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div data-aos="fade-up" className="relative mb-4">
        <label for="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div data-aos="fade-up" className="relative mb-4">
        <label for="phone" className="leading-7 text-sm text-gray-600">
          Phone No.
        </label>
        <input
          type="number"
          id="phone"
          name="phone"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>

      <div data-aos="fade-up" className="relative mb-4">
        <label for="message" className="leading-7 text-sm text-gray-600">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
        ></textarea>
      </div>
      <button
        data-aos="fade-up"
        className="text-white bg-red-800 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactInput;
