import Image from "next/image";
import React from "react";

const FundSupport = () => {
  return (
    <div className="container  m-auto  p-5 md:p-0">
      <h1 data-aos="fade-up" className=" font-bold text-center text-3xl ">Fundding Supporter</h1>
      <p data-aos="fade-up" className="text-center text-gray-500 py-5">
        Savali Bahuddyeshiy Sanstha
      </p>

      <div  data-aos="fade-up" className="flex items-center  p-5 justify-center border flex-col md:flex-row  gap-5">
        <Image alt="satyarthilogo"  src="/Funding/satyarthilogo.jfif" width={200} height={100} />

        <div className="border p-5 rounded-md font-bold  flex gap-5 items-center">
          <i className="uil uil-user text-xl " /> <p>Local Contribution</p>
        </div>
      </div>
    </div>
  );
};

export default FundSupport;
