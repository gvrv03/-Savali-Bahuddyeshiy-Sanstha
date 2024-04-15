"use client";
import { activityDetails } from "@/JSONData/HomeData";
import { useRouter } from "next/navigation";
import React from "react";

const Activities = () => {
  const router = useRouter();
  return (
    <section className="text-gray-600 md:p-0 p-5 body-font">
      <div className="container  py-24 mx-auto">
        <div data-aos="fade-up" className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Core Activities of Organization
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5  md:grid-cols-4">
          {activityDetails?.slice(0, 4).map((item, index) => {
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
        <div className="w-full bg-white flex mt-5 items-center justify-center">
          <button
          data-aos="fade-down"
            className="border uppercase   px-20 py-3 "
            onClick={() => {
              router.push("/Activities");
            }}
          >
            See More
          </button>
        </div>{" "}
      </div>
    </section>
  );
};

export const SingleCard = ({ name, details, image, noOf }) => {
  return (
    <div data-aos="fade-down" className="bg-white border border-gray-200 rounded-lg  p-2 w-full ">
      <div className="rounded-lg h-52 overflow-hidden">
        <img
          alt="content"
          className="object-cover object-center h-full w-full"
          src={image}
        />
      </div>
      <h2 className=" md:text-xl  mt-2 md:mt-5 text-sm font-medium title-font text-gray-900 ">
        {name}
      </h2>

      <p className="md:text-sm text-xs text-gray-600">{noOf}</p>
      <p className="md:text-base text-xs leading-relaxed mt-2 text-justify">
        {details}
      </p>
    </div>
  );
};

export default Activities;
