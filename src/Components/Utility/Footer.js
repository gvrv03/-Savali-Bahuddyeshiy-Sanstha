import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400  bg-red-800 body-font">
      <div className="bg-opacity-75">
        <div className="container  py-6 mx-auto  gap-5 flex items-center sm:flex-row  justify-between flex-col">
          <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="/logo.svg" className="w-10 rounded-full" alt="logo" />
            <span className="ml-3 text-base text-gray-100  ">
              Savali Bahuddyeshiy Sanstha
            </span>
          </div>

          <div className="text-gray-100">
            Designed and Developed by -{" "}
            <a className="font-bold" href="https://gvrvnarnaware.vercel.app/">
              @its_gvrv
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
