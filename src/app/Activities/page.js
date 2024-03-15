import { SingleCard } from "@/Components/Home/Activities";
import { activityDetails } from "@/JSONData/HomeData";
import React from "react";

const page = () => {
  return (
    <div className="mt-[92px]" >
      <div className="grid grid-cols-2 container m-auto  md:grid-cols-4">
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
