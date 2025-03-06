import Image from "next/image";
import React from "react";

const FundSupport = () => {
  return (
    <div className="container py-20 m-auto   bg-white ">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Funding Supporter
        </h2>
        <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Savali Bahuddyeshiy Sanstha
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="flex items-center  p-5 justify-center border flex-col md:flex-row  gap-5"
      >
        <Image
          alt="satyarthilogo"
          src="/Funding/satyarthilogo.jfif"
          width={200}
          height={100}
        />

        <div className="border p-5 rounded-md font-bold  flex gap-5 items-center">
          <i className="uil uil-user text-xl " /> <p>Local Contribution</p>
        </div>
      </div>
    </div>
  );
};

export default FundSupport;
