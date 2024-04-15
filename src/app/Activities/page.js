import { SingleCard } from "@/Components/Home/Activities";
import { activityDetails } from "@/JSONData/HomeData";
import React from "react";

const page = () => {
  return (
    <div className="mt-[88px]">
      <div className="bg-red-800 text-white py-5 px-5 md:px-0 ">
        <div className="container m-auto">
          <h1 className=" text-2xl md:text-4xl font-bold ">Activities</h1>
          <p className=" text-sm md:text-xl py-2">
            Savali Bahuddyeshiy Sanstha{" "}
          </p>
        </div>
      </div>
      <div className="  p-5 md:px-0 mt-5 grid gap-5 grid-cols-2 container m-auto  md:grid-cols-4">
        {activityDetails?.map((item, index) => {
          return (
            <SingleCard
              key={index}
              image={item.image}
              name={item.name}
              details={item.details}
              noOf={item.noOf}
            />
          );
        })}
      </div>
    </div>
  );
};

export default page;
