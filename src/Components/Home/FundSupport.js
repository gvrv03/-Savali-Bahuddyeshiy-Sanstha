import Image from "next/image";
import React from "react";

const FundSupport = () => {
  return (
    <div className="container  m-auto  p-5 md:p-0">
      <h1 className=" font-bold text-center text-3xl ">Fundding Supporter</h1>
      <p className="text-center text-gray-500 py-5">
        Savali Bahuddyeshiy Sanstha
      </p>

      <div className="flex items-center justify-center border gap-5">
        <Image src="/Funding/satyarthilogo.jfif" width={200} height={100} />

        <div className="border p-5 rounded-md font-bold  flex gap-5 items-center">
          {" "}
          <i className="uil uil-user text-xl " /> <p>Local Contribution</p>
        </div>
      </div>
    </div>
  );
};

export default FundSupport;
